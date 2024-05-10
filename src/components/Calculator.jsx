import { useState } from "react";

import Button from "./Button";
import Result from "./Result";
import ButtonNumber from "./ButtonNumber";

const Calculator = () => {
  const [result, setResult] = useState("0");

  return (
    <div className="bg-gray-300 p-4 shadow-md">
      <Result result={result} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        <ButtonNumber name="1" result={result} setResult={setResult} />
        <ButtonNumber name="2" result={result} setResult={setResult} />
        <ButtonNumber name="3" result={result} setResult={setResult} />
        <Button name="+" />
        <ButtonNumber name="4" result={result} setResult={setResult} />
        <ButtonNumber name="5" result={result} setResult={setResult} />
        <ButtonNumber name="6" result={result} setResult={setResult} />
        <Button name="-" />
        <ButtonNumber name="7" result={result} setResult={setResult} />
        <ButtonNumber name="8" result={result} setResult={setResult} />
        <ButtonNumber name="9" result={result} setResult={setResult} />
        <Button name="✕" />
        <Button name="Enter" />
        <ButtonNumber name="0" result={result} setResult={setResult} />
        <Button name="Del" />
        <Button name="%" />
      </div>
    </div>
  );
};

export default Calculator;