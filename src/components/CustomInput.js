import { useState, forwardRef, useRef, useImperativeHandle } from "react";

function CustomInput({ open, onClose }, ref) {
    const [data, setData] = useState("");
    const focusRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            focusRefBtn: focusRef.current,
            alertHi: () => alert("Hi"),
        }
    }, [open]);

    if (!open) return null;

    return (
        <div ref={ref}>
            <button onClick={onClose}>Close</button>
            <h1>Write Anything</h1>
            <input ref={focusRef} value={data} onChange={(e) => setData(e.target.value)} placeholder="Write Anything" />
        </div>
    );
}

export default forwardRef(CustomInput);