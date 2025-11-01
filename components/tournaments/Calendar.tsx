"use client";
import React,{useState} from 'react'
import DarkHero from '../DarkHero'
import {ChevronRight, Search} from "lucide-react";
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import gold from "../../public/icons/gold.svg";
import silver from "../../public/icons/silver.svg";
import bronze from "../../public/icons/bronze.svg";
import platinum from "../../public/icons/platinum.svg";
import {events} from "../../lib/dummyData" 
import Image from 'next/image';

const links = [
    {name:"Home",href:"/"},
    {name:"Ratings",href:"/ratings"},
    {name:"Full Ranking",href:"#"},
]

const continents = [
  {continents:"all",id:7},
  {continents:"africa",id:1},
  {continents:"europe",id:2},
  {continents:"asia",id:3},
  {continents:"america",id:4},
  {continents:"oceania",id:5},
  {continents:"online",id:6},
]
const categories = [
  {image:platinum,id:4,category:"Platinum / Majors"},
  {image:gold,id:1,category:"Gold Badge"},
  {image:silver,id:2,category:"Silver Badge"},
  {image:bronze,id:3,category:"Bronze Badge"},
]

function Calendar() {
  const [filter,setFilter] = useState("all");
  const filteredData = filter==="all"?events:events.filter((event)=>{return(
    event.continent===filter
  )});

  const handleFilter = (id:number)=>{
    const filterContinents = continents.find((continents)=>continents.id===id);
    if(filterContinents){
      setFilter(filterContinents.continents);
    } else {
      setFilter("all");
    }
  }

  return (
    <div>
        <DarkHero heading=" Tournament Calendar" text='Explore all WESPA-sanctioned tournaments by continent and category' links={links}/>
        
        <div className=" p-10  flex flex-col items-center justify-center">
          <section className="  flex items-center justify-center">
            <Input type="text" placeholder="Search tournaments..." className=" py-5 px-5 w-[500px] bg-gray-50 rounded-full outline-none shadow-none  "/>
              <Search className=' rounded-full p-1 -translate-x-10 bg-[#47b2e4] ' size={35} color={"#FFFFFF"}/>
            
          </section>
          <section className=" flex py-10 gap-3 items-center justify-center flex-wrap">
            {
              continents.map((continents)=>(
                <button onClick={()=>{
                  handleFilter(continents.id)
                }} key={continents.id} className={` m-2 px-6 py-2 ${filter===continents.continents?"bg-primary text-white":"bg-gray-100 text-black"} font-semibold text-base capitalize rounded-full transition`}>
                  {continents.continents}
                </button>
              ))
            }

          </section>
        </div>
        <div className=" max-w-6xl mx-auto mb-16">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className=" bg-primary px-5 text-white py-4 font-medium text-lg">Start</TableHead>
                <TableHead className=" bg-primary px-5 text-white py-4 font-medium text-lg">End</TableHead>
                <TableHead className=" bg-primary px-5 text-white py-4 font-medium text-lg">Nation</TableHead>
                <TableHead className=" bg-primary px-5 text-white py-4 font-medium text-lg text-center">Event</TableHead>
                <TableHead className=" bg-primary px-5 text-white py-4 font-medium text-lg">Location</TableHead>
                <TableHead className=" bg-primary px-5 text-white py-4 font-medium text-lg">Organiser</TableHead>
                <TableHead className=" bg-primary px-5 text-white py-4 font-medium text-lg">Games</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                filteredData.map((event,idx)=>{
                  return(
                    <TableRow className={` ${idx%2===0?"bg-white":"bg-primary/5"}`}>
                      <TableCell className={` font-semibold py-5  px-5`}>{event.startDate}</TableCell>
                      <TableCell className={` font-semibold py-5  px-5`}>{event.endDate}</TableCell>
                      <TableCell className={` font-semibold py-5  px-5`}>{event.country}</TableCell>
                      <TableCell className={` font-semibold py-5  px-5 underline`}>{event.eventName}</TableCell>
                      <TableCell className={` font-semibold py-5  px-5`}>{event.state}</TableCell>
                      <TableCell className={` font-semibold py-5  px-5`}>{event.organizer}</TableCell>
                      <TableCell className={` font-semibold py-5  px-5`}>{event.games}</TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </div>

        <div className={` w-fit  bg-gray-50 pl-16 pr-12 py-8  rounded-br-3xl rounded-tr-3xl mb-16`}>
          <h1 className=' text-xl font-semibold pb-5 pt-2'>Tournament Categories (Legend)</h1>
          {
            categories.map((category)=>{
              return(
                <div key={category.id} className=" flex gap-2 items-center">
                <section className=" bg-brown-100 p-4">
                  <Image src={category.image} alt={category.category} className=" w-10"/>
                </section>
                  <ChevronRight/>
                  <p>{category.category}</p>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}

export default Calendar