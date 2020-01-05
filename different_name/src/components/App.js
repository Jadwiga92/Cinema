import React from 'react';
import MovieDisplay from './MovieDisplay';
import getMovies from '../api/restConnection'


class App extends React.Component {
    state={ movies: []};



    const
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         title : '',
    //         description: '',
    //         genre: '',
    //         director:'',
    //         movieDisplays: {
    //             date: null,
    //             seats:null,
    //             numbersOfBookedSeats:null
    //         }
    //
    //     };
    //
    //
    //
    // };
    render(){
        return(

<div><MovieDisplay/> </div>

    )
    }
}

export default App;