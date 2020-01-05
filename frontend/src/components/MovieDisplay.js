import React from "react";
import getMovies from '../api/restConnection';

class MovieDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state={ movies: []};

    };

  displayingMovies = async () => {

        try {
            const movies = await getMovies();
            console.log('movies', movies);

            this.setState({
                movies: movies

            });
        } catch (err) {
            console.log(err);
        }
    };
    renderMovies(){
        return this.state.movies.map((movie,i)=>{
            return (
                <div  key={i}>
                    <div>{movie.title}</div>
                </div>
            )
        })
    }

    componentDidMount() {

        this.displayingMovies();
    }

    render() {

        return (
            <div>
                {this.renderMovies()}
            </div>


        )
    }
}

export default MovieDisplay;

