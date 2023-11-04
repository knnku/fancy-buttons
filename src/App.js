import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeatButton from "./components/TextRepeatButton";
import React, { useState } from "react"; //optional

function App() {
  const [light, setLight] = useState("off");

  //Add dark class if light is off
  const dark = light === "off" ? "dark" : "";

  //Light button click action
  const switchLight = () => {
    setLight(light === "on" ? "off" : "on");
  };

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton
          light={light}
          setLight={setLight}
          switchLight={switchLight}
        />
        <TextRepeatButton />
      </section>
    </div>
  );
}

export default App;
