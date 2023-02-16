import { useRef, useState } from "react";
import CustomInput from "./components/CustomInput";

export default function App() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef();

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <button onClick={() => inputRef.current.alertHi()}>CLick ME!</button>
      {
        open ?
          <button onClick={() => inputRef.current.focusRefBtn.focus()}>Focus input</button>
          :
          null
      }
      <CustomInput
        ref={inputRef}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}