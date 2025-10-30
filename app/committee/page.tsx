import Image, {StaticImageData} from "next/image";

import dummy_image from "../../public/images/placeholder_img.png";
import Link from "next/link";
import { canada,australia,nigeria,india,us,uk,hongKong, turkey} from "@/lib/flags";
import { Button } from "@/components/ui/button";
import star from "../../public/icons/tournaments.svg";
import ethics from "../../public/icons/ethics.svg";
import rules from "../../public/icons/rules.svg";
import communication from "../../public/icons/communication.svg";
import members from "../../public/icons/member_affairs.svg"
import youth_scrabble from "../../public/icons/youth_scrabble.svg"
import DarkHero from "@/components/DarkHero";

const topCommittee = [
  {
    id: 1,
    name: "Jason Broersma",
    role: "Treasurer",
    country: canada,
    countryCode: "Canada",
    photo: dummy_image,
  },
  {
    id: 2,
    name: "Chris Lipe",
    role: "Chairperson",
    country: canada,
    countryCode: "Canada",
    photo: dummy_image,
  },
  {
    id: 3,
    name: "Carol Johnsen",
    role: "Secretary",
    country: australia,
    countryCode: "AU",
    photo: dummy_image,
  },
]
const committeeMembers = [
  
  {
    id: 4,
    name: "Phillips Lukeman",
    role: "Member",
    country: nigeria,
    countryCode: "NG",
    photo: dummy_image,
  },
  {
    id: 5,
    name: "Chock Heng Kong",
    role: "Member",
    country: turkey,
    countryCode: "TK",
    photo: dummy_image,
   
  },
  {
    id: 6,
    name: "Douglas Tsang",
    role: "Youth Coordinator",
    country: hongKong,
    countryCode: "HK",
    photo: dummy_image,
  },
  {
    id: 7,
    name: "Udayan Grover",
    role: "Member",
    country: india,
    countryCode: "IN",
    photo: dummy_image,
  },
  {
    id: 9,
    name: "Tony Leah",
    role: "Member",
    country: canada,
    countryCode: "CA",
    photo: dummy_image,
  },
  {
    id: 10,
    name: "Mina Le",
    role: "Member",
    country: us,
    countryCode: "US",
    photo: dummy_image,
  },
  {
    id: 8,
    name: "Chief Toke Aka",
    role: "Member",
    country: nigeria,
    countryCode: "NG",
    photo: dummy_image,
  },
  {
    id: 11,
    name: "Wayne Kelly",
    role: "Member",
    country: uk,
    countryCode: "UK",
    photo: dummy_image,
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
          <div >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
              {
                topCommittee.map((member) =>{
                  return(
                    <div key={member.id} className=" p-2 bg-white rounded-2xl">
                      <div className="flex flex-col items-center border-[1px] border-gray-50 rounded-2xl">
                        <div className="relative  mb-1 ">
                          <Image src={member.photo || "/placeholder.svg"} alt={member.name} className=" w-54 h-64  object-cover" />
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
                    <div key={member.id} className=" p-2 bg-white rounded-2xl">
                      <div className="flex flex-col items-center border-[1px] border-gray-50 rounded-2xl">
                        <div className="relative mb-1 ">
                          <Image src={member.photo || "/placeholder.svg"} alt={member.name} className=" w-54 h-64  object-cover"/>
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
      <div className=" flex flex-col gap-10 py-10">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-10">
            <div className="flex flex-col gap-10 bg-white py-8 px-4 rounded-md">
              <Image src={youth_scrabble} alt="Youth Scrabble" className="w-12" />
              <p className="font-semibold text-lg">Youth Scrabble</p>
              <p className="text-sm text-gray-800">Inspiring and guiding young players</p>
              <Link href="#" className="text-primary"><p className="text-sm">See Members</p></Link>
            </div> 
            <div className="flex flex-col gap-10 bg-white py-8 px-4 rounded-md">
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
