import { useState } from "react"
import Button from "../Button"
import InputForm from "../InputForm"
import { FaTimes } from "react-icons/fa"

interface AddNewItemFormProps {
    onClose: () => void;
  }
  
  export default function AddNewItemForm(props: AddNewItemFormProps) {
      const [isFormVisible, setIsFormVisible] = useState(true);
      const [nome, setNome] = useState("");
      const [marca, setMarca] = useState("");
      const [preco, setPreco] = useState("");
      const [categoria, setCategoria] = useState("");
      const [qnt, setQnt] = useState("");
      
      const hideForm = () => {
          setIsFormVisible(false);
          props.onClose();
      };

      const addNewItemSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Nome:", nome);
        console.log("Marca:", marca);
        console.log("Preço:", preco);
        console.log("Categoria:", categoria);
        console.log("Quantidade:", qnt);
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                        />
                        <InputForm 
                            label={"Marca"}
                            type={"text"}
                            name={"marca"}
                            placeholder={"Asus"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMarca(e.target.value)}
                        />
                        <InputForm 
                            label={"Preço"}
                            type={"number"}
                            name={"preco"}
                            placeholder={"1399.99"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPreco(e.target.value)}
                     />
                        <InputForm 
                            label={"Categoria"}
                            type={"text"}
                            name={"categoria"}
                            placeholder={"CPU"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategoria(e.target.value)}
                        />
                        <InputForm 
                            label={"Qnt"}
                            type={"number"}
                            name={"qnt"}
                            placeholder={"5"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQnt(e.target.value)}
                        />
                        <Button text={"Enviar"} type={"submit"}>Adicionar</Button>
                    </form>
                </div>
            )}
        </>
    )
}
