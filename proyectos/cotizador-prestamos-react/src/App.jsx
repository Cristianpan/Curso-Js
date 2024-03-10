import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney } from "./helpers";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(10000);
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    const amount = parseInt(e.target.value);
    setAmount(amount);
  }

  function handleClickDecrease() {
    const value = amount - STEP;

    if (value >= 0) {
      setAmount(value);
    }
  }

  function handleClickIncrease() {
    const value = amount + STEP;
    if (value <= 20000) {
      setAmount(value);
    }
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button
          operator='-'
          handler={handleClickDecrease}
        />
        <Button
          operator='+'
          handler={handleClickIncrease}
        />
        

      </div>

      <input
        type="range"
        className="w-full mt-3 h-6 bg-gray200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        step={STEP}
        max={MAX}
        value={amount}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600 ">
        {formatMoney(amount)}
      </p>
    </div>
  );
}

export default App;
