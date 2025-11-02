"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export function RankingsFilters() {
  const [search, setSearch] = useState("")
  const [country, setCountry] = useState("all")
  const [division, setDivision] = useState("all")

  return (
    <div className="mb-8 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <section className=" text-lg w-fit border border-gray-100  px-2 rounded-md"> <span className=" text-gray-700 font-semibold">Last updated </span> • <span className=" font-semibold  text-primary">10/26/2025</span></section>

        <section className="  flex flex-col lg:flex-row items-center gap-5">
          <div className="items-center flex w-[70%] border border-gray-100 px-2  rounded-md ">
            <Search size={20}/>
            <Input
              placeholder="Search players..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-2  outline-none border-none shadow-none"
            />
          </div>
          <div className=" w-[30%]">
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger>
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="aus">Australia</SelectItem>
                <SelectItem value="can">Canada</SelectItem>
                <SelectItem value="nzl">New Zealand</SelectItem>
                <SelectItem value="nga">Nigeria</SelectItem>
                <SelectItem value="ind">India</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>



        {/* Country Filter */}
        
      </div>
    </div>
  )
}


{/* 

        {/* Division Filter */}
        {/*<Select value={division} onValueChange={setDivision}>
          <SelectTrigger>
            <SelectValue placeholder="All Divisions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Divisions</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="youth">Youth</SelectItem>
          </SelectContent>
        </Select>*/}