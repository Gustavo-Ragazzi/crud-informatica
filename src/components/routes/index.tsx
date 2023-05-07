import { apiUrl, getDataFromAPI } from "../../connections";

async function nextValidId() {
    const data = await getDataFromAPI()

    for (let i = 0; i < data.lenght; i++) {
        if (data[i].id !== i) {
            console.log(i);
        }
    }

}
nextValidId()

export async function routePost(nome:string, marca:string, preco:number, categoria:string, qnt:number) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 13,
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