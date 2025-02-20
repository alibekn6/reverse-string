"use client";
import { useState } from "react";
import axios from "axios";


export default function Home() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const handleReverse = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
   
    const trimmedInput = input.trim(); 
    if (!trimmedInput) {
      setResult("Input cannot be empty or spaces only");
      return;
    }
    try {

      const res = await fetch(`https://reverse-string.onrender.com/reverse/?stringToReverse=${input}`);
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();

      setResult(data.reversedString)

      // http://127.0.0.1:8000/reverse/?stringToReverse=123adsdklkad 

    } catch (err) {
      console.error(err);
      setResult("Error reversing text")
    }
  }


  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <form>
          <h1 className="text-3xl mb-5 font-semibold text-white tracking-tight font-sans">Enter text</h1>
          <input onChange={(e) => setInput(e.target.value)} type="text" className="w-full px-4 py-2 border border-black bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500" placeholder="..." name="string" id="string" />
          <button onClick={handleReverse} className="px-4 mt-5 py-2 bg-white border border-black text-black rounded-lg hover:bg-slate-400 transition">
          Reverse
          </button>
        </form>
        <h1 className="text-3xl mb-5 font-semibold text-white tracking-tight font-sans">{result}</h1>
      </main>

    </div>
  );
}
