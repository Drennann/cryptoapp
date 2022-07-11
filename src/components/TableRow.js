import "../App.css";

export default function TableRow({coins}){

    return(

        <tbody>
            {coins.map(coin => 
                <tr key={coin.id}>
                    <td>
                        {coin.name}
                    </td>
                    <td className="Right">
                        {coin.current_price}
                    </td>
                    <td className="Right">
                        {coin.price_change_percentage_24h}
                    </td>
                    <td className="Right">
                        {coin.market_cap}
                    </td>
                </tr>)}
        </tbody>
    )
}