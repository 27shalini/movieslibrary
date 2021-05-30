import React, { Component } from 'react';
import{getMovies} from '../service/fakeservice'
import Pagination from './sample/pagination';
import ListGroup from './utils/listGroup';
import { Paginate } from './utils/paginate';
 import{getGenres} from './utils/fakeGenerService';
import MovieTable from './movieTable';
import _ from "lodash";


class Movies  extends Component{

    state = { 
    movies: [],
    genres : [],
    pageSize : 4, //with 4 movies on each page we make sure our pagination will render 3 pages
    currentPage : 1,
    sortColumn :  {path: "title", order: 'asc'},

};

    componentDidMount() {
    const genres = [{ _id: "", name: "All Movies"}, ...getGenres()]
    this.setState({
    movies : getMovies(),
    genres});
 }


    handleDelete=(movie)=>{
    const movies = this.state.movies.filter((m)=>m._id!== movie._id);

    this.setState({movies});
};

    handleLike = (movie)=>{
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]}
    movies[index].liked = !movies[index].liked
    this.setState({
    movies,
    })
}

    handlePageChange=(page)=>{
    this.setState({
    currentPage : page
    })
 }

    handleGenreSelect = (genre) =>{
    this.setState({
    selectedGenre : genre,
    currentPage : 1
    })
  }

        handleSort = (sortColumn) =>{
        this.setState({
        sortColumn  });
   }

getpagedData=()=>{
        const {
        pageSize, 
        currentPage, 
        selectedGenre, 
        movies:allMovies,
        sortColumn
        }= this.state;

            const filtered = selectedGenre && selectedGenre._id ?
            allMovies.filter(m=> m.genre._id === selectedGenre._id) : allMovies;

            const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

            const movies = Paginate(sorted, currentPage, pageSize)

            return {totalCount : filtered.length, data: movies}
            };

            render() { 

            const {
            pageSize, currentPage, sortColumn} = this.state;

                const {length : count}  = this.state.movies;

                if(count === 0) return "There is no movies in databases";

                      const {totalCount, data:movies} = this.getpagedData();


            return ( 
                    <div className = "row">
                    <div className = "col-3">

                    <ListGroup  
                    items = {this.state.genres}
                    selectedItem  = {this.state.selectedGenre}
                    onItemSelected = {this.handleGenreSelect}/>
                    </div>

                            <div className = "col">

                            <h1> Showing {totalCount} Movie databases!</h1>

                            <MovieTable
                            movies = {movies} 
                            sortColumn = {sortColumn}
                            onLike = {this.handleLike}
                            onDelete = {this.handleDelete}
                            onSort = {this.handleSort}
                            />

                       <Pagination 
                             itemsCount={totalCount}
                             pageSize = {pageSize}
                             currentPage = {currentPage}
                            onPageChange= {this.handlePageChange}/>
                        </div>
                </div>
             );
         }
      }
export default Movies;