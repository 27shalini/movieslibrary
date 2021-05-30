import React from 'react';
import PropTypes from "prop-types"
import _ from "lodash";


const Pagination= ({itemsCount, pageSize, onPageChange, currentPage})=>{

 const pagesCount = Math.ceil(itemsCount / pageSize);
    
    if(pagesCount === 1) return null

    const pages = _.range(1, pagesCount + 1); //if pagecount is 4 it will be return an array b/w 1 to 3 and included in array


        return ( 
            <nav >

             <ul className="pagination">

                 {pages.map((page)=>( //we are mapping the pages of the array
                   
                  <li 
                  key= {page}
                   className= {page === currentPage? "page-item active" : "page-item"}>
                      
                    <a  className="page-link" onClick={() => onPageChange(page)}> 
                    {page}
                    </a>
                    </li>
                 ))}
              </ul>
                </nav>
      );
}
 
Pagination.propTypes = {

   itemsCount : PropTypes.number.isRequired,
   pageSize : PropTypes.number.isRequired,
   currentPage : PropTypes.number.isRequired,
   onPageChange : PropTypes.func.isRequired
}
export default Pagination; 