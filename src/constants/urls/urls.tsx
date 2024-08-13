export let urlPoster ='https://image.tmdb.org/t/p/w200';

export let urlsApi ={
    movies:{
        getAllMovies:'https://api.themoviedb.org/3/discover/movie?page=',
        getAllMoviesByGenreId:'https://api.themoviedb.org/3/discover/movie?with_genres='
    },
    genre:{
        getAllGenres:'https://api.themoviedb.org/3/genre/movie/list'
    }
}