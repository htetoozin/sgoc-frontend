import Link from "next/link";
import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-wrap text-white"
      >
        {todo.title}
      </th>
      <td className="px-6 py-4 text-white">{todo.description}</td>
      <td className="px-6 py-4 text-white">
        {!todo.is_active ? (
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
            Red
          </span>
        ) : (
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
            Green
          </span>
        )}
      </td>

      <td className="px-6 py-4 text-white">{todo.created_at}</td>
      <td>
        <Link
          href={`todos/${todo.id}`}
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </Link>
      </td>
      <td>
        <button
          onClick={() => deleteTodo(todo.id)}
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Todo;
