"use client";
import React, { useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState<
    { id: number; title: String; description: string }[]
  >([]);
  const [todo, setTodo] = useState<{
    id: number;
    title: string;
    description: string;
  }>({
    id: 0,
    title: "",
    description: "",
  });
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="my-2.5 border-b border-black/10">Todo Application</div>
      <form>
        <span>Todo</span>
        <input
          className="border border-black rounded-lg mx-auto my-3 block px-1 py-0.5"
          placeholder="Your Todo here...."
          type="text"
          onChange={(e) => {
            setTodo({ ...todo, title: e.target.value });
            console.log(e.target.value);
            // Get data from database
          }}
          value={todo.title}
        />
        {/* <p className="my-2 border p-3">{todo.title}</p> */}
        <span>Description</span>
        <input
          className="border border-black rounded-lg mx-auto my-3 block px-1 py-0.5"
          placeholder="Your Description here...."
          type="text"
          onChange={(e) => {
            setTodo({ ...todo, description: e.target.value });
            console.log(todo, "Todo in desctipn");
          }}
          value={todo.description}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setTodos([...todos, { ...todo, id: todos.length }]);
            setTodo({
              id: 0,
              title: "",
              description: "",
            });
          }}
          className="bg-red-600 border border-black text-white rounded-lg p-0.5 px-5 block mx-auto"
        >
          Submit
        </button>
      </form>
      <div>
        {todos.map((data, i) => {
          return <p key={i}>{data.id + " ) " + data.title}</p>;
        })}
      </div>
    </main>
  );
};

export default Page;

const data = () => 3 + 2;

// [
//     <p>A</p>
//     <p>B</p>
//     <p>C</p>
//     <p>D</p>
//     <p>E</p>
//     ...
// ]
