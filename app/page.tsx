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
      <div className=" flex min-h-screen w-full justify-center items-center">
        <div className = "flex flex-col items-center space-y-10">
          <p className = 'font-bold text-5xl text-white'>Find your perfect song right here</p>
          <p className = 'font-bold text-xl text-white'>Type the lyrics, artist, genre, or context that you long for</p>
        <form onSubmit={(e) =>
        {
          e.preventDefault();
          search();

        }} className='w-full'>
          <Input type="text" placeholder={'🔎 Search'} value={song} onChange={(e)=> setsong(e.target.value)}/>
        </form>
          <div className="flex justify-center items-center gap-2 md:flex md:space-x-6 md:space-y-0">
            {tags.map((item, idx) => (
              <div key={idx}>
                <button className='bg-white opacity-50 rounded-full text-black p-4' onClick={() => setsong(item.title)}>{item.title}</button>
              </div>
            ))}
          </div>
          {showTable ? <Songlist song={song}/> : null}

        </div>

      </div>



    </main>
  )
}
