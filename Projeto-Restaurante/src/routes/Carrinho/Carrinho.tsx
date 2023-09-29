import Footer from '../../components/Footer'
import './carrinho.css'
import HeaderCarrinho from './component/HeaderCarrinho'
// import { Link } from 'react-router-dom';

export const Carrinho = ()=>{
    return(
        <div className='container-carrinho'>
            <HeaderCarrinho/>
            <div className='context-area'>
                <p className='context-area-paragraph'>
                    Olá, infelizmente não possuo ainda, capacidade ou aprendizado com banco de dados para guardar o seu pedido. peço que aguarde, pois essa é somente a primeira versão desse projeto. Logo mais irei trazer uma versão mais atualizada desse projeto contendo tambem um banco de dados para guardar os seus pedidos e o valor total do mesmo, desde já agradeço.
                    <br/>
                    Este projeto foi inteiramente produzido com react !
                </p>
            </div>
            <Footer/>
        </div>
    )
}