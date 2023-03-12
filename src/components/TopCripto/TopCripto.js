import React from "react";

const TopCripto = ({ coin, index }) => {
  return (
    <div className="container">
        <img src="./topcripto.png" className="img" alt="topcripto"></img>
        <h1 className="center">10 principales criptomonedas por capitalización de mercado:</h1>
        <p className="justify"> <strong>1</strong> Bitcoin (BTC): Es la criptomoneda más antigua y más conocida, creada en 2009. Es la moneda digital más valorada y tiene una capitalización de mercado de más de $1 billón de dólares.</p>
        <p className="justify"> <strong>2</strong> Ethereum (ETH): Es la segunda criptomoneda más grande en términos de capitalización de mercado y se utiliza como una plataforma para aplicaciones descentralizadas y contratos inteligentes.</p>
        <p className="justify"> <strong>3</strong> Binance Coin (BNB): Es la moneda nativa del exchange de criptomonedas Binance. Se utiliza para pagar tarifas de transacción en la plataforma y tiene una capitalización de mercado de más de $90 mil millones de dólares.</p>
        <p className="justify"> <strong>4</strong> Cardano (ADA): Es una plataforma de contrato inteligente de código abierto que busca mejorar la escalabilidad y seguridad de las criptomonedas. Tiene una capitalización de mercado de más de $40 mil millones de dólares.</p>
        <p className="justify"> <strong>5</strong> Tether (USDT): Es una criptomoneda estable, respaldada por el dólar estadounidense en una proporción de 1:1. Es popular entre los traders que buscan una moneda digital estable para almacenar valor.</p>
        <p className="justify"> <strong>6</strong> Solana (SOL): Es una plataforma de contrato inteligente de alta velocidad que utiliza un nuevo algoritmo de consenso llamado prueba de historia. Tiene una capitalización de mercado de más de $30 mil millones de dólares.</p>
        <p className="justify"> <strong>7</strong> XRP (XRP): Es una criptomoneda utilizada en la red de pagos de Ripple. Busca facilitar las transferencias de dinero internacionales y tiene una capitalización de mercado de más de $30 mil millones de dólares.</p>
        <p className="justify"> <strong>8</strong> Polkadot (DOT): Es una plataforma de contrato inteligente interoperable que busca conectar diferentes blockchains. Tiene una capitalización de mercado de más de $25 mil millones de dólares.</p>
        <p className="justify"> <strong>9</strong> Dogecoin (DOGE): Es una criptomoneda basada en el meme de un perro Shiba Inu. Se ha vuelto popular en los últimos años y tiene una capitalización de mercado de más de $8 mil millones de dólares.</p>
        <p className="justify"> <strong>10</strong> USD Coin (USDC): Es una criptomoneda estable, respaldada por el dólar estadounidense en una proporción de 1:1. Es otra opción popular para los traders que buscan una moneda digital estable.</p>          
    </div>
 );
};

export default TopCripto;
