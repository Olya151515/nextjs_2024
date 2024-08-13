'use client'

import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import MovieByGenreComponent from "@/components/moviesByGenre/MovieByGenreComponent";
import styles from "/src/components/moviesByGenre/styleMoviesBygenre/StyleMoviesWithgenre.module.css";
import {useSearchParams} from "next/navigation";
import PaginationComponent from "@/components/pagination/PaginationComponent";

type IProps = {
    movies:IMovie[]
}
const MoviesByGenreComponent:FC<IProps> = ({movies}) => {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1');
    console.log(movies);
    return (
        <div >
            <div className={styles.mainDiv}>
                {movies.map(movie => <MovieByGenreComponent movie={movie}/>)}
            </div>
           <div className={styles.stylePagination}>
               <PaginationComponent currentPage={currentPage} totalPages={37723}/>
           </div>
        </div>
    );
};

export default MoviesByGenreComponent;