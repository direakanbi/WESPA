import React from 'react'
import DarkHero from '../DarkHero'
import {Search} from "lucide-react";
import { Input } from '../ui/input';
// import {events} from "../../lib/dummyData" 

const links = [
    {name:"Home",href:"/"},
    {name:"Ratings",href:"/ratings"},
    {name:"Full Ranking",href:"#"},
]
function Calendar() {
  return (
    <div>
        <DarkHero heading=" Tournament Calendar" text='Explore all WESPA-sanctioned tournaments by continent and category' links={links}/>
        
        <div className=" p-10  flex flex-col items-center justify-center">
          <section className="  flex items-center justify-center">
            <Input type="text" placeholder="Search tournaments..." className=" py-4 px-5 w-[500px] bg-cyan-50 rounded-full border shadow-none  "/>
              <Search className=' rounded-full p-1 -translate-x-8 bg-[#47b2e4] ' size={35} color={"#FFFFFF"}/>
            {/* <div className=" bg-primary rounded-full">
              </div> */}
          </section>
        </div>
    </div>
  )
}

export default Calendar