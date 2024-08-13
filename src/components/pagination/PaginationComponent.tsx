
import React, {FC} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

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