export async function routePost(nome:string, marca:string, preco:number, categoria:string, qnt:number) {
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