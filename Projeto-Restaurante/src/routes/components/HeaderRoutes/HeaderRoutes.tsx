import './headerRoutes.css';
import { Link } from 'react-router-dom';

interface HeaderRoutesProps{
    primeiraRota:string,
    logoPrimeiraRota:string,
    tituloHeader:string, 
    segundaRota:string, 
    logoSegundaRota:string
}

export const HeaderRoutes = ({primeiraRota, logoPrimeiraRota, tituloHeader, segundaRota, logoSegundaRota}:HeaderRoutesProps)=>{
    return(
        <div className="container-header-contact">

            <Link to={primeiraRota} className='link-to-back-home'>
                <i className={logoPrimeiraRota} id='primeira-rota'></i>
            </Link>

            <h1 className="title-header-contact">{tituloHeader}</h1>

            <Link to={segundaRota} className='link-to-about'>
                <i className={logoSegundaRota} id='segunda-rota'></i>
            </Link>

        </div>
    );
};