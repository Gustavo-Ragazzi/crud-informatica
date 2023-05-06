import { useState } from "react"
import Button from "../Button"
import InputForm from "../InputForm"
import { FaTimes } from "react-icons/fa"
import { getDataFromAPI } from "../../connections";

interface AddNewItemFormProps {
    onClose: () => void;
}

export default function AddNewItemForm(props: AddNewItemFormProps) {
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [preco, setPreco] = useState<number>(0);
    const [categoria, setCategoria] = useState("");
    const [qnt, setQnt] = useState<number>(0);

    const hideForm = () => {
        setIsFormVisible(false);
        props.onClose();
    };

    const addNewItemSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/storage/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: 15,
                    nome: nome,
                    marca: marca,
                    preco: preco,
                    categoria: categoria,
                    qnt: qnt
                })
            });

            if (!response.ok) {
                throw new Error("Falha ao tentar adicionar item");
            }

            console.log("Item adicionado com sucesso!");
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            {isFormVisible && (
                <div id="add-form" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-md p-6 shadow-lg w-9/12">
                    <button className="absolute top-0 right-0 p-2 hover:bg-gray-400" onClick={hideForm}>
                        <FaTimes />
                    </button>
                    <form className="flex flex-col gap-5 justify-center" onSubmit={addNewItemSubmit}>
                        <InputForm
                            label={"Nome"}
                            type={"text"}
                            name={"nome"}
                            placeholder={"Ryzen 5 5600x"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                        />
                        <InputForm
                            label={"Marca"}
                            type={"text"}
                            name={"marca"}
                            placeholder={"Asus"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMarca(e.target.value)}
                        />
                        <InputForm
                            label={"Preço"}
                            type={"number"}
                            step={"any"}
                            name={"preco"}
                            placeholder={"1399.99"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPreco(parseFloat(e.target.value))}
                        />
                        <InputForm
                            label={"Categoria"}
                            type={"text"}
                            name={"categoria"}
                            placeholder={"CPU"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategoria(e.target.value)}
                        />
                        <InputForm
                            label={"Qnt"}
                            type={"number"}
                            name={"qnt"}
                            placeholder={"5"}
                            required={true}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQnt(parseFloat(e.target.value))}
                        />
                        <Button text={"Enviar"} type={"submit"}>Adicionar</Button>
                    </form>
                </div>
            )}
        </>
    )
}
