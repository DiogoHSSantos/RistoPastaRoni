import { CardapioGrupo } from './CardapioGrupo';
import { Link } from 'react-router-dom';
import './cardapio.css';

import { pizzas, combos, lanches, porcoes } from './listaDeItens';

import { useState } from 'react'


interface CardapioProps{
    setTotalDeItens: React.Dispatch<React.SetStateAction<object[]>>,
    totalDeItens:object[]
}


export const Cardapio = ({setTotalDeItens, totalDeItens}:CardapioProps)=>{

    const [precoTotal, setPrecoTotal] = useState(0.00);
    
    return(
        <div className='cardapioContainer'>
            <h1 className='menu-type-item'>Lanches:</h1>
            <CardapioGrupo totalDeItens={totalDeItens} setTotalDeItens={setTotalDeItens} precoTotalAtual={precoTotal} setPrecoTotal={setPrecoTotal} tipoItem={lanches}/>

            <h1 className='menu-type-item'>Pizzas:</h1>
            <CardapioGrupo totalDeItens={totalDeItens} setTotalDeItens={setTotalDeItens} precoTotalAtual={precoTotal} setPrecoTotal={setPrecoTotal} tipoItem={pizzas}/>

            <h1 className='menu-type-item'>Porções:</h1>
            <CardapioGrupo totalDeItens={totalDeItens} setTotalDeItens={setTotalDeItens} precoTotalAtual={precoTotal} setPrecoTotal={setPrecoTotal} tipoItem={porcoes}/>

            <h1 className='menu-type-item'>Combos:</h1>
            <CardapioGrupo totalDeItens={totalDeItens} setTotalDeItens={setTotalDeItens} precoTotalAtual={precoTotal} setPrecoTotal={setPrecoTotal} tipoItem={combos}/>

            <span className='valor-total-itens-carrinho'>
                <Link to='/Carrinho' className='link-to-carrinho-style'>
                    <h1 className='descricao-valor-itens-carrinho'>Total: R${precoTotal.toFixed(2)}</h1>
                </Link>
            </span>
        </div>
    )
}