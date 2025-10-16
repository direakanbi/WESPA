import React from 'react'
import { australia,bangladesh,botswana,cameroon,canada,gambia,germany,ghana,hongKong,india,indonesia,ireland,kenya,liberia,malaysia,malta,nepal,netherlands,newZealand,nigeria,pakistan,philippines,poland,qatar,romania,seychelles, sierreLeone,singapore,southAfrica,spain,sriLanka,sweden,switz,tanzania,thailand,trinidad,uae,uk,us,uganda} from '@/lib/flags';
import SliderComponent from '../SliderComponent';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

export const countries = [
    { name: "Bangladesh", flag: bangladesh },
    { name: "Australia", flag: australia },
    { name: "Botswana", flag: botswana },
    { name: "Canada", flag: canada },
  { name: "Cameroon", flag: cameroon },
  { name: "Germany", flag: germany },
  { name: "Gambia", flag: gambia },
  { name: "Ghana", flag: ghana },
  { name: "India", flag: india },
  { name: "Hong Kong", flag: hongKong },
  { name: "Indonesia", flag: indonesia },
  { name: "Kenya", flag: kenya },
  { name: "Ireland", flag: ireland },
  { name: "Liberia", flag: liberia },
  { name: "Malaysia", flag: malaysia },
  { name: "Malta", flag: malta },
  { name: "Netherlands", flag: netherlands },
  { name: "Nepal", flag: nepal },
  { name: "New Zealand", flag: newZealand },
  { name: "Nigeria", flag: nigeria },
  { name: "Pakistan", flag: pakistan },
  { name: "Philippines", flag: philippines },
  { name: "Poland", flag: poland },
  { name: "Qatar", flag: qatar },
  { name: "Seychelles", flag: seychelles },
  { name: "Singapore", flag: singapore },
  { name: "Romania", flag: romania },
  { name: "Sierra Leone", flag: sierreLeone },
  { name: "Spain", flag: spain },
  { name: "South Africa", flag: southAfrica },
  { name: "Switzerland", flag: switz },
  { name: "Sri Lanka", flag: sriLanka },
  { name: "Sweden", flag: sweden },
  { name: "UAE", flag: uae },
  { name: "Tanzania", flag: tanzania },
  { name: "UK", flag: uk },
  { name: "Thailand", flag: thailand },
  { name: "Trinidad & Tobago", flag: trinidad },
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