import Logo from '../Logo'
import './header.css'

import { Link } from 'react-router-dom';

interface HeaderProps{
    totalDeItens: object[]
}

export const Header = ({totalDeItens}:HeaderProps)=>{



    return(
        <div className='header'>
            <span className='imagemDeFundo'></span>
            <Link to='/Carrinho' className='carrinho-de-compras'>
                <p className='numero-de-itens-selecionados'>{totalDeItens.length}</p>
                <i className='bx bxs-cart'></i>
            </Link>
            <Logo/>
            
        </div>
    )
}
