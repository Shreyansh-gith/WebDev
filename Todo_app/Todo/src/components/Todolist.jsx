import React, { useState } from 'react';
import { useTodo } from '../contexts/Todocontext';

function Todolist({ todo }) {
    const [isEditable, setisEditable] = useState(false)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    const [newText, setnewText] = useState(todo.todo)

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: newText})
        setisEditable(false)
    }

    return (
        <div
            className={`flex border border-white/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-md duration-300 text-white w-full ${todo.completed ? "bg-[#10B981]/20 border-[#10B981]/40" : "bg-[#2A2A32]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer accent-[#34D399]"
                checked={todo.completed}
                onChange={() => {
                    toggleComplete(todo.id)
                }}
            />
            <input
                type="text"
                className={`outline-none w-full bg-transparent rounded-lg text-slate-100 ${"border-transparent"
                    } ${todo.completed ? "line-through text-slate-400" : ""}`}
                value={newText}
                onChange={(e) => setnewText(e.target.value)}
                readOnly={!isEditable}
            />

            {/* Edit / Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/10 justify-center items-center bg-[#334155] hover:bg-[#475569] shrink-0 disabled:opacity-40"
                onClick={() => {
                    if(todo.completed) return;

                    if(isEditable){
                        editTodo();
                    }
                    else{
                        setisEditable((prev) => !prev);
                    }
                }}
                disabled={todo.completed}
            >
                {isEditable ? "💾" : "✏️"}
            </button>

            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/10 justify-center items-center bg-[#334155] hover:bg-red-950/80 hover:border-red-500/50 text-red-400 shrink-0 transition-colors"
                onClick={() => {
                    deleteTodo(todo.id)
                }}
            >
                ❌
            </button>
        </div>
    );
}

export default Todolist;