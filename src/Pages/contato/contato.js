import React,{useState} from 'react'
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function Contato(){
  const [nome, setNome]=useState('Digite seu nome')
  

  return (
      
    <>
      
      <Header />
      <h3>Formulário de contato</h3>
      <section className="content">

        <div className="contato">
                
          <form className="form" method="POST" action="./email.php"/>
          <input className="field" name="name" placeholder="Digite seu nome"/>
          <input className="field" name="email" placeholder="E-mail"/>
          <textarea className="field2" name="mesage" placeholder="Digite sua mensagem aqui."></textarea>
          <input className="botton" type="submit" value="Enviar"/>           
        </div>
      </section>
                       
      <Footer />                                
           
    </>
  )

}

export default Contato;