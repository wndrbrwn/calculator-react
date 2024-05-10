import { useState } from "react";

import Result from "./Result";
import ButtonNumber from "./ButtonNumber";
import ButtonOperator from "./ButtonOperator";
import ButtonEnter from "./ButtonEnter";
import ButtonDelete from "./ButtonDelete";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState("");
  const [operator, setOperator] = useState("");

  return (
    <div className="bg-gray-300 shadow-md">
      <Result result={result} />
      <div className="grid grid-cols-4 ">
        <ButtonNumber name="1" result={result} setResult={setResult} />
        <ButtonNumber name="2" result={result} setResult={setResult} />
        <ButtonNumber name="3" result={result} setResult={setResult} />
        <ButtonOperator
          name="+"
          result={result}
          setResult={setResult}
          setTemp={setTemp}
          setOperator={setOperator}
        />
        <ButtonNumber name="4" result={result} setResult={setResult} />
        <ButtonNumber name="5" result={result} setResult={setResult} />
        <ButtonNumber name="6" result={result} setResult={setResult} />
        <ButtonOperator
          name="-"
          result={result}
          setResult={setResult}
          setTemp={setTemp}
          setOperator={setOperator}
        />
        <ButtonNumber name="7" result={result} setResult={setResult} />
        <ButtonNumber name="8" result={result} setResult={setResult} />
        <ButtonNumber name="9" result={result} setResult={setResult} />
        <ButtonOperator
          name="*"
          result={result}
          setResult={setResult}
          setTemp={setTemp}
          setOperator={setOperator}
        />
        <ButtonEnter
          name="Ent"
          operator={operator}
          result={result}
          setResult={setResult}
          temp={temp}
          setTemp={setTemp}
        />
        <ButtonNumber name="0" result={result} setResult={setResult} />
        <ButtonDelete name="Del" result={result} setResult={setResult} />
        <ButtonOperator
          name="/"
          result={result}
          setResult={setResult}
          setTemp={setTemp}
          setOperator={setOperator}
        />
      </div>
    </div>
  );
};

export default Calculator;