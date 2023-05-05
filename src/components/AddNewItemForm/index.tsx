import { useState } from "react"
import Button from "../Button"
import InputForm from "../InputForm"
import { FaTimes } from "react-icons/fa"

export default function AddNewItemForm() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const hideForm = () => {
        setIsFormVisible(false);
    };

    return (
        <>  
            {isFormVisible && (
                <div id="add-form" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-md p-6 shadow-lg w-9/12">
                    <button className="absolute top-0 right-0 p-2 hover:bg-gray-400" onClick={hideForm}>
                        <FaTimes />
                    </button>
                    <form className="flex flex-col gap-5 justify-center">
                        <InputForm label={"Nome"} type={"text"} name={"nome"} placeholder={"Ryzen 5 5600x"} />
                        <InputForm label={"Marca"} type={"text"} name={"marca"} placeholder={"Asus"} />
                        <InputForm label={"Preço"} type={"number"} name={"preco"} placeholder={"1399.99"} />
                        <InputForm label={"Categoria"} type={"text"} name={"categoria"} placeholder={"CPU"} />
                        <InputForm label={"Qnt"} type={"number"} name={"qnt"} placeholder={"5"} />
                        <Button text={"Enviar"} type={"submit"}/>
                    </form>
                </div>
            )}
        </>
    )
}
