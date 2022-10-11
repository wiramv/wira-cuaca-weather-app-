import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import InpBudget from "./SetBudget";
import Spending from "./Spending";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [defBgt, setDefBgt] = useState(0);
  const [earning, setEarning] = useState(0);
  const [spending, setSpending] = useState(0);
  const [cash, setCash] = useState(5000000);
  const [log, setLog] = useState([]);
  const [waktu, setWaktu] = useState('')

  const [inpt, setInpt] = useState("");
    useEffect(()=>{
        const date = new Date()
        const tanggal = date.getDate()
        const bulan = date.getMonth()
        const tahun = date.getFullYear()
        setWaktu(tanggal+" "+bulan+" "+tahun)
    },[])

  return (
    <Router>
      <Header
        budget={budget}
        earning={earning}
        spending={spending}
        cash={cash}
      />
      <Routes>
        {defBgt === 0 ? (
          <Route
            path="/"
            element={
              <InpBudget
                setDefBgt={setDefBgt}
                setBudget={setBudget}
                inpt={inpt}
                setInpt={setInpt}
              />
            }
          />
        ) : (
          <Route path="/" element={<Main />} />
        )}
        <Route path="/spending" element={<Spending setBudget={setBudget} budget={budget} setSpendng={setSpending} spending={spending} setCash={setCash} cash={cash} setLog={setLog} log={log} waktu={waktu} />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
