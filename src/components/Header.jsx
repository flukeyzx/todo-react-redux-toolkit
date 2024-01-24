import { addTodo } from "../app/slicer/Slicer";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <div className="box-border flex flex-col mt-20 items-center text-xl">
        <h1 className="text-slate-800 font-bold text-5xl mb-10">TodoList</h1>
        <form onSubmit={submitHandler} className="flex gap-4">
          <input
            value={input}
            className="w-100 py-2 pr-10 pl-2 border-2 border-slate-600 rounded-lg bg-slate-800 text-white"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="py-2 px-8 bg-blue-400 rounded-xl text-slate-900 font-semibold hover:opacity-80 active:opacity-50">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
