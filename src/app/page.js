"use client";

import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import { url } from "@/network/domain";
import Todo from "./components/Todo";
import Link from "next/link";
import Footer from "./components/Footer";
import LottieLoading from "./assets/animations/loading.json";
import TodoList from "./components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(`${url}/api/todos`);
    const data = await res.json();

    const { data: todos } = data;

    setTodos([...todos]);
    setLoading(false);
  };

  const deleteTodo = async (todoId) => {
    const response = await fetch(`${url}/api/todos/${todoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setTodos(todos.filter((todo) => todo.id !== todoId));
    } else {
      console.error("Failed to create todo");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-gray-900 uppercase font-extrabold">Todo Lists</h1>
      {loading ? (
        <div style={{ width: 200 }}>
          <Lottie animationData={LottieLoading} loop={true} />
        </div>
      ) : (
        <>
          <div className="w-full flex items-end justify-end font-mono text-sm lg:flex mb-3 space-x-3 mt-5">
            <Link
              href="/todos/create"
              type="button"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <FontAwesomeIcon icon={faPlus} className="icon-size mr-1" />
              Create Todo
            </Link>
          </div>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          <Footer />
        </>
      )}
    </main>
  );
}
