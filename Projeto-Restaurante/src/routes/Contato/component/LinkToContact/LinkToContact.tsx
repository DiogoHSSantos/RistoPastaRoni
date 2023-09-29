 import './linkToContact.css';
 import { Link } from 'react-router-dom';

 interface linkToContactProps{
    link:string,
    logo:string,
    name:string
 }

export const LinkToContact = ({link, logo, name}:linkToContactProps)=>{
    return(
        <div className="container-link-to-contact">
            <Link to={link} className='a-to-link-contact'>
                <i className={logo} id='logo-to-link-contact'></i>
                <h2 className='name-to-link-contact'>{name}</h2>
            </Link>
        </div>
    );
};