import { removeTodo } from "../app/slicer/Slicer";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.counter.todos);
  const dispatch = useDispatch();
  return (
    <div className="mt-20">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex box-border justify-between items-center w-4/5 p-5 rounded-lg text-2xl bg-slate-700 text-white mt-5 mx-auto"
        >
          <ul>
            <li>{todo.text}</li>
          </ul>
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            <svg
              className="bg-red-600 rounded-lg p-2 hover:opacity-75 active:opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="45px"
              height="45px"
            >
              <path d="M 42 5 L 32 5 L 32 3 C 32 1.347656 30.652344 0 29 0 L 21 0 C 19.347656 0 18 1.347656 18 3 L 18 5 L 8 5 C 7.449219 5 7 5.449219 7 6 C 7 6.550781 7.449219 7 8 7 L 9.085938 7 L 12.695313 47.515625 C 12.820313 48.90625 14.003906 50 15.390625 50 L 34.605469 50 C 35.992188 50 37.175781 48.90625 37.300781 47.515625 L 40.914063 7 L 42 7 C 42.554688 7 43 6.550781 43 6 C 43 5.449219 42.554688 5 42 5 Z M 20 44 C 20 44.554688 19.550781 45 19 45 C 18.449219 45 18 44.554688 18 44 L 18 11 C 18 10.449219 18.449219 10 19 10 C 19.550781 10 20 10.449219 20 11 Z M 20 3 C 20 2.449219 20.449219 2 21 2 L 29 2 C 29.550781 2 30 2.449219 30 3 L 30 5 L 20 5 Z M 26 44 C 26 44.554688 25.550781 45 25 45 C 24.449219 45 24 44.554688 24 44 L 24 11 C 24 10.449219 24.449219 10 25 10 C 25.550781 10 26 10.449219 26 11 Z M 32 44 C 32 44.554688 31.554688 45 31 45 C 30.445313 45 30 44.554688 30 44 L 30 11 C 30 10.449219 30.445313 10 31 10 C 31.554688 10 32 10.449219 32 11 Z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
