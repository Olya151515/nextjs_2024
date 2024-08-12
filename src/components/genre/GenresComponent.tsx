import React, {FC} from 'react';
import {IGenre} from "@/models/genres/IGenre";
import GenreComponent from "@/components/genre/GenreComponent";
import styles from "/src/components/genre/styleGenre/GenresStyle.module.css";
type IProps = {
    genres:IGenre[]
}

const GenresComponent:FC<IProps> = ({genres}) => {
    return (
        <div className={styles.body}>
            {
                genres.map(genre => <GenreComponent genre={genre}/>)
            }
        </div>
    );
};

export default GenresComponent;