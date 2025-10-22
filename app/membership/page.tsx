"use client";

// import { MembershipForm } from "@/components/membership-form"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from 'react-intersection-observer';
import membership_hero from "../../public/images/membership_hero.png"
import world_map from "../../public/images/membership.png" 
import Image from "next/image";
import CountUp from "react-countup";
import {Flag,UserRound,Users} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import BenefitMembership from "@/components/membership/BenefitMembership";

interface MemberTypesProps{
  type:string;
  icon:React.ReactNode;
  id:number;
}


const count = [
  {amount:40,text:"Member Nations"},
  {amount:20,text:"Years of Global Leadership"},
  {amount:50,text:"Annual Tournaments"},
  {amount:1,text:"Global Rating System"},
];

const membershipBenefits = [
  {
    title: "Official Recognition",
    description:
      "Gain official WESPA recognition and representation in global governance.",
  },
  {
    title: "Tournament Sanctioning",
    description:
      "Host WESPA-sanctioned tournaments with official rating points.",
  },
  {
    title: "Player Development",
    description:
      "Access training resources, coaching programs, and youth initiatives.",
  },
  {
    title: "Global Network",
    description:
      "Connect with associations worldwide and participate in international events.",
  },
];


export default function MembershipPage() {

  const [selected,setSelected] = useState<number>(1);
  const {ref,inView} = useInView({
    triggerOnce:true,
    threshold:0.5
  });

  const members_types:MemberTypesProps[] = [
    {type:"federation",icon:<Flag />, id:1},
    {type:"individuals",icon:<UserRound />, id:2},
    {type:"support",icon:<Users />, id:3},
  ]

  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28  overflow-hidden ">
        <div className="absolute inset-0 z-0">
          <Image src={membership_hero} priority alt="Member ship Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-width relative z-10 space-y-3">
          <div className="max-w-4xl">
            <h1 className=" text-4xl md:text-6xl mb-6 text-white">WESPA Membership</h1>
            <p className="text-base md:text-lg text-white font-light">
              WESPA Membership unites federations, players, and supporters within one <span className=" font-semibold">global</span> framework for competitive Scrabble offering pathways to <span className=" font-semibold">tournaments</span>, international <span className=" font-semibold">recognition</span> and a role in the game’s worldwide <span className=" font-semibold">growth</span>.
            </p>
          </div>
          <section className=" flex flex-col sm:flex-row gap-3 pt-5 pb-2">
            <button className="  text-sm sm:text-base lg:text-lg bg-primary px-3 py-1 rounded-md text-white">Friends of WESPA</button>
            <button className="  text-sm sm:text-base lg:text-lg px-3 rounded-md py-1 border-[1px] border-primary text-white ">Become a Member</button>
          </section>
        </div>
      </section>

      {/* COUNT section */}
      <section ref={ref} className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10 ">
        {
          count.map((eachOne,idx)=>{
            return(
              <div key={idx} className=" flex items-center lg:items-start lg:flex-col bg-gray-100 gap-5 py-5 px-10 rounded-md ">
                <p className=" font-semibold text-2xl sm:text-3xl lg:text-4xl ">
                  {
                    inView?<CountUp delay={0.3} duration={5} start={0} end={eachOne.amount}/>:
                    <span>0</span>
                  }+
                </p>
                <p className=" sm:text-sm md:text-base lg:text-sm text-gray-700">{eachOne.text}</p>
              </div>
            )
          })
        }
      </section>

      {/* MEMBERSHIP SUPPORT */}
      <section className=" bg-black flex flex-col gap-12 py-10 md:py-16 px-5">
        <section className=" flex gap-5 flex-col">
          <h1 className=" font-gayathri text-3xl md:text-5xl text-center font-medium text-white">Membership & Support Pathways</h1>
          <p className=" text-white font-poppins text-center">
            WESPA membership is open to federations and players, with a support pathway for friends of global Scrabble.
          </p>

        </section>
        <section className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <Image src={world_map} alt=" image of the world" className=" lg:hidden py-5"/>
          <div>
            <section className=" max-sm:overflow-x-scroll pb-5 flex gap-8">

              {
                members_types.map((eachOne)=><button onClick={()=>setSelected(eachOne.id)} key={eachOne.id} className={` capitalize border-[1px] rounded-2xl py-2 flex gap-2 px-3  font-medium text-xs sm:text-sm  items-center  ${selected!==eachOne.id?"text-gray-100 border-gray-100":"text-primary border-primary"}`}><span>{eachOne.icon}</span>{eachOne.type}</button>
                )
              }
            </section>
            <DisplayMemberType typeId={selected}/>
          </div>
          <Image src={world_map} alt=" image of the world" className=" max-lg:hidden py-5"/>
        </section>
      </section>



      {/* Benefits Section */}
      <section className="section-spacing bg-background">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold font-gayathri text-3xl mb-8 text-center">
              Membership Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {membershipBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <div>
                        <h3 className="font-semibold mb-1 text-lg">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <BenefitMembership/>
      </section>




      {/* Application Form */}
      {/* <section className="section-spacing">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <MembershipForm />
          </div>
        </div>
      </section> */}
    </main>
  )
}


const DisplayMemberType = ({typeId}:{typeId:number})=>{
  const data = [
    {header:"National Association",id:1,text:"National associations connect their players to the global Scrabble framework, providing ratings, recognition, and access to tournaments.Membership is classified into two tiers, based on association size and voting rights."},
    {header:"WESPA+",id:2,text:"Players and fans can build a direct link with WESPA, gaining access to exclusive content, online events, and a profile within the worldwide Scrabble community. \n WESPA+ is open to individuals who are not members of a national federation but still want to engage directly with the global Scrabble community."},
    {header:"Friends of Wespa",id:3,text:"Individuals, communities, and organizations can champion the growth of Scrabble worldwide, receiving recognition, unique supporter benefits, and invitations to special events."},
  ].filter((eachOne)=>eachOne.id===typeId)

  return(
    <div>
      {
        data.map((eachOne)=>{
          return (
          <section key={eachOne.id} className=" py-10 px-2 flex flex-col gap-4">
            <h1 className=" text-2xl text-white">{eachOne.header}</h1>
            <article className=" text-base text-gray-300">{eachOne.text}</article>
          </section>
          )
        })
      }
    </div>
  )
}