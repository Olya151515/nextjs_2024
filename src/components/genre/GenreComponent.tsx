import React, {FC} from 'react';
import {IGenre} from "@/models/genres/IGenre";
import styles from "/src/components/genre/styleGenre/GenresStyle.module.css";
import Link from "next/link";
type IProps ={
    genre:IGenre
}

const GenreComponent:FC<IProps> = ({genre}) => {
    return (
        <div className={styles.oneGenre}>
            <Link className={styles.styleLinkGenre} href={'/'}>{genre.name}</Link>
        </div>
    );
};

export default GenreComponent;