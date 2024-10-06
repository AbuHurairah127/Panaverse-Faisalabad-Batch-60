"use client";
import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";

const Page = () => {
  const [todos, setTodos] = useState<
    { id: number; title: string; description: string }[]
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

  const onDeleteHandler = (_id: number) => {
    setTodos(
      todos.filter((data, i) => {
        if (data.id !== _id) {
          return true;
        }
      })
    );
  };
  let isNewTodoForm: boolean = false;
  // if  &&

  // if else ?

  // if else if
  const [isForm, setIsForm] = useState(false);

  const [toDoTobeUpdated, setTodoTobeUpdated] = useState<null | {
    id: number;
    title: string;
    description: string;
  }>(null);
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="my-2.5 border-b border-black/10">Todo Application</div>
      {isUpdateForm ? (
        <form>
          <span>Update Todo</span>
          <input
            className="border border-black rounded-lg mx-auto my-3 block px-1 py-0.5"
            placeholder="Your Todo here...."
            type="text"
            onChange={(e) => {
              toDoTobeUpdated &&
                setTodoTobeUpdated({
                  ...toDoTobeUpdated,
                  title: e.target.value,
                });
              console.log(e.target.value);
              // Get data from database
            }}
            value={toDoTobeUpdated ? toDoTobeUpdated.title : ""}
          />
          {/* <p className="my-2 border p-3">{todo.title}</p> */}
          <span>Description</span>
          <input
            className="border border-black rounded-lg mx-auto my-3 block px-1 py-0.5"
            placeholder="Your Description here...."
            type="text"
            onChange={(e) => {
              toDoTobeUpdated &&
                setTodoTobeUpdated({
                  ...toDoTobeUpdated,
                  description: e.target.value,
                });
              console.log(todo, "Todo in desctipn");
            }}
            value={toDoTobeUpdated ? toDoTobeUpdated.description : ""}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(toDoTobeUpdated);
              toDoTobeUpdated &&
                setTodos(
                  todos.map((_todo, i) =>
                    _todo.id === toDoTobeUpdated.id ? toDoTobeUpdated : _todo
                  )
                );
              setTodoTobeUpdated(null);
              setIsUpdateForm(false);
            }}
            className="bg-red-600 border border-black text-white rounded-lg p-0.5 px-5 block mx-auto"
          >
            Update
          </button>
          <button
            type="button"
            onClick={(e) => {
              setIsUpdateForm(false);
            }}
            className="bg-white-600 border border-black text-black rounded-lg p-0.5 px-5 block mx-auto"
          >
            Cancel
          </button>
        </form>
      ) : isForm ? (
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
          <button
            type="button"
            onClick={(e) => {
              setIsForm(false);
            }}
            className="bg-white-600 border border-black text-black rounded-lg p-0.5 px-5 block mx-auto"
          >
            Close
          </button>
        </form>
      ) : (
        <button
          onClick={() => {
            isNewTodoForm = true;
            setIsForm(true);
            console.log(isNewTodoForm, "<= is new todo form");
          }}
          className="bg-red-600 px-5 py-1 rounded-lg text-white"
        >
          Add New Todo
        </button>
      )}

      <div>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>
                    <button
                      className="bg-red-600 rounded-lg text-sm text-white py-1 px-3"
                      onClick={() => {
                        onDeleteHandler(data.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-600 rounded-lg text-sm text-white py-1 px-3"
                      onClick={() => {
                        setIsUpdateForm(true);
                        setTodoTobeUpdated(data);
                      }}
                    >
                      <LuPencilLine size={22} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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

const abc = {
  name: "Abu Hurairah",
  age: 21,
  phone: "923207443537",
};

const { name } = abc;
abc.name = "Naveed Sarwar";
console.log(name);
console.log(abc.name);

// false
// 0
// ""
// undefined
// null
