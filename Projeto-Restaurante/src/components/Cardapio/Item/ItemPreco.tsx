

interface ItemPrecoProps{
    preco: number
}



export const ItemPreco = ({preco}:ItemPrecoProps)=>{

    const precoParaDecimal = preco.toFixed(2);
    const precoParaString = precoParaDecimal.toString()

    return(
        <div className="container-item-preco-menu">
            <p className="item-menu-preco">R${precoParaString}</p>
        </div>
    )
}