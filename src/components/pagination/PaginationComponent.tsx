import React, {FC, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {pagination} from "@/services/api.services";
import Link from "next/link";
type IProps = {
    currentPage : number,
    totalPages:number
}
const PaginationComponent:FC<IProps> = ({currentPage,totalPages}) => {

    return (
        <div>
            <Link href={`?page=${currentPage-1}`}>
                <button>prev</button>
            </Link>

            <Link href={`?page=${currentPage+1}`}>
                <button>next</button>
            </Link>
        </div>
    );
};

export default PaginationComponent;