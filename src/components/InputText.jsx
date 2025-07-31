import { useState } from "react";

const InputText = () => {
  const [text, setText] = useState("test");
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="입력"
        className="bg-white py-2 px-4 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none"
      />
      <p className="font-bold">입력 값: {text}</p>
    </div>
  );
};
export default InputText;
