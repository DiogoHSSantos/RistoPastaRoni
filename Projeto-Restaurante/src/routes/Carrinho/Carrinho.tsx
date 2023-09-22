import './carrinho.css'
import { Link } from 'react-router-dom'

export const Carrinho = ()=>{
    return(
        <div>
            <h1>Carrinho</h1>
            <Link to='/'>
                <h2>voltar</h2>
            </Link>
        </div>
    )
}