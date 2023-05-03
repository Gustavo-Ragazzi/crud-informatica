import React, { useState, useEffect } from "react";
import ResultTable from "../ResultTable/ResultTable";
import SearchHeader from "../SearchHeader/SearchHeader";
import { getDataFromAPI } from '../../connections';

export default function MainContainer() {
  const [storageData, setStorageData] = useState([]);

  useEffect(() => {
    async function fetchStorageData() {
      const data = await getDataFromAPI();
      setStorageData(data);
    }
    fetchStorageData();
  }, []);

  console.log(storageData)

  return(
      <main className="bg-gray-700 p-5 flex-1">
          <SearchHeader></SearchHeader>
          <ResultTable />
      </main>
  )
}
