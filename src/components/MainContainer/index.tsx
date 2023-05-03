import ResultTable from "../ResultTable/ResultTable";
import SearchHeader from "../SearchHeader/SearchHeader";

export default function MainContainer() {
    return(
        <main className="bg-gray-700 p-5">
            <SearchHeader></SearchHeader>
            <ResultTable></ResultTable>
        </main>
    )
}