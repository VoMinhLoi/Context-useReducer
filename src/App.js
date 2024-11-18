// import { useRef } from "react";
// import { useStore, actions } from "./store";
import Button from './components/Button'
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/Home"
import NewsPage from "./pages/News"
import ContactPage from "./pages/Contact"
function App() {
  // const [state, dispatch] = useStore();
  // const { toDos, toDo } = state;
  // const inputRef = useRef();
  // const indexNeedEdit = useRef();
  // const addButton = useRef();
  // const editConfirmButton = useRef();
  // const handleSubmit = (e) => {
  //   dispatch(actions.addToDoInput(toDo));
  //   dispatch(actions.setToDoInput(""));
  //   inputRef.current.focus();
  // };
  // const setEdit = (index, item) => {
  //   dispatch(actions.setToDoInput(item));
  //   indexNeedEdit.current = index;
  //   addButton.current.style = { visibility: "hidden" };
  //   editConfirmButton.current.style = { display: "block" };
  // };
  // const handleEdit = () => {
  //   addButton.current.style = { display: "block" };
  //   editConfirmButton.current.style = { visibility: "hidden" };
  //   dispatch(
  //     actions.editToDoInput({
  //       indexNeedEdit: indexNeedEdit.current,
  //       toDo: inputRef.current.value,
  //     })
  //   );
  //   dispatch(actions.setToDoInput(""));
  //   inputRef.current.focus();
  //   editConfirmButton.current.style = { visibility: "hidden" };
  // };
  return (
    <div className="App">
      {/* <h1>Mobifone's menu food</h1>
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
      </ul> */}
      
      <Button/>
      <Button primary/>
      <Button disable/>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
