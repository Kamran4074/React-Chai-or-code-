import { useState } from 'react';
function Bgcolor() {
  const [color, setColor] = useState("olive");

  const colors = ["red", "green", "yellow", "violet", "gray", "purple", "blue"];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl">
          {colors.map((c) => (
            <ColorButton key={c} color={c} onClick={() => setColor(c)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Bgcolor;
