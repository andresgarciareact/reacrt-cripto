
import { useEffect, useState } from "react";
import TableCoins from "../TableCripto/TableCoins";
import axios from "axios";
function Search() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
   
    <div className="container">
      <div className="row">
        <h1>Valoracion Criptomonedas</h1>
        <input
          data-testid="search-input"
          type="text"
          placeholder="Busacar Cripto"
          className="form-control bg-light text-dark border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default Search;
