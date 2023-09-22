interface ItemNomeProps{
    nome: string
}

export const ItemNome = ({nome}:ItemNomeProps)=>{
    return(
        <div className="area-item-menu-name">
            <h1 className="item-menu-name">{nome}</h1>
        </div>
    )
}