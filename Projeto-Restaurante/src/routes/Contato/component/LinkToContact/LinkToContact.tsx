 import './linkToContact.css';

 interface linkToContactProps{
    link:string,
    logo:string,
    name:string
 }

export const LinkToContact = ({link, logo, name}:linkToContactProps)=>{
    return(
        <div className="container-link-to-contact">
            <a href={link} className='a-to-link-contact'>
                <i className={logo} id='logo-to-link-contact'></i>
                <h2 className='name-to-link-contact'>{name}</h2>
            </a>
        </div>
    );
};