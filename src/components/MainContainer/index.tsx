import React, { useState, useEffect } from "react";
import ResultTable from "../ResultTable/ResultTable";
import SearchHeader from "../SearchHeader/SearchHeader";
import { getDataFromAPI } from '../../connections';
import { routeDelete, routePatch, routePost } from "../routes";

interface Item {
    nome: string;
    marca: string;
    preco: number;
    categoria: string;
    qnt: number;
    id: number;
}

export default function MainContainer() {
    const [storage, setStorage] = useState<Item[]>([]);
    const [filteredStorage, setFilteredStorage] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchData() {
            const result = await getDataFromAPI();
            setStorage(result);
            setFilteredStorage(result);
    }
    fetchData();
    }, []);

    const handlePost = async(item: Item) => {
        console.log(item)
        const nome = item.nome;
        const marca = item.marca;
        const preco = item.preco;
        const categoria = item.categoria;
        const qnt = item.qnt;

        try {
            await routePost(nome, marca, preco, categoria, qnt);
            const result = await getDataFromAPI();
            setStorage(result);
            setFilteredStorage(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handlePatch = async(item: Item) => {
        console.log(item)
         const nome = item.nome;
         const marca = item.marca;
         const preco = item.preco;
         const categoria = item.categoria;
         const qnt = item.qnt;
         const id = item.id;

         try {
             await routePatch(nome, marca, preco, categoria, qnt, id);
             const result = await getDataFromAPI();
             setStorage(result);
             setFilteredStorage(result);
         } catch (error) {
             console.log(error);
         }
    }

    const handleDelete = async(id: number) => {
        try {
            await routeDelete(id);
            const result = await getDataFromAPI();
            setStorage(result);
            setFilteredStorage(result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = (searchValue: string) => {
        const newFilteredStorage = storage.filter(
            (item) =>
                item.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.marca.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.categoria.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredStorage(newFilteredStorage);
    }

    return(
        <main className="bg-gray-700 p-5 flex-1">
            <SearchHeader onSearch={handleSearch}/>
            <ResultTable storage={filteredStorage} handlePost={handlePost} handlePatch={handlePatch} handleDelete={handleDelete} />
        </main>
    )
}
