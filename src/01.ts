/*1. Implemente e teste o modelo de classes com base na seguinte
imagem:*/

class Item {
    valor: number
    nome: string
    descricao: string
    constructor(valor: number, nome: string, descricao: string) {
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
    mostrarItem(){
        return console.log(this.valor, this.nome, this.descricao)    
    }

}


class Pedidos {
    itens: Item[] = []
    valorTotal: number = 0
    
    adicionarItem(Item: Item): void {
        this.itens.push(Item)
        this.valorTotal += Item.valor

    }
    mostrarItens() {
        return console.log(this.itens, this.valorTotal)
    
}
}

const item1 = new Item(10, "maça", "maça verde")
const item2 = new Item(20, "pera", "pera verde")


const pedido1 = new Pedidos()

pedido1.mostrarItens()

pedido1.adicionarItem(item1)

pedido1.mostrarItens()

pedido1.adicionarItem(item2)

pedido1.mostrarItens()