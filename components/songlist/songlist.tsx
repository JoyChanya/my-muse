"use client"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { List } from "lucide-react";
import { useEffect, useState } from "react"
const tags = [
  { title: "love song"},
  { title: "rock"},
  { title: "international"},
  { title: "Thai pop"},
  { title: "heartbreaking"},
]

export default function Songlist() {
  const [list, setList] = useState([] as any)
  const [isOpen, setOpen] = useState(false)
  const [song, setsong] = useState<string>('');
    const fetchData = async () => {
      const res = await fetch(`https://mymuse-backend-fr74qt3l6a-uc.a.run.app/api/music?lyrics=${song}`)
      const data = await res.json();
      console.log(data.cluster)
      setList(data.cluster);
      if (data.cluster) {
        setOpen(true)
      }
      else{
        setOpen(false)
      }
    };
  return (
    <>
      <form onSubmit={(e) => {
        fetchData();
        e.preventDefault();
      }} className='w-full'>
        <Input type="text" placeholder={'🔎 Search'} value={song} onChange={(e) => setsong(e.target.value)} />
      </form>
      <div className="flex grid grid-cols-2 justify-center items-center gap-x-10 space-y-2 md:gap-4 md:flex md:space-x-6 md:space-y-0">
        {tags.map((item, idx) => (
          <div key={idx}>
            <button className='bg-white text-[1rem] opacity-50 rounded-full text-black p-4' onClick={() => setsong(item.title)}>{item.title}</button>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="pb-[10rem]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead>Song</TableHead>
                <TableHead>Artist</TableHead>
                {/* <TableHead className="text-right">Amount</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {list.map((song: any, index: any) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="font-medium">{song[0]}</TableCell>
                  <TableCell className="font-medium">{song[1]}</TableCell>
                  {/* <TableCell>{list.song}</TableCell> */}
                  {/* <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
          </Table>

        </div>
      )}
    </>
  )

}