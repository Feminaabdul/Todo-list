"use client"
import React, { useState } from "react";

const page = () => {
  const [title, Settitle] = useState("")
  const [desc, Setdesc] = useState("")
  const [mainTask, SetMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    SetMainTask([...mainTask, { title, desc }])
    Settitle("")
    Setdesc("")

    console.log(mainTask);

  }
  let deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)

    SetMainTask(copytask)
  }
  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className="flex item-center justify-between mb-5">
        <div className="flex item-center justify-between  w-2/3">
          <h5 className="texl-2xl font-semibold">{t.title}</h5>
          <h6 className="texl-xl font-semibold">{t.desc}</h6>
        </div>
        <button
          onClick={() => {
            deleteHandler(i)
          }}
          className="bg-red-400 text-white rounded-full px-6 py-2 font-bold">Delete</button>
      </li>
    })

  }

  return (
    <>
      <h1 className="bg-black text-white 
    text-xl p-5 font-bold text-center">TodoList</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className="2xl border-zinc-800 border-2 m-8 py-2 px-4" placeholder="Enter title here" value={title}
          onChange={(e) => {
            Settitle(e.target.value);
          }} />
        <input type="text" className="2xl border-zinc-800 border-2 m-8 py-2 px-4" placeholder="Enter Description "
          value={desc}
          onChange={(e) => {
            Setdesc(e.target.value)

          }}

        />
        <button className="bg-black text-white rounded-full  m-5 text-xl px-6 py-2">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}
export default page