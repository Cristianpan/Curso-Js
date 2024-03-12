import Header from "./components/Header";
import Button from "./components/Button";
import { calculateTotalToPay, formatMoney } from "./helpers";
import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(10000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [payToMonth, setPayToMonth] = useState(0);
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  useEffect(() => {
    setTotal(calculateTotalToPay(amount, months));
  }, [amount, months]);

  useEffect(() => {
    setPayToMonth(total / months);
  }, [total]);

  function handleChange(e) {
    const amount = parseInt(e.target.value);
    setAmount(amount);
  }

  function handleChangeMonths(e) {
    setMonths(parseInt(e.target.value));
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
        <Button operator="-" handler={handleClickDecrease} />
        <Button operator="+" handler={handleClickIncrease} />
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

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border 
      border-gray-300 rounded-lg text-center
       text-xl font-bold text-gray-500"
        value={months}
        onChange={handleChangeMonths}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          {months} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(payToMonth)} Mensuales</p>
      </div>
    </div>
  );
}

export default App;
