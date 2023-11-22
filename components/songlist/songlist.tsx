"use client"
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

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

interface Props {
    song: string;
}
export default function Songlist(props: Props){
    const [list, setList] = useState([] as any)
    useEffect(()=> {
        const fetchData = async () =>{
        const res = await fetch (`https://sample-fr74qt3l6a-uc.a.run.app/api/music?lyrics=${props.song}`)
        const data = await res.json();
        console.log(data.cluster)
        setList(data.cluster);
        };
        fetchData();
    }, [])
    // console.log(list)
    return (

        <div className="pb-[10rem]">
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Song</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Method</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((song : any ,index : any) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index}</TableCell>
            <TableCell className="font-medium">{song}</TableCell>
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
    )

}