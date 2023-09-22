interface ItemImagemProps{
    imagem: string
}

export const ItemImagem = ({imagem}: ItemImagemProps)=>{
    return(
        <span className="item-menu-image" style={{backgroundImage: `url(${imagem})`}}></span>
    )
}