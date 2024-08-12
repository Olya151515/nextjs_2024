import React from 'react';
import {genres} from "@/services/api.services";
import {GenresResponse} from "@/models/genres/GenresResponse";
import {IGenre} from "@/models/genres/IGenre";
import GenresComponent from "@/components/genre/GenresComponent";

const Page =  async () => {
    let response:IGenre[] = await genres.getGenres();
    return (
        <div>
            <GenresComponent genres={response}/>

        </div>
    );
};

export default Page;