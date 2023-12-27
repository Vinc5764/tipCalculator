import { useState } from "react";
import Bill from "./Bill";
import Service from "./Service";

const App = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Service percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service ?{" "}
      </Service>
      <Service percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service ?{" "}
      </Service>

      {bill > 0 && (
        <>
          <div>
            <p>
              You Pay ${bill + tip} (${bill} + ${tip} tip)
            </p>
          </div>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default App;
