'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoCloseCircle, IoCloseCircleOutline, IoSearch } from 'react-icons/io5'
import { useDebounce } from 'use-debounce';

export default function SearchBar({storeNotAvailable}) {
    const [searchText, setSearchText] = useState('');
    const [placeholderText, setPlaceholderText] = useState('Type to Search...');
    const [searchQuery] = useDebounce(searchText, 500)
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        searchQuery ? params.set('search', searchQuery) : params.delete('search');
        replace(`${pathname}?${params.toString()}`);
    }, [searchQuery])

    return (
        <div className="relative flex flex-1 flex-shrink-0 m-auto w-full sm:w-2/3 p-3">
            <label className="input input-bordered input-secondary w-full rounded-full flex items-center gap-2 ">
                
                <IoSearch className='pointer-events-none flex-shrink-0'/>

                <input 
                    type="text" 
                    className="grow" 
                    id='searchInput'
                    placeholder={placeholderText}
                    disabled={storeNotAvailable} 
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />

                {searchText.length != 0 
                    ? <IoCloseCircle 
                        role='button' 
                        className='text-error' 
                        onClick={()=>{
                            setPlaceholderText('Type to Search'), 
                            document.getElementById('searchInput').value='', 
                            setSearchText('')
                        }} />
                    : null
                }
            </label>
        </div>
    );
}