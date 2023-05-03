import { BiSearchAlt } from "react-icons/bi";

export default function SearchHeader() {
    return (
        <header className="flex items-center justify-between gap-5">
            <div className="relative flex-1">
                <input className="w-full h-12 bg-gray-500 px-3 text-white rounded-full" placeholder="Procurar..."/>
                <button className="h-12 w-12 absolute top-0 right-0 flex items-center justify-center rounded-full">
                    <BiSearchAlt className="text-4xl" />
                </button>
            </div>
        </header>
    )
}