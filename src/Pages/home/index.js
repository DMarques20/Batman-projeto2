import React, {lazy, Suspense, useState } from 'react'
import Header from '../../components/header/header'
import './styles.css';
import video from '../../assets/video.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';



function Home(){
    return (
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={video} />
                        Seu navegador não possui suporte para videos
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                                “The Batman é um thriller cheio de ação que retrata o Batman em seus primeiros anos, 
                            lutando para equilibrar a raiva com a retidão enquanto investiga um mistério perturbador
                            que aterrorizou Gotham. Robert Pattinson oferece um retrato cru e intenso do Batman como
                            um vigilante desiludido e desesperado despertado pela compreensão de que a raiva que o 
                            consome não o torna melhor do que o cruel assassino em série que ele está caçando”.
                        </p>
                        <button className='button'>Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <Cards/>
            <Footer/>
            
        </>
        
    )    
}

export default Home;