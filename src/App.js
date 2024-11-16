import { useRef } from "react";
import { useStore, actions } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { toDos, toDo } = state;
  const inputRef = useRef();
  const hanldeSubmit = (e) => {
    dispatch(actions.addToDoInput(toDo));
    dispatch(actions.setToDoInput(""));
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h1>Mobifone's menu food</h1>
      <input
        ref={inputRef}
        value={toDo}
        onChange={(e) => {
          dispatch(actions.setToDoInput(e.target.value));
        }}
      />
      <button onClick={hanldeSubmit}>add</button>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
