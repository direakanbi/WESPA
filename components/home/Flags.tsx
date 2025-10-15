import React from 'react'
import { australia,bangladesh,botswana,cameroon,canada,gambia,germany,ghana,hongKong,india,indonesia,ireland,kenya,liberia,malaysia,malta,nepal,netherlands,newZealand,nigeria,pakistan,philippines,poland,qatar,romania,seychelles, sierreLeone,singapore,southAfrica,spain,sriLanka,sweden,switz,tanzania,thailand,trinidad,uae,uk,us,uganda} from '@/lib/flags';
import SliderComponent from '../SliderComponent';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

export const countries = [
  { name: "Australia", flag: australia },
  { name: "Bangladesh", flag: bangladesh },
  { name: "Botswana", flag: botswana },
  { name: "Cameroon", flag: cameroon },
  { name: "Canada", flag: canada },
  { name: "Gambia", flag: gambia },
  { name: "Germany", flag: germany },
  { name: "Ghana", flag: ghana },
  { name: "Hong Kong", flag: hongKong },
  { name: "India", flag: india },
  { name: "Indonesia", flag: indonesia },
  { name: "Ireland", flag: ireland },
  { name: "Kenya", flag: kenya },
  { name: "Liberia", flag: liberia },
  { name: "Malaysia", flag: malaysia },
  { name: "Malta", flag: malta },
  { name: "Nepal", flag: nepal },
  { name: "Netherlands", flag: netherlands },
  { name: "New Zealand", flag: newZealand },
  { name: "Nigeria", flag: nigeria },
  { name: "Pakistan", flag: pakistan },
  { name: "Philippines", flag: philippines },
  { name: "Poland", flag: poland },
  { name: "Qatar", flag: qatar },
  { name: "Romania", flag: romania },
  { name: "Seychelles", flag: seychelles },
  { name: "Sierra Leone", flag: sierreLeone },
  { name: "Singapore", flag: singapore },
  { name: "South Africa", flag: southAfrica },
  { name: "Spain", flag: spain },
  { name: "Sri Lanka", flag: sriLanka },
  { name: "Sweden", flag: sweden },
  { name: "Switzerland", flag: switz },
  { name: "Tanzania", flag: tanzania },
  { name: "Thailand", flag: thailand },
  { name: "Trinidad & Tobago", flag: trinidad },
  { name: "UAE", flag: uae },
  { name: "UK", flag: uk },
  { name: "USA", flag: us },
  { name: "Uganda", flag: uganda },
];

function Flags() {
  return (
    <section className=' py-10 text-white'>
        <SliderComponent autoplayDelay={3000} slidesPerView={5} >
          {countries.map((eachFlag,idx)=>{
            return(
            <SwiperSlide key={idx}>
              <Image src={eachFlag.flag} alt={eachFlag.name}  className=' w-16 h-12'/>
            </SwiperSlide>)
          })}
        </SliderComponent>
    </section>
  )
}

export default Flags