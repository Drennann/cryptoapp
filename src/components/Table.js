
import TableRow from "./TableRow";
import "../App.css"


export default function Table({coins}){

    return(
        <table>
            <thead>

                <tr>

                    <td>

                        CryptoMarket
                    </td>
                    <td>

                        Price (USD)
                    </td>
                    <td>

                        Last 24hr (%)
                    </td>
                    <td>

                        MarketCap
                    </td>

                </tr>

            </thead>

                     <TableRow coins = {coins}></TableRow>
        </table>
    )
}