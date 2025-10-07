import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  // ------------------ State Management ------------------
  // Amount entered by user
  const [amount, setAmount] = useState(0);

  // "From" currency (default: USD)
  const [from, setFrom] = useState("usd");

  // "To" currency (default: INR)
  const [to, setTo] = useState("inr");

  // Converted amount result
  const [convertedAmount, setConvertedAmount] = useState(0);

  // ------------------ Custom Hook ------------------
  // Fetch currency exchange rates based on the "from" currency
  const currencyInfo = useCurrencyInfo(from);

  // Extract available currency codes (usd, inr, eur, etc.)
  const options = Object.keys(currencyInfo);

  // ------------------ Functions ------------------
  // Swap "from" and "to" currencies
  const swap = () => {
    setFrom(to);                  // set "from" to "to"
    setTo(from);                  // set "to" to "from"
    setConvertedAmount(amount);   // move amount into converted field
    setAmount(convertedAmount);   // move converted value into input field
  };

  // Convert amount using fetched exchange rates
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // Restart everything to default values
  const restart = () => {
    setAmount(0);
    setConvertedAmount(0);
    setFrom("usd");
    setTo("inr");
  };

  // ------------------ UI ------------------
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        // Background image (direct image link from Pexels)
        backgroundImage: `url('https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          
          {/* Form wrapper */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevents page reload
              convert();          // Calls conversion function
            }}
          >
            {/* From Input Box */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}                       // Value user types in
                currencyOptions={options}            // Dropdown options
                onCurrencyChange={(currency) => setFrom(currency)} // FIXED: changes "from" currency
                selectCurrency={from}                // Controlled dropdown
                onAmountChange={(amount) => setAmount(amount)} // Updates input field
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* To Input Box */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}              // Shows converted value
                currencyOptions={options}            // Dropdown options
                onCurrencyChange={(currency) => setTo(currency)} // Updates "to" currency
                selectCurrency={to}                  // Controlled dropdown
                amountDisable                        // Makes input readonly
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg 
                         hover:bg-blue-700 cursor-pointer hover:scale-105 
                         transition duration-200 ease-in-out"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

            {/* Restart Button */}
            <button
              type="button"
              onClick={restart}
              className="w-full bg-red-600 text-white px-4 py-3 my-3 rounded-lg 
                         hover:bg-red-700 active:bg-red-800 cursor-pointer
                         transition duration-200 ease-in-out transform hover:scale-105"
            >
              Restart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
