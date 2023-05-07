import { useState } from "react"
import Button from "../Button"
import InputForm from "../InputForm"
import { FaTimes } from "react-icons/fa"

interface Item {
    nome: string;
    marca: string;
    preco: number;
    categoria: string;
    qnt: number;
    id: number;
}
interface EditItemFormProps {
    handlePatch: (item: Item) => void;
    onClose: () => void;
    item: Item;
}

export default function EditItemForm(props: EditItemFormProps) {
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [nome, setNome] = useState(props.item.nome);
    const [marca, setMarca] = useState(props.item.marca);
    const [preco, setPreco] = useState(props.item.preco);
    const [categoria, setCategoria] = useState(props.item.categoria);
    const [qnt, setQnt] = useState(props.item.qnt);

    const hideForm = () => {
        setIsFormVisible(false);
        props.onClose();
    };

    const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = props.item.id;
        const item: Item = {nome, marca, preco, categoria, qnt, id};
        props.handlePatch(item);
    }

    return (
        <>
            {isFormVisible && (
                <div id="add-form" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-md p-6 shadow-lg w-1/3">
                    <button className="absolute top-0 right-0 p-2 hover:bg-gray-400" onClick={hideForm}>
                        <FaTimes />
                    </button>
                    <form className="flex flex-col gap-5 justify-center" onSubmit={handleEdit}>
                        <InputForm
                            label={"Nome"}
                            type={"text"}
                            name={"nome"}
                            value={nome}
                            placeholder={"Ryzen 5 5600x"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                        />
                        <InputForm
                            label={"Marca"}
                            type={"text"}
                            name={"marca"}
                            value={marca}
                            placeholder={"Asus"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMarca(e.target.value)}
                        />
                        <InputForm
                            label={"Preço"}
                            type={"number"}
                            step={"any"}
                            name={"preco"}
                            value={preco}
                            min={0}
                            placeholder={"1399.99"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPreco(parseFloat(e.target.value))}
                        />
                        <InputForm
                            label={"Categoria"}
                            type={"text"}
                            name={"categoria"}
                            value={categoria}
                            placeholder={"CPU"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategoria(e.target.value)}
                        />
                        <InputForm
                            label={"Qnt"}
                            type={"number"}
                            name={"qnt"}
                            value={qnt}
                            min={0}
                            placeholder={"5"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQnt(parseFloat(e.target.value))}
                        />
                        <Button text={"Enviar"} type={"submit"}>Editar</Button>
                    </form>
                </div>
            )}
        </>
    )
}
