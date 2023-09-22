import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = ()=>{
    return(
        <div className="footer">
            <div className='descricao'>
                <p>Desenvolvido por Diogo Henrique</p> 
            </div>

            <div className='links'>
                <Link to='/Contato' className='link'><i className='bx bx-link'></i> Contato </Link>
                <Link to='/Sobre' className='link'><i className='bx bx-link'></i> Sobre mim </Link>
            </div>
        </div>
    )
}