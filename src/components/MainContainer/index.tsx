import React, { useState, useEffect } from "react";
import ResultTable from "../ResultTable/ResultTable";
import SearchHeader from "../SearchHeader/SearchHeader";
import { getDataFromAPI } from '../../connections';

interface Storage {
    id: number;
    nome: string;
    marca: string;
    preco: number;
    categoria: string;
    qnt: number;    
}

export default function MainContainer() {
    const [storage, setStorage] = useState<Storage[]>([]);

    useEffect(() => {
        async function fetchData() {
        const result = await getDataFromAPI();
        setStorage(result);
    }
    fetchData();
}, []);

    console.log(storage)

    return(
        <main className="bg-gray-700 p-5 flex-1">
            <SearchHeader />
            <ResultTable />
        </main>
    )
}
