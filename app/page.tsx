"use client"
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import { Input } from "@/components/ui/input"
import Songlist from '@/components/songlist/songlist'
import {useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'



export default function Home()
{ 
  useEffect(()=>{
  })
  const refresh = async () => {
      window.location.reload()
  }
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-[#3E196E] via-[#D46C76] to-[#FFC07C]">
      <Navbar/>
      <div className=" flex min-h-screen w-full justify-center pt-[1.5rem] md:pt-[10rem]">
        <div className = "flex flex-col items-center space-y-6 md:space-y-10 px-[2rem]">
          <p className = 'font-bold text-4xl md:text-5xl text-white'>Find your perfect song right here 🎵</p>
          <p className = 'text-xl md:text-xl text-white break-words'>Type the lyrics, artist, genre, or context that you long for</p>
          <Songlist/>
        </div>

      </div>



    </main>
  )
}
