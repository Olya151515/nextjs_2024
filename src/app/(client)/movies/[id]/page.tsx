import React from 'react';
import {IMovie} from "@/models/movies/IMovie";
import {urlPoster} from "@/constants/urls/urls";

const Page = ({searchParams}:any) => {
    let movie:IMovie = JSON.parse(searchParams.data);
    return (
        <div>
            <img src={urlPoster+movie.poster_path} alt="photo"/>

            it is one movie info
        </div>
    );
};

export default Page;