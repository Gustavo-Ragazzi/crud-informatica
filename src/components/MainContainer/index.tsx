import React, { useState, useEffect } from "react";
import ResultTable from "../ResultTable/ResultTable";
import SearchHeader from "../SearchHeader/SearchHeader";
import { getDataFromAPI } from '../../connections';
import AddNewItemForm from "../AddNewItemForm";

export default function MainContainer() {
    const [storage, setStorage] = useState<Storage[]>([]);

    useEffect(() => {
        async function fetchData() {
        const result = await getDataFromAPI();
        setStorage(result);
    }
    fetchData();
}, []);

    return(
        <main className="bg-gray-700 p-5 flex-1">
            <SearchHeader />
            <ResultTable storage = {storage} />
            <AddNewItemForm></AddNewItemForm>
        </main>
    )
}
