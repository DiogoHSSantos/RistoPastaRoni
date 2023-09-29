import './cardapio.css'

import { Item } from './Item/Item'
import { ItemDescricao } from './Item/ItemDescricao';
import { ItemCarrinho } from './Item/ItemCarrinho';
import { ItemImagem } from './Item/ItemImagem';
import { ItemNome } from './Item/ItemNome';
import { ItemPreco } from './Item/ItemPreco';

interface CardapioGrupoProps{
    tipoItem:  {
        id: string;
        nome: string;
        imagem: string;
        descricao?: string | undefined ;
        preco: number
    }[],
    setTotalDeItens: React.Dispatch<React.SetStateAction<object[]>>,
    totalDeItens: object[],

    setPrecoTotal: React.Dispatch<React.SetStateAction<number>>,
    precoTotalAtual: number 
}

export const CardapioGrupo = ({tipoItem, setPrecoTotal, totalDeItens, setTotalDeItens, precoTotalAtual}: CardapioGrupoProps)=>{

    

    const alterarPreco = (itemSelecionado:number, itemAll: {
        id: string;
        nome: string;
        imagem: string;
        descricao?: string | undefined;
        preco: number;
    })=>{
        setPrecoTotal(precoTotalAtual + itemSelecionado)


        setTotalDeItens([...totalDeItens, itemAll])


    }


    return(
        <div className="item-area-container">
                <div className='item-area'>
                    {tipoItem.map(item =>
                        <Item.Root key={item.id}>
                            <ItemImagem imagem={item.imagem}/>
                            <div className="container-all-itens">
                                <ItemNome nome={item.nome}/>
                                <ItemPreco preco={item.preco}/>
                                <ItemDescricao descricao={item.descricao}/>
                                <ItemCarrinho onclick={()=>alterarPreco(item.preco, item)} />
                            </div>
                        </Item.Root>
                    )}
                </div>
            </div>
    )
}
