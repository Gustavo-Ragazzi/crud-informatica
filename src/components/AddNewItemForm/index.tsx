import InputForm from "../InputForm"

export default function AddNewItemForm() {
    return (
        <form id="add-form" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-md p-6 shadow-lg w-9/12">
            <InputForm label={"Nome"} type={"text"} name={"nome"} placeholder={"Ryzen 5 5600x"} />
            <InputForm label={"Marca"} type={"text"} name={"marca"} placeholder={"Asus"} />
            <InputForm label={"Preço"} type={"number"} name={"preco"} placeholder={"1399.99"} />
            <InputForm label={"Categoria"} type={"text"} name={"categoria"} placeholder={"CPU"} />
            <InputForm label={"Qnt"} type={"number"} name={"qnt"} placeholder={"5"} />
            <button></button>
        </form>
    )
}