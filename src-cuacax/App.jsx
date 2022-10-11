import Cuaca from "./Cuaca";
import Footer from "./Footer";
import Jam from "./Jam";
import Menit from "./Menit";

const App = () => {
  return (
    <div className="app">
      <div className="sub">
        <div className="main">
          <Jam />
          <Menit />
        </div>
        <Cuaca/>
      </div>
      <Footer/>
      
    </div>
  );
};

export default App;
