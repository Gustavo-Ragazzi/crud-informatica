import { FaFilter } from "react-icons/fa";

export default function AdvancedFilter() {
    return (
        <aside className="flex flex-col bg-gray-700 items-center mr-2 p-5 text-lg flex-shrink-0">
            <div className="flex items-center gap-2">
                <FaFilter className="text-white text-lg"/>
                <h2 className="text-white flex">Filtrar por</h2>
            </div>
            <h3 className="text-white flex">Preço</h3>
            <h4 className="text-white flex">Marcas</h4>
            <h4 className="text-white flex">Categorias</h4>
        </aside>
    )
}