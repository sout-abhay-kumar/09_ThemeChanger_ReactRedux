import { useDispatch, useSelector } from "react-redux";
import { toggleBg, toggleTxt } from "../features/uiSlice";

function Changer() {
  const { bgColor, text } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: bgColor,
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>{text}</h1>
      <button onClick={() => dispatch(toggleBg())}>Change Background</button>
      <button onClick={() => dispatch(toggleTxt())}>Change Text</button>
    </div>
  );
}

export default Changer