// import { MouseEventHandler } from "react"

interface ItemCarrinhoProps{

    onclick: ()=> void
}

export const ItemCarrinho = ({onclick}:ItemCarrinhoProps)=>{
    return(
        <button className="item-menu-card-add" onClick={onclick}><i className='bx bxs-cart-add'></i></button>
    )
}