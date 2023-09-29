import { Link } from 'react-router-dom';
import './headerCarrinho.css';

export const HeaderCarrinho = ()=>{
    return(
        <div className='container-header-carrinho'>
            <h1 className='title-header-carrinho'>Carrinho</h1>

            <Link to='/' className='Link-to-back-menu'>
                <i className='bx bx-left-arrow-alt'></i>
            </Link>
        </div>
    )
};
