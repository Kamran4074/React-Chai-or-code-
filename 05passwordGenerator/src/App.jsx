import { useState, useCallback, useEffect ,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [chAllowed, setChAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook for password copy reference
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (chAllowed) str += "`@#$%^&*(){}[]|:;></";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numAllowed, chAllowed,setPassword]);

  //copy to clip board
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10); // to select password accordingly
    window.navigator.clipboard.writeText(password)
  },[password])

  // Auto-generate password whenever settings change
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, chAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white py-3 text-xl">
          Password Generator
        </h1>

        {/* Password display */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none bg-amber-50 w-full py-2 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-2 shrink-0 cursor-pointer hover:bg-blue-600 active:bg-blue-800 "
          >
            Copy
          </button>
          
        </div>

        {/* Length control */}
        <div className="flex items-center gap-x-2 mb-3">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-white">Length: {length}</label>
        </div>

        {/* Options */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-white">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={chAllowed}
              id="characterInput"
              onChange={() => setChAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput" className="text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
