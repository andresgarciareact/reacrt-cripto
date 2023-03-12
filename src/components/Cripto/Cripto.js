import React from "react";

const CriptoApp = ({ coin, index }) => {
  return (
    <div className="container">
        <img src="./cripto.png" className="img"></img>
        <h1 className="center">Que son las criptomonedas</h1>
        <p className="justify">
        Las criptomonedas son una forma de moneda digital que utiliza criptografía para asegurar y verificar transacciones, así como para controlar la creación de nuevas unidades. A diferencia de las monedas tradicionales, las criptomonedas no están respaldadas por ningún gobierno o institución financiera y no son emitidas por bancos centrales. En su lugar, se basan en una red descentralizada y distribuida de usuarios que mantienen y validan las transacciones a través de un proceso llamado minería.
        </p>
        <p className="justify">La criptomoneda más conocida y popular es Bitcoin, que fue creada en 2009 por un individuo o grupo de individuos bajo el seudónimo de Satoshi Nakamoto. Desde entonces, se han creado miles de otras criptomonedas, algunas de las cuales han ganado popularidad y valor significativos.</p>
        <p className="justify">El funcionamiento de las criptomonedas se basa en la tecnología de la cadena de bloques (blockchain). La cadena de bloques es un registro público y permanente de todas las transacciones que se han realizado en la red. Cada bloque de la cadena contiene un registro de varias transacciones, y cada bloque está enlazado al bloque anterior, creando así una cadena. Esta cadena de bloques es mantenida y actualizada por los nodos de la red, que validan las transacciones y aseguran que no haya falsificaciones o duplicados.</p>
        <p className="justify">La creación de nuevas unidades de criptomoneda se llama minería, y es un proceso que involucra a los nodos de la red compitiendo por resolver un complejo problema matemático. El primer nodo que resuelve el problema recibe una recompensa en forma de nueva unidad de criptomoneda, lo que incentiva a los usuarios a mantener y asegurar la red.</p>
        <p className="justify">Las criptomonedas se pueden utilizar para comprar bienes y servicios en línea, aunque su adopción aún es limitada en comparación con las monedas tradicionales. También se pueden intercambiar en exchanges de criptomonedas por otras monedas digitales o por moneda fiduciaria. El valor de las criptomonedas es altamente volátil y está sujeto a fluctuaciones extremas en función de la oferta y la demanda.</p>
        <p className="justify">La tecnología de la cadena de bloques que subyace a las criptomonedas también tiene el potencial de ser utilizada para otros fines más allá de la creación de monedas digitales. Por ejemplo, se podría utilizar para la gestión de identidades, la creación de contratos inteligentes y la creación de sistemas de votación electrónica más seguros y transparentes.</p>
        <p className="justify">En resumen, las criptomonedas son una forma de moneda digital que utiliza criptografía y tecnología de la cadena de bloques para asegurar y verificar transacciones y controlar la creación de nuevas unidades. Aunque su adopción aún es limitada, su potencial para transformar diversos ámbitos de la vida económica y social ha generado un gran interés y debate en todo el mundo.</p>
    </div>
 );
};

export default CriptoApp;