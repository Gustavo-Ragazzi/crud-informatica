import { useState, useEffect } from "react";
import { BsTrash3Fill, BsPenFill } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import AddNewItemForm from "../AddNewItemForm";
import EditItemForm from "../EditItemForm";

export default function ResultTable (props: any) {
    const [result, setResult] = useState<any[]>([]);
    const [showAddForm, setAddShowForm] = useState(false);
    const [showEditForm, setEditShowForm] = useState(false);
    const [item, setItem] = useState<any[]>([]);

    useEffect(() => {
        async function loadObject() {
            setResult(await props.storage);
        }
        loadObject();
    },[props.storage])

    return (
        <>
            <table key={"TebleResultTable"} className="w-full my-6">
                <thead>
                    <tr className="text-white">
                        <th className="text-left px-4">Nome</th>
                        <th className="text-left px-4">Marca</th>
                        <th className="text-left px-4">Preço</th>
                        <th className="text-left px-4">Categoria</th>
                        <th className="text-left px-4">Qnt</th>
                        <th className="text-right" onClick={() => setAddShowForm(true)}><button><FcPlus className="text-3xl"/></button></th>
                    </tr>
                </thead>
                <tbody key={"ResultTable"}>
                    {result.map((item, index) => (
                        <tr key={"tr" + item + index} className={`text-white ${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800" }`}>
                            <td key={item.nome} className="text-left px-4 py-2">{item.nome}</td>
                            <td key={item.marca} className="text-left px-4 py-2">{item.marca}</td>
                            <td key={item.preco} className="text-left px-4 py-2">R$ {item.preco}</td>
                            <td key={item.categoria} className="text-left px-4 py-2">{item.categoria}</td>
                            <td key={item.qnt} className="text-left px-4 py-2">{item.qnt}</td>
                            <td key={item + "icons"} className="text-right px-4 py-2">
                                <div key={item + "div"}  className="flex items-center justify-end gap-3">
                                <button onClick={() => { setItem(item); setEditShowForm(true); }} itemID="item.id" id={"edit" + index} className="hover:text-green-600"><BsPenFill className="align-middle"/></button>
                                    <button onClick={() => props.handleDelete(item.id)} id={"delete" + item.id} className="hover:text-red-600"><BsTrash3Fill className="align-middle"/></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showAddForm && <AddNewItemForm handlePost={props.handlePost} onClose={() => setAddShowForm(false)} />}
            {showEditForm && <EditItemForm item={item} handlePatch={props.handlePatch} onClose={() => setEditShowForm(false)} />}
        </>
    )
}
