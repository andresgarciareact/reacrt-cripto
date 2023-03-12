import React from "react";

const InicioApp = ({ coin, index }) => {
  return (
    <div className="container" data-testid="div">
        <h1 className="center">CRIPTO BLOG WILLIAN ANDRES GARCIA</h1>
        <img src="./criptoblog.png" className="img" alt="criptoblog"></img>
       <div className="flex">
       <h5 className="justify">
           ¡Bienvenidos al mundo de las criptomonedas! En este blog encontrarás todo lo que necesitas saber sobre esta revolucionaria tecnología financiera que está transformando el mundo de las transacciones y la inversión.
            Aquí exploraremos las diferentes criptomonedas, su historia y su función en el mercado actual. Te ofreceremos información detallada sobre las tendencias del mercado, las noticias y los acontecimientos importantes que afectan a las criptomonedas.
            Además, te guiaremos en cómo invertir en criptomonedas de manera segura y eficaz, incluyendo consejos y trucos para maximizar tus ganancias y minimizar tus riesgos.
            En este blog, nuestra misión es ayudarte a entender y aprovechar al máximo las criptomonedas. No importa si eres un principiante o un experto, ¡tenemos contenido para todos! Únete a nuestra comunidad y descubre el mundo de las criptomonedas junto a nosotros.
        </h5>
        </div> 
       
        
        
    </div>
 );
};

export default InicioApp;
