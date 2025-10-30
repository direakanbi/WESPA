import React from 'react'
import DarkHero from '../DarkHero'
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
        
    </div>
  )
}

export default Calendar