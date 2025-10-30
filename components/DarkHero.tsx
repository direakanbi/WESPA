import React from 'react'
import hero_img from "../public/images/committee-hero.png";
import Image from "next/image";
import Link from "next/link";
function DarkHero({heading,text,links}:{
    heading?:string,
    text?:string,
    links?:Array<{name:string,href:string}>
}) {
  return (
    <div>
        <section className="relative  py-20 md:py-28 overflow-hidden h-[600px] lg:h-[500px]">
            <div className="absolute inset-0 -z-10">
              <Image src={hero_img} alt="Hero section for Committee" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="container-width relative z-10 ">
                <h1 className="font-bold text-4xl md:text-6xl mb-10 text-white  text-center">{heading}</h1>
              <div className="flex flex-col items-center  justify center">
                <p className="text-xl w-[450px]  text-white   text-center leading-relaxed">
                  {text}
                </p>
              </div>
                <section className=" flex justify-center gap-3 items-center pt-8">
                    {
                        links && links.map((link,index) => (
                            <React.Fragment key={index}>
                                <Link href={link.href} className={` ${link.href==="#"?"text-primary":"text-white"} text-lg font-semibold`}>{link.name}</Link>
                                {index < links.length - 1 && <span className=" text-white text-base">&gt;</span>}
                            </React.Fragment>
                        ))
                    }
                </section>
            </div>
        </section>
    </div>
  )
}

export default DarkHero