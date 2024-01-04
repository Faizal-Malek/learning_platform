import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PopUpForm from "./components/PopUpForm";
import Register from "./components/Register";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 5000);
  }, []);

  return (
    <>
      <Navbar register={() => setButtonPopup(true)} />
      <PopUpForm trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Register />
      </PopUpForm>

      <PopUpForm trigger={timedPopup} setTrigger={setTimedPopup}>
        <Login/>
      </PopUpForm>
    </>
  );
}

export default App;
