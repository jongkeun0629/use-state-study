import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center gap-15">
      <p className="text-4xl font-bold">{count}</p>
      <div className="flex gap-10">
        <button
          className="py-4 px-8 rounded-xl bg-red-400"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="py-4 px-8 rounded-xl bg-blue-400"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
