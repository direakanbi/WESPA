import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const membershipClasses = [
    {sn:1, fees:"$150 for 1 yr\n$300 for 2 yrs", votesShowHands:"1", votesPollProxy:"30"},
    {sn:2, fees:"$75 for 1 yr\n$150 for 2 yrs", votesShowHands:"1", votesPollProxy:"15"},
    {sn:3, fees:"$50 for 1 yr\n$100 for 2 yrs", votesShowHands:"1", votesPollProxy:"5"},
    {sn:4, fees:"$10 for 1 yr\n$20 for 2 yrs", votesShowHands:"1", votesPollProxy:"1"},
    {sn:5, fees:"Not applicable", votesShowHands:"1", votesPollProxy:"0"},
]

const membershipRights = [
  {
    right: "Nominate a committee member",
    class1: "Y",
    class2: "Y*",
    class3: "Y*",
    class4: "Y*",
    class5: "N"
  },
  {
    right: "Obtain committee minutes/voting details",
    class1: "Y",
    class2: "Y",
    class3: "N",
    class4: "N",
    class5: "N"
  },
  {
    right: "Submit topics for debate in committee",
    class1: "Y",
    class2: "Y",
    class3: "Y",
    class4: "Y",
    class5: "Y"
  },
  {
    right: "Submit motions for consideration at GM’s",
    class1: "Y",
    class2: "Y",
    class3: "Y",
    class4: "Y",
    class5: "N"
  },
  {
    right: "Exercise this many votes on GM motions",
    class1: "30",
    class2: "15",
    class3: "5",
    class4: "1",
    class5: "0"
  },
  {
    right: "Exercise this many votes in elections",
    class1: "1",
    class2: "1",
    class3: "1",
    class4: "1",
    class5: "0"
  },
  {
    right: "Attend GM’s",
    class1: "Y",
    class2: "Y",
    class3: "Y",
    class4: "Y",
    class5: "Y"
  },
  {
    right: "Participate in debates at GM’s",
    class1: "Y",
    class2: "Y",
    class3: "Y",
    class4: "Y",
    class5: "Y"
  },
  {
    right: "Fees",
    class1: "$US150",
    class2: "$US75",
    class3: "$US50",
    class4: "$US10",
    class5: "NA"
  }
];


function BenefitMembership() {
  return (
    <div className=' lg:px-32 flex flex-col gap-16 md:gap-24 py-10'>
        <section className=' border-[1px] border-primary lg:rounded-md border-b-[1px] border-b-primary'>
            <h1 className=" text-center font-gayathri text-2xl md:text-3xl lg:text-4xl pb-10 pt-16">Membership Class Details</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className=' text-black px-3 md:text-sm lg:text-base  border-t-[2px] border-l-[2px] border-gray-100'>Membership </TableHead>
                        <TableHead className='text-black md:text-sm lg:text-base border-l-[2px] border-gray-100 border-t-[2px] px-6'>Fee </TableHead>
                        <TableHead className="text-black md:text-sm lg:text-base border-l-[2px] border-gray-100 border-t-[2px] pl-2 pr-6">Votes by hands</TableHead>
                        <TableHead className="text-black md:text-sm lg:text-base border-r-[2px] border-l-[2px] border-gray-100 border-t-[2px] px-6">Votes by poll</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    
                    {
                        membershipClasses.map((item)=>(
                            <TableRow key={item.sn}>
                                <TableCell className=' lg:text-base border-l-[2px] border-r-[2px] border-gray-100 text-black px-5  '>{item.sn}</TableCell>
                                <TableCell className=' lg:text-base border-l-[2px] border-r-[2px] border-gray-100 text-black px-5'>{item.fees}</TableCell>
                                <TableCell className=' lg:text-base border-l-[2px] border-r-[2px] border-gray-100 text-black px-5 '>{item.votesShowHands}</TableCell>
                                <TableCell className=' lg:text-base  px-7 border-l-[2px] border-r-[2px] border-gray-100 text-black '>{item.votesPollProxy}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
        <section className=' border-[1px] border-primary lg:rounded-md text-black border-b-[1px] border-b-primary'>
            <h1 className=" text-center font-gayathri text-2xl md:text-3xl lg:text-4xl pb-10 pt-16">Membership Rights</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className=' px-3 md:text-sm lg:text-base  border-t-[2px] border-l-[2px] text-black border-gray-100'>Membership Rights</TableHead>
                        <TableHead className='text-black md:text-sm lg:text-base border-l-[2px] border-gray-100 border-t-[2px] px-6'>Class </TableHead>
                        <TableHead className=" md:text-sm lg:text-base  border-gray-100 border-t-[2px] pl-2 pr-6"></TableHead>
                        <TableHead className=" md:text-sm lg:text-base   border-gray-100 border-t-[2px] px-6"></TableHead>
                        <TableHead className=" md:text-sm lg:text-base   border-gray-100 border-t-[2px] px-6"></TableHead>
                        <TableHead className=" md:text-sm lg:text-base border-r-[2px]  border-gray-100 border-t-[2px] px-6"></TableHead>
                    </TableRow>
                    <TableRow>
                        <TableHead className=' px-3 md:text-sm lg:text-base  border-t-[2px] border-l-[2px] border-gray-100'></TableHead>
                        <TableHead className=' md:text-sm lg:text-base border-l-[2px] border-r-[2px] border-gray-100 border-t-[2px]  text-black'>1 </TableHead>
                        <TableHead className=" md:text-sm lg:text-base  border-gray-100 border-t-[2px] border-l-[2px] pl-2 pr-6 text-black">2</TableHead>
                        <TableHead className=" md:text-sm lg:text-base border-r-[2px]  border-gray-100 border-t-[2px] border-l-[2px]  text-black">3</TableHead>
                        <TableHead className=" md:text-sm lg:text-base border-r-[2px]  border-gray-100 border-t-[2px] border-l-[2px] text-black ">4</TableHead>
                        <TableHead className=" md:text-sm lg:text-base border-r-[2px]  border-gray-100 border-t-[2px] text-black">5</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {membershipRights.map((item, index) => (
                        <TableRow key={index}>
                        <TableCell className="border px-4 font-medium">{item.right}</TableCell>
                        <TableCell className="border ">{item.class1}</TableCell>
                        <TableCell className="border ">{item.class2}</TableCell>
                        <TableCell className="border ">{item.class3}</TableCell>
                        <TableCell className="border ">{item.class4}</TableCell>
                        <TableCell className="border ">{item.class5}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
        {/* <section>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[300px]'></TableHead>
                        <TableHead>Federation </TableHead>
                        <TableHead>Individual Members</TableHead>
                        <TableHead>Supporters</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    </TableRow>
                </TableBody>
            </Table>
        </section> */}
    </div>
  )
}

export default BenefitMembership