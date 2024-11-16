import { useStore, actions } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { toDos, toDo } = state;
  return (
    <div className="App">
      <h1>Mobifone's menu food</h1>
      <input
        value={toDo}
        onChange={(e) => {
          dispatch(actions.setToDoInput(e.target.value));
        }}
      />
      <button onClick={(e) => dispatch(actions.addToDoInput(toDo))}>add</button>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
