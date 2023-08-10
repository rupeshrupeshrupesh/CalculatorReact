import { getValue } from "@mui/system";
import { equal } from "assert";
import { log } from "console";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { boolean } from "yup";
import "./BasicFunction.css";

const calculateFactorial = (value: number): number => {
  if (value === 0) {
    return 1;
  }
  return value * calculateFactorial(value - 1);
};

const CALSIBasicFunction = () => {
  const value = useLocation();
  const [calculationResult, setCalculationResult] = useState("0");
  const [displayLogicResult, setDisplayLogicResult] = useState("0");
  const [addingCalci, setaddingCalci] = useState("0");
  const [operators, setoperators] = useState("");
  const [ansButton, setansButton] = useState(false);

  const getValue = (value: string) => {
    if (value === ".") {
      setCalculationResult(calculationResult + value);
      setDisplayLogicResult(displayLogicResult + value);
    }
    if (calculationResult === "0") {
      setCalculationResult(value);
    }
    if (displayLogicResult === "0") {
      setDisplayLogicResult(value);
      return;
    }

    setCalculationResult(calculationResult + value);
    setDisplayLogicResult(displayLogicResult + value);
  };

  const addingCalculation = (value: string) => {
    setoperators(value);
    getEquals(value);
    const operators = new Set(["+", "-", "*", "/", "%", "!", "."]);
    const lastCharacter = displayLogicResult.slice(-1);
    if (operators.has(lastCharacter)) {
      return;
    }

    if (value === "!") {
      setaddingCalci(calculationResult);
      setDisplayLogicResult(displayLogicResult + value);
    } else {
      if (addingCalci === "0") {
        setaddingCalci(calculationResult);
      }
      setCalculationResult("0");
      setDisplayLogicResult(displayLogicResult + value);
    }
  };

  const clearFunction = () => {
    setCalculationResult("0");
    setaddingCalci("0");
    setoperators("");
    setansButton(false);
    setDisplayLogicResult("0");
  };

  const getEquals = (value: string) => {
    if (value === "=") {
      setansButton(true);
    }

    switch (operators) {
      case "+":
        setaddingCalci(
          (parseFloat(addingCalci) + parseFloat(calculationResult)).toString()
        );
        break;
      case "-":
        setaddingCalci(
          (parseFloat(addingCalci) - parseFloat(calculationResult)).toString()
        );
        break;
      case "/":
        setaddingCalci(
          (parseFloat(addingCalci) / parseFloat(calculationResult)).toString()
        );
        break;
      case "*":
        setaddingCalci(
          (parseFloat(addingCalci) * parseFloat(calculationResult)).toString()
        );
        break;
      case "!":
        setaddingCalci(calculateFactorial(parseFloat(addingCalci)).toString());
        break;
      case "%":
        setaddingCalci(
          (
            (parseFloat(addingCalci) * parseFloat(calculationResult)) /
            100
          ).toString()
        );
        break;
    }
  };

  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: 150,
          bottom: 50,
          left: 50,
          right: 50,
        }}
      >
        <div className="wrapper">
          <div className="screen">
            <div>
              <div>{!ansButton && <h1>{displayLogicResult}</h1>}</div>
              <div style={{
                marginLeft:40
              }}>{ansButton && <h3> {displayLogicResult}</h3>}</div>
              <div> {ansButton && <h1>Ans={addingCalci}</h1>}</div>
            </div>
          </div>
          <div className="buttonBox customButton">
            <button
              onClick={(e) => {
                clearFunction();
              }}
            >
              C
            </button>
            <button
              onClick={(e) => addingCalculation(e.currentTarget.innerText)}
            >
              !
            </button>
            <button
              onClick={(e) => addingCalculation(e.currentTarget.innerText)}
            >
              %
            </button>
            <button
              onClick={(e) => addingCalculation(e.currentTarget.innerText)}
            >
              /
            </button>
          </div>
          <div className="buttonBox customButton">
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              7
            </button>
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              8
            </button>
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              9
            </button>
            <button
              onClick={(e) => addingCalculation(e.currentTarget.innerText)}
            >
              *
            </button>
          </div>
          <div className="buttonBox customButton">
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              4
            </button>
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              5
            </button>
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              6
            </button>
            <button
              onClick={(e) => addingCalculation(e.currentTarget.innerText)}
            >
              -
            </button>
          </div>
          <div className="buttonBox customButton ">
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              1
            </button>
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              2
            </button>
            <button
              id="1"
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              3
            </button>
            <button
              id="1"
              onClick={(e) => addingCalculation(e.currentTarget.innerText)}
            >
              +
            </button>
          </div>
          <div className="buttonBox customButtonLast ">
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              0
            </button>
            <button
              onClick={(e) => {
                getValue(e.currentTarget.innerText);
              }}
            >
              .
            </button>
            <button className="equals" onClick={(e) => getEquals(e.currentTarget.innerText)}>
              =
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default CALSIBasicFunction;
