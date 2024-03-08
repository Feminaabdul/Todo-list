"use client"
import React, { useState } from "react";

const page=()=>{
  const [title,Settitle]=useState("")
  const [desc,Setdesc]=useState("")
  return (
    <>
    <h1 className="bg-black text-white 
    text-xl p-5 font-bold text-center">Femina's  TodoList</h1>
    <form>
      <input type="text"  className="2xl border-zinc-800 border-2 m-8 py-2 px-4" placeholder="Enter title here" value={title}
      onChange={(e)=>{
        Settitle(e.target.value);
      }}/>
      <input type="text"className="2xl border-zinc-800 border-2 m-8 py-2 px-4"  placeholder="Enter Description "  value={desc}
      onChange={(e)=>{
        Setdesc(e.target.value);
      }}
      
       />
   <button className="bg-black text-white rounded-full  m-5 text-xl px-6 py-2">
    Add Task
   </button>
    </form>
    </>
  )
}
export default page