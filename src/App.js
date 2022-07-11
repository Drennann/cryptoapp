import './App.css';
import Table from "./components/Table";
import {useEffect, useState} from "react";

function App() {

  const [coins, setCoins] = useState([]);

  const getData = async () => {
    let res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false");
    res = await res.json();
    setCoins(res);
    console.log(res)
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="container">
      <Table coins = {coins}></Table>
    </div>
  );
}

export default App;
