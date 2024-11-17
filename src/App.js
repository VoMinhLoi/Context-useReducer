import { useRef } from "react";
import { useStore, actions } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { toDos, toDo } = state;
  const inputRef = useRef();
  const indexNeedEdit = useRef();
  const addButton = useRef();
  const editConfirmButton = useRef();
  const handleSubmit = (e) => {
    dispatch(actions.addToDoInput(toDo));
    dispatch(actions.setToDoInput(""));
    inputRef.current.focus();
  };
  const setEdit = (index, item) => {
    dispatch(actions.setToDoInput(item));
    indexNeedEdit.current = index;
    addButton.current.style = { visibility: "hidden" };
    editConfirmButton.current.style = { display: "block" };
  };
  const handleEdit = () => {
    addButton.current.style = { display: "block" };
    editConfirmButton.current.style = { visibility: "hidden" };
    dispatch(
      actions.editToDoInput({
        indexNeedEdit: indexNeedEdit.current,
        toDo: inputRef.current.value,
      })
    );
    dispatch(actions.setToDoInput(""));
    inputRef.current.focus();
    editConfirmButton.current.style = { visibility: "hidden" };
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
      <button ref={addButton} onClick={handleSubmit}>
        add
      </button>
      <button
        ref={editConfirmButton}
        onClick={handleEdit}
        style={{ visibility: "hidden" }}
      >
        confirm
      </button>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => setEdit(index, item)}>edit</button>
            <span
              onClick={() => {
                dispatch(actions.deleToDoInput(index));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
