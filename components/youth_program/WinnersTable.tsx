import React from 'react'
import { Crown } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

type WinnersType={
    year:string;
    location:string;
    champion:string;
    runner_up:string;
    link:string;
}
const winners:WinnersType[] = [
    {year:"WYSC 2024", location:"Waskaduwa (LKA)", champion:"Affan Salman (PAK)",runner_up:"Suyash Manchali (IND)",link:"https://www.youthscrabble.org/wysc2024/wysc2024.lk_standings_main_24.pdf"},
    {year:"WYC 2023", location:"Trang (THA)", champion:"Hivin Dilmith (LKA)",runner_up:"Adheesha Dissanayake (LKA)",link:"https://youthscrabble.org/_wysc2023/Standings/Prizes.htm"},
    {year:"WYC 2022", location:"Online", champion:"Ali Salman (PAK)",runner_up:"Madhav Kamath (IND)",link:"https://youthscrabble.org/wyc2022%20final/html/index.html"},
    
    {year:"WYC 2021", location:"Online", champion:"Syed Imaad Ali (PAK)",runner_up:"Madhav Gopal Kamath (IND)",link:"https://youthscrabble.org/WYC%202021/WYC%202021%20Finals/html/index.html"},

   
    {year:"WYC 2020", location:"Online", champion:"Team Thailand",runner_up:"Napat (THA) (Player of the Tournament)",link:"http://youthscrabble.org/Gladiators%20WESPA%20Youth%20Cup%202020/html/index.html"},

    {year:"WYC 2019", location:"Kuala Lumpur (MYS)", champion:"Tarin Pairor (THA)",runner_up:"Janul De Silva (LKA)",link:"https://www.youthscrabble.org/wyc2019/Tourney/Results/Results.htm"},

    {year:"WYC 2018", location:"Dubai (UAE)", champion:"Syed Imaad Ali (PAK)",runner_up:"Janul De Silva (LKA)",link:"https://www.youthscrabble.org/wyc2018/results/Results.htm"},

    {year:"WYC 2017", location:"Kuala Lumpur (MYS)", champion:"Aabid Ismail (LKA)",runner_up:"Janul De Silva (LKA)",link:"https://www.youthscrabble.org/wyc2017/Results.htm"},

    {year:"WYSC 2016", location:"Lille (FRA)", champion:"Sanchit Kapoor (UAE)",runner_up:"Thavalakshman Yoganathan (LKA)",link:"https://www.youthscrabble.org/wysc2016/resultsummary.html"},

    {year:"WYSC 2015", location:"Perth (AUS)", champion:"Nicholas Hong (SGP)",runner_up:"Abdullah Abbasi (PAK)",link:"https://www.youthscrabble.org/wysc2015/resultsummary.html"},

    {year:"WYSC 2014", location:"Colombo (LKA)", champion:"Jack Durand (UK)",runner_up:"Yong Jian Rong (SGP)",link:"https://www.youthscrabble.org/wysc2014/index.html"},
    
    {year:"WYSC 2013", location:"Dubai (UAE)", champion:"Moizullah Baig (PAK)",runner_up:"Javeria Arshad Mirza (PAK)",link:"https://www.youthscrabble.org/wysc2013/index.html"},

    {year:"WYSC 2012", location:"Birmingham (UK)", champion:"Michael McKenna (AUS)",runner_up:"Cheong Yi Wei (MYS)",link:"https://www.youthscrabble.org/wysc2012/index.html"},

    {year:"WYSC 2011", location:"Johor Bahru (MYS)", champion:"Anand Bharadwaj (AUS)",runner_up:"Victor Gwee (SGP)",link:"https://www.youthscrabble.org/wysc2011/resultsummary11.html"},

    {year:"WYSC 2010", location:"Manila (PHI)", champion:"Ker Jen Ho (MYS)",runner_up:"Preedee Khongthanarat (THA)",link:"https://www.youthscrabble.org/wysc2010/resultsummary10.html"},

    {year:"WYSC 2009", location:"Johor Bahru (MYS)", champion:"Ong Suanne (MYS)",runner_up:"Alastair Richards (AUS)",link:"https://www.youthscrabble.org/wysc2009/resultsummary09.html"},

    {year:"WYSC 2008", location:"Penang (MYS)", champion:"Charnrit Khongthanarat (THA)",runner_up:"Khoo Beng Way (MYS)",link:"https://www.youthscrabble.org/wysc2008/resultsummary08.html"},

    {year:"WYSC 2007", location:"Johor Bahru (MYS)", champion:"Toh Weibin (SGP)	",runner_up:"Sean Chung (MYS)",link:"https://www.youthscrabble.org/wysc2007/resultsummary07.html"},

    {year:"WYSC 2006", location:"Wollongong (AUS)", champion:"David Eldar (AUS)",runner_up:"Austin Shin (UK)",link:"https://www.youthscrabble.org/wysc2006/resultsummary06.html"},
]

function WinnersTable() {
  return (
    <div>
        {/* MOBILE VIEW  */}
        <div className=' border border-gray-200 my-10  rounded-md'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className=' py-5 px-2'>Year</TableHead>
                        <TableHead className=' py-5 px-2'>Location</TableHead>
                        <TableHead className=' py-5 px-2'>Champion</TableHead>
                        <TableHead className=' py-5 px-2'>Runner Up</TableHead>
                        <TableHead className=' py-5 px-2'></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        winners.map((winner,idx)=>{
                            return(
                                <TableRow key={idx}>
                                    <TableCell><p className=" px-2 py-4">{winner.year}</p></TableCell>
                                    <TableCell>{winner.location}</TableCell>
                                    <TableCell>{winner.champion}</TableCell>
                                    <TableCell>{winner.runner_up}</TableCell>
                                    <TableCell><button className=" bg-primary text-card px-3 py-1 rounded-md"><a href={winner.link}>Info</a></button></TableCell>
                                </TableRow>
                            )
                        })
                    }   
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default WinnersTable