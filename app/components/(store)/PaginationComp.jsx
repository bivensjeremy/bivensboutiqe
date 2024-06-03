'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";

const PaginationComp = ({ paginationData }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(paginationData.current_page);
    const { push } = useRouter();
    const paginationButton = [];

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('page', currentPage.toString());
        push(`${pathname}?${params.toString()}`);
    }, [currentPage])
    
    const handleChange = (e) => {
        setCurrentPage(e.target.value)
        console.log(e.target.value)
    }

    for (let i = 0; i < paginationData.total_pages; i++) {
        paginationButton.push( 
            <input 
                key={i + 1}
                className="btn btn-square hover:btn-primary" 
                type="radio" 
                name="options" 
                aria-label={i + 1}
                onClick={handleChange}
                value={i + 1}
            />
            // <button
            //     key={i + 1}
            //     value={i + 1}
            //     onClick={handleChange}
            //     className={`
            //         btn
            //         btn-square
            //         hover:btn-primary
            //         active:btn-warning
            //         ${currentPage === (i + 1) ? 'btn-primary' : 'btn-error' }
            //     `}
            // >{i+1}</button>
        )
    }
    return (
        <div className="flex justify-center py-6">
            <div className="flex gap-3">
                {paginationButton}
            </div>
        </div>
    );
}

export default PaginationComp;