import React from "react";
import CoinRow from "../RowsCripto/CoinRow";

const titles = ["#", "Coin", "Price", "Price Change","24h Volume"];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>

  return (
    <div className="responsive">
    <table className="table mt-4 table-hover" >
      <thead className="thead-dark">
        <tr>
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableCoins;