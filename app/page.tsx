"use client"
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import { Input } from "@/components/ui/input"
import Songlist from '@/components/songlist/songlist'
import {useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const tags = [
  { title: "love song"},
  { title: "rock"},
  { title: "international"},
  { title: "Thai pop"},
  { title: "heartbreaking"},
]


export default function Home()
{ 
  const [song, setsong] = useState<string>('');
  const [showTable, setShowTable] = useState(false);
  const [input,setInput] = useState<string>('');
  useEffect(()=>{
    console.log(song)
  })
  const search = () => {
        setShowTable(true)
  }
  return (
    <main className="flex min-h-screen flex-col items-center bg-cover bg-[url('/background.png')]">
      <Navbar/>
      <div className=" flex min-h-screen w-full justify-center pt-[1.5rem] md:pt-[10rem]">
        <div className = "flex flex-col items-center space-y-6 md:space-y-10 px-[2rem]">
          <p className = 'font-bold text-3xl md:text-5xl text-white'>Find your perfect song right here 🎵</p>
          <p className = 'text-l md:text-xl text-white break-words'>Type the lyrics, artist, genre, or context that you long for</p>
        <form onSubmit={(e) =>
        {
          e.preventDefault();
          search();

        }} className='w-full'>
          <Input type="text" placeholder={'🔎 Search'} value={song} onChange={(e)=> setsong(e.target.value)}/>
        </form>
          <div className="flex grid grid-cols-2 justify-center items-center gap-x-10 space-y-2 md:gap-4 md:flex md:space-x-6 md:space-y-0">
            {tags.map((item, idx) => (
              <div key={idx}>
                <button className='bg-white text-[0.7rem] opacity-50 rounded-full text-black p-4' onClick={() => setsong(item.title)}>{item.title}</button>
              </div>
            ))}
          </div>
          <div className='pt-4'>
          {showTable ? <Songlist song={song}/> : null}
          </div>
        </div>

      </div>



    </main>
  )
}
