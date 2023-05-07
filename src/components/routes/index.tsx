import { apiUrl, getDataFromAPI } from "../../connections";

async function nextValidId() {
    const data = await getDataFromAPI();

    if (data[data.length - 1].id === data.length - 1) {
        return data.length
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id !== i) {
                return i;
            }
        } 
    }
}

export async function routePost(nome:string, marca:string, preco:number, categoria:string, qnt:number) {
    const nextId = await nextValidId();

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: nextId,
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

export async function routePatch(nome:string, marca:string, preco:number, categoria:string, qnt:number, id:number) {
    console.log(apiUrl + id)
    try {
        const response = await fetch(apiUrl + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
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
        console.log("Item editado com sucesso!");
    } catch (error) {
        console.log(error)
    }
}

export async function routeDelete(id: number) {
    try {
        const response = await fetch(apiUrl + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
    });

    if(!response.ok) {
        throw new Error ("Falha ao tentar excluir item")
    }
    console.log("Item excluído com sucesso");
    } catch (error) {
        console.log(error);
    }
}