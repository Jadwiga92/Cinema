import React from "react";
import restConfiguration from './restConfiguration';


const getMovies = async()=>{

    const response = await restConfiguration.get('/api/movies/');
    console.log(response.data);

return response.data;



};
export default getMovies;