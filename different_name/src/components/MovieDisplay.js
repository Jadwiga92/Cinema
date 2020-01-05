import React from "react";
import getMovies from '../api/restConnection';

class MovieDisplay extends React.Component {
    constructor(props) {
        super(props);


    };

  displayingMovies = async () => {

        try {
            const movies = await getMovies();
            console.log('movies', movies);

            this.setState({
                movies: movies.map((movie, i) => (
                    <div key ={movie.title}>
                        <div>{movie.title}</div>
                    </div>
                ))
            });
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount() {

        this.displayingMovies();
    }

    render() {
        console.log('first state', this.state)
        console.log('state: ', this.state.movies);
        return (
            <div>

            </div>


        )
    }
}

export default MovieDisplay;

// const MovieDisplay = async ()=> {
//     let jsxMovies;
//     try {
//         const movies = await getMovies();
//         console.log('movies', movies);
//
//          jsxMovies = movies.map((movie) => {
//             return <div>{this.movie.title}</div>
//
//         });
//     }
//     catch(err){
//         console.log(err);
//         jsxMovies = 'blad';
//     }
// return (
//     <div>
//
//         {jsxMovies}
//     </div>
//
// )
//
//
//
// };
//
// export default MovieDisplay;