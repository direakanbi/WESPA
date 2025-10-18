'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

// Example player images
import player1 from "../../public/images/fake_player1.jpg";
import player2 from "../../public/images/fake_player2.jpg";
import player3 from "../../public/images/fake_player3.jpg";

// Example flags
import { nigeria, us, newZealand, india, uk, malaysia, ghana, canada, kenya, philippines } from '@/lib/flags';

interface Player {
  id: number;
  name: string;
  country: string;
  ranking: number;
  image: StaticImageData;
  flag: StaticImageData;
}

const topPlayers: Player[] = [
  { id: 1, name: 'David Eldar', country: 'Australia', ranking: 1, image: player1, flag: newZealand },
  { id: 2, name: 'Nigel Richards', country: 'New Zealand', ranking: 2, image: player2, flag: newZealand },
  { id: 3, name: 'Komal Patel', country: 'India', ranking: 3, image: player3, flag: india },
  { id: 4, name: 'Sarah Evans', country: 'UK', ranking: 4, image: player1, flag: uk },
  { id: 5, name: 'Chin Lee', country: 'Malaysia', ranking: 5, image: player2, flag: malaysia },
  { id: 6, name: 'Kwame Adjei', country: 'Ghana', ranking: 6, image: player3, flag: ghana },
  { id: 7, name: 'Ryan James', country: 'Canada', ranking: 7, image: player1, flag: canada },
  { id: 8, name: 'Peter Njoroge', country: 'Kenya', ranking: 8, image: player2, flag: kenya },
  { id: 9, name: 'Alicia Brown', country: 'USA', ranking: 9, image: player3, flag: us },
  { id: 10, name: 'Miguel Santos', country: 'Philippines', ranking: 10, image: player1, flag: philippines },
];

function TopPlayers() {
  return (
    <div className=" md:px-2 lg:px-6 py-8">
      
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {topPlayers.map((player) => (
          <SwiperSlide key={player.id}>
            <div className="bg-white border border-gray-200 shadow rounded-2xl flex flex-col items-center overflow-hidden hover:shadow-m transition-shadow duration-300 swiper-slide-active:scale-105">
              
              {/* Player Image */}
              <div className="relative w-full h-72">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col items-center gap-1 py-3">
       
                <div className="flex flex-col items-center">
                  <Image
                    src={player.flag}
                    alt={player.country}
                    width={32}
                    height={20}
                    className="rounded-md border"
                  />
                  <p className="font-semibold text-gray-800 mt-1">{player.name}</p>
                </div>

                <p className="text-sm text-gray-500">{player.country}</p>

                <p className="text-primary font-medium text-sm">{player.ranking}ᵗʰ</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopPlayers;
