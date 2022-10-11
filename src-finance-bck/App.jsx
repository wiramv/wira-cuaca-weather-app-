import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import InpBudget from "./SetBudget";
import Spending from "./Spending";
import Earning from "./Earning";
import DataLog from "./DataLog";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [defBgt, setDefBgt] = useState(0);
  const [earning, setEarning] = useState(0);
  const [spending, setSpending] = useState(0);
  const [cash, setCash] = useState(0);
  const [log, setLog] = useState([]);
  const [waktu, setWaktu] = useState("");

  const [inpt, setInpt] = useState("");
  useEffect(() => {
    const date = new Date();
    const tanggal = date.getDate();
    const bulan = date.getMonth();
    const tahun = date.getFullYear();
    setWaktu(tanggal + " " + bulan + " " + tahun);
    let dataQ = ""
    defBgt === 0 && localStorage.getItem("dataQ") !== null ? dataQ = JSON.parse(localStorage.getItem("dataQ")) : localStorage.setItem("dataQ", JSON.stringify([defBgt, budget, earning, spending, cash, log]))
    if(defBgt === 0 && dataQ.length > 0){
      setDefBgt(dataQ[0])
      setBudget(dataQ[1])
      setEarning(dataQ[2])
      setSpending(dataQ[3])
      setCash(dataQ[4])
      setLog(dataQ[5])
    }
    console.log(dataQ)
    
    

  }, [budget, defBgt, earning, spending]);

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

        <Route
          path="/spending"
          element={
            <Spending
              setBudget={setBudget}
              budget={budget}
              setSpendng={setSpending}
              spending={spending}
              setCash={setCash}
              cash={cash}
              log={log}
              waktu={waktu}
            />
          }
        />

          <Route path="/earning" element={<Earning cash={cash} setCash={setCash} earning={earning} setEarning={setEarning} log={log} waktu={waktu} />} />
          <Route path="/datalog" element={<DataLog log={log}/>} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
