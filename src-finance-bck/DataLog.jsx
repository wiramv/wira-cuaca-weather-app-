import { Link } from "react-router-dom"


const DataLog = ({log}) => {

    


    return(
        <div className="datalog">
            <div className="datalog-title">
                Data Log
            </div>
            <Link to="/" className="btn">Return to Home</Link>
            <table>
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Date</td>
                        <td>Notes</td>
                        <td>Earning</td>
                        <td>Spending</td>
                        <td>Balance</td>
                    </tr>
                </thead>
                {log.length > 0 && <tbody>
                   {log.map((x, i) => (
                    <tr key={i+1}>
                        <td>{i+1}</td>
                        <td>{x.date}</td>
                        <td>{x.notes}</td>
                        <td>Rp {x.earning.toLocaleString()}</td>
                        <td>Rp {x.spending.toLocaleString()}</td>
                        <td>Rp {x.balance.toLocaleString()}</td>
                    </tr>
                   ))}
                </tbody>}
            </table>
        </div>
    )
}

export default DataLog