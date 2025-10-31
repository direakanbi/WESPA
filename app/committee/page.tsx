import Image, {StaticImageData} from "next/image";

import dummy_image from "../../public/images/placeholder_img.png";
import Link from "next/link";
import { canada,australia,nigeria,india,us,uk,hongKong, turkey, liberia, malta, pakistan, southAfrica, kenya, thailand} from "@/lib/flags";
import { Button } from "@/components/ui/button";
import star from "../../public/icons/tournaments.svg";
import ethics from "../../public/icons/ethics.svg";
import rules from "../../public/icons/rules.svg";
import communication from "../../public/icons/communication.svg";
import members from "../../public/icons/member_affairs.svg"
import youth_scrabble from "../../public/icons/youth_scrabble.svg"
import DarkHero from "@/components/DarkHero";
import { chris_lipe, ike_obidike, karen_richards, limo_kipkemol, lukeman_owolabi, olobatoke_aka, ravee_jorado, sudhir_kamath, tariq_pervez, tony_leah, wayne_kelly } from "@/lib/images";

const topCommittee = [
  {
    id: 1,
    name: "Lukeman Owolabi",
    role: "Chairman",
    country: liberia,
    countryCode: "Liberia",
    photo: lukeman_owolabi,
  },
  {
    id: 2,
    name: "Chris Lipe",
    role: "Secretary",
    country: malta,
    countryCode: "Malta",
    photo: chris_lipe,
  },
  {
    id: 3,
    name: "Sudhir Kamath",
    role: "Treasurer",
    country: india,
    countryCode: "India",
    photo: sudhir_kamath,
  },
]
const committeeMembers = [
  
  {
    id: 4,
    name: "Karen Richards",
    role: "Member",
    country: australia,
    countryCode: "Australia",
    photo: karen_richards,
  },
  {
    id: 5,
    name: "Olobatoke Aka",
    role: "Member",
    country: nigeria,
    countryCode: "Nigeria",
    photo: olobatoke_aka,
   
  },
  {
    id: 6,
    name: "Tariq Perez",
    role: "Member",
    country: pakistan,
    countryCode: "Pakistan",
    photo: tariq_pervez,
  },
  {
    id: 7,
    name: "Ike Obidike",
    role: "Member",
    country: southAfrica,
    countryCode: "South Africa",
    photo: ike_obidike,
  },
  {
    id: 9,
    name: "Limo Kipkemol",
    role: "Member",
    country: kenya,
    countryCode: "Kenya",
    photo: limo_kipkemol,
  },
  {
    id: 10,
    name: "Wayne Kelly",
    role: "Member",
    country: uk,
    countryCode: "United Kingdom",
    photo: wayne_kelly,
  },
  {
    id: 8,
    name: "Ravee Jordol",
    role: "Member",
    country: thailand,
    countryCode: "Thailand",
    photo: ravee_jorado,
  },
  {
    id: 11,
    name: "Tony Leah",
    role: "Member",
    country: canada,
    countryCode: "Canada",
    photo: tony_leah,
  },
]
const committees_rules_one = [
  {image:star,header:"Tournament & Ratings",text:"Managing tournaments and player ratings",link:"#"},
  {image:ethics,header:"Ethics & Disciplinary",text:"Ensuring fairness and integrity in play",link:"#"},
  {image:rules,header:"Rules & Dictionary",text:"Maintaining official rules and word limits",link:"#"},
  {image:communication,header:"Communication media & Branding",text:"Promoting Scrabble and its global image",link:"#"},
]
const links = [
  {name:"Home",href:"/"},
  {name:"About",href:"/about"},
  {name:"Our committees",href:"#"},
]

export default function CommitteePage() {
 
  return (
    <main className=" bg-primary/5 ">
      <DarkHero heading=" Executive Committee" text="WESPA committees uphold rules, ratings, youth development, global tournaments and official dictionaries." links={links}/> 

      <div className=" bg-gray-50 py-10 lg:py-24 ">
        <section className="lg:px-32">
          <div className="container-width">
            <div className="grid md:grid-cols-2 lg:flex lg:justify-center lg:items-center gap-6 ">
              {
                topCommittee.map((member) =>{
                  return(
                    <div key={member.id} className="group hover:-translate-y-2 transition-transform duration-300 p-2 bg-white rounded-2xl w-80">
                      <div className="flex flex-col items-center border-[1px] border-gray-50 rounded-2xl">
                        <div className="relative  mb-1 ">
                          <Image src={member.photo || "/placeholder.svg"} alt={member.name} className=" w-64 h-64 rounded-2xl object-cover" />
                          <section className=" w-10 p-3 absolute bottom-0 -left-0.5 bg-white rounded-full">
                            <Image src={member.country || "/placeholder.svg"} alt={member.name} className={`  `}/>
                          </section>
                        </div>
                        <section className=" w-full px-1 flex items-center justify-between gap-5 ">
                          <div className="flex flex-col gap-1 text-sm text-black mb-4">
                            <h3 className=" font-semibold text-lg mb-1">{member.name}</h3>
                            <p className="text-muted-foreground font-medium mb-2">{member.role}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Read Bio
                          </Button>
                        </section>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        <section className=" pt-10 pb-16">
          <div className="container-width">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {
                committeeMembers.map((member) =>{
                  return(
                    <div key={member.id} className=" group hover:-translate-y-2 transition-transform duration-300 p-2 bg-white rounded-2xl">
                      <div className="flex flex-col items-center border-[1px] border-gray-50 rounded-2xl">
                        <div className="relative mb-1 ">
                          <Image src={member.photo || "/placeholder.svg"} alt={member.name} className=" w-64 h-64 rounded-2xl object-cover"/>
                          <section className=" w-10 p-3 absolute bottom-0 -left-0.5 bg-white rounded-full">
                            <Image src={member.country || "/placeholder.svg"} alt={member.name} className={`  `}/>
                          </section>
                        </div>
                        <section className=" w-full px-1 flex items-center justify-between gap-5 ">
                          <div className="flex flex-col gap-1 text-sm text-black mb-4">
                            <h3 className=" font-semibold text-base mb-1">{member.name}</h3>
                            <p className="text-muted-foreground mb-2">{member.role}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Read Bio
                          </Button>
                        </section>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>

      {/* Committee Members */}
      {/* Our Committees */}
      <div className=" container-width flex flex-col gap-10 py-10">
        <section className=" flex flex-col gap-1 mb-8">
          <h2 className=" text-4xl font-medium text-center mb-2">Our Committees</h2>
          <p className=" text-sm text-gray-500 font-semibold text-center">Wespa committes ensure Scrabble thrives worldwide</p>
        </section>
        <section className=" grid grid-cols-2 lg:grid-cols-4 gap-5 px-10">
          {
            committees_rules_one.map((rule,idx)=>{
              return(
                <div key={idx} className=" flex flex-col gap-3 bg-white py-8 px-4 rounded-md">
                  <Image src={rule.image} alt={rule.header} className=" w-12 "/>
                  <p className=" font-semibold text-lg">{rule.header}</p>
                  <p className=" text-sm text-gray-800">{rule.text}</p>
                  <Link href={rule.link} className=" text-primary"><p className=" text-sm ">See Members</p></Link>
                </div>
              )
            })
          }
        </section>
        <section className="mb-10 flex justify-center">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 px-10">
            <div className="w-[266px]  h-[266px]  flex flex-col justify-between bg-white py-8 px-4 rounded-md">
              <Image src={youth_scrabble} alt="Youth Scrabble" className="w-12" />
              <p className="font-semibold text-lg">Youth Scrabble</p>
              <p className="text-sm text-gray-800">Inspiring and guiding young scrabble players</p>
              <Link href="#" className="text-primary"><p className="text-sm">See Members</p></Link>
            </div> 
            <div className=" w-[266px]  h-[266px] flex flex-col justify-between bg-white py-8 px-4 rounded-md">
              <Image src={members} alt="Members Affairs" className="w-12" />
              <p className="font-semibold text-lg">Members Affairs</p>
              <p className="text-sm text-gray-800">Promoting Scrabble and its global image</p>
              <Link href="#" className="text-primary"><p className="text-sm">See Members</p></Link>
            </div> 
          </div>
        </section>

      </div>


    </main>
  )
}
