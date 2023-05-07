import { BiSearchAlt } from "react-icons/bi";
import React, { useState } from "react";

interface Props {
    onSearch: (searchValue: string) => void;
}

export default function SearchHeader(props: Props) {
    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSearch(searchValue);
    }

    return (
        <header className="flex items-center justify-between gap-5">
            <form className="relative flex-1" onSubmit={handleSubmit}>
                <input 
                    className="w-full h-12 bg-gray-500 px-3 text-white rounded-full" 
                    placeholder="Procurar..." 
                    value={searchValue} 
                    onChange={(e) => 
                    setSearchValue(e.target.value)}
                />
                <button
                    type={"submit"} 
                    className="h-12 w-12 absolute top-0 right-0 flex items-center justify-center rounded-full"
                >
                    <BiSearchAlt className="text-4xl" />
                </button>
            </form>
        </header>
    )
}