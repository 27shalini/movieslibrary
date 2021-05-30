import React, { Component } from 'react';
import Counter from './counter';
import NavBar from './navBar';

class Counters extends Component {
    state = { 

        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0},
        ]
     }

     handleIncrement=(counter)=>{
        const counters=[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({
            counters
        })
       
    }
        

    handleDecrement=(counter)=>{
   
       const counters=[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        
            this.setState({
                counters,
    });

}
   
     handleReset=()=>{
    const counters=
    this.state.counters.map((c)=>{
        c.value = 0;
        return c;
    })

    this.setState({
        counters
    })

}

     handleDelete=(counterId)=>{
     const counters = this.state.counters.filter((c)=>c.id!== counterId)
     this.setState({counters });
    }


    render() { 


        return (
           <div className = "counters"> 
            <NavBar totalCounter = {this.state.counters.filter(c=>c.value > 0).length}/>
            <main className = "container">
            <button className = "btn btn-info  btn-sm my-3 " onClick = {this.handleReset}> Reset </button>
            {this.state.counters.map((counter)=>{
                console.log(counter)

            return <Counter key ={counter.id} 
           
            onDelete= {this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement = {this.handleDecrement}
            counter = {counter}/>
            })}
            </main>
        </div> 
     
     );
    }
}

export default Counters;