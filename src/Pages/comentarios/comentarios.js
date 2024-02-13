import React from 'react'
import './coment.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function Comentarios(){
    
    return (
      <>
          <Header />
                   
          <section className="content">

                <div className="comenta">
                    <h3>Deixe aqui seu comentário</h3>
                                       
                    <textarea className="field" name="comentario" placeholder="Digite seu comentário aqui."></textarea>
                    <input className="botton2" type="submit" value="Enviar"/>         
                </div>

            </section>

                                                 
          <Footer/> 
      </>
    )

}

export default Comentarios;


