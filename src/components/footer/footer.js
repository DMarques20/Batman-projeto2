import React from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo1.jpg';

function Footer(){
    return (
        <footer>
            <img id='logo' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Domingos Marques</span>
            <nav class="footer-navigation">
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                        
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/fotos'> 
                        <li>Fotos</li>
                    </Link>
                    
                    <Link style={{ textDecoration: 'none' }} to='/Comentarios'> 
                        <li>Comentários</li>
                    </Link>

                    
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;