import { Link } from 'react-router-dom';
import './navbar.css';

interface Props{
    rota1:string,
    descricaoRota1:string,
    rota2:string,
    descricaoRota2:string

}

export const NavBar = ({rota1, descricaoRota1, rota2, descricaoRota2}:Props)=>{
    return(
        <div className='navBarArea'>
            <Link to={rota1} className='link'>{descricaoRota1}</Link>
            <Link to={rota2} className='link'>{descricaoRota2}</Link>
        </div>
    )
}