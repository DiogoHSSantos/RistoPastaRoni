interface ItemDescricaoProps{
    descricao?: string | undefined
}

export const ItemDescricao = ({descricao}:ItemDescricaoProps)=>{
    return(
        <p className="item-menu-description">{descricao}</p>
    )
}