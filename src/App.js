import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);

  function increment() {
    if (step < 3) {
      setStep((currstep)=>currstep+1);
    }
  }
  function decrement() {
    if (step > 1) {
      setStep((currstep)=>currstep-1);
    }
  }
  function close(){setOpen((Isopen)=>!Isopen)}
  return (
    <div>
      <button className="close" onClick={close}>
        X
      </button>
      { open && (
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : " "}`}>1</div>
          <div className={`${step >= 2 ? "active" : " "}`}>2</div>
          <div className={`${step >= 3 ? "active" : " "}`}>3</div>
        </div>
        <p className="message">
          Steps {step}:{messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "white" }}
            onClick={decrement}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "white" }}
            onClick={increment}
          >
            Next
          </button>
        </div>
      </div>)}
    </div>
  );
}
