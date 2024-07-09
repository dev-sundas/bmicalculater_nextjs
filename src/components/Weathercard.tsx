"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { weatherType } from "@/lib/types";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Props = { weather: weatherType };

export default function Weathercard({ weather }: Props) {
  return (
    <div className="flex items-center justify-center mt-10 p-6 ">
      <Card
        key={weather.id}
        className="backdrop-blur-sm shadow-md w-[100%]  lg:w-[60%]"
      >
        <CardContent>
          <div className="flex justify-between ">
            <div>
              <h1 className=" text-[27px] font-bold my-4">{weather.name}</h1>
              <p>{weather.date}</p>
              <Image
                src={weather.imageurl}
                alt={"clouds"}
                width={100}
                height={100}
              />
              <p className="font-bold text-[20px] mb-3">{weather.text}</p>
            </div>
            <div className="mt-14">
              <p className="text-[52px]">{weather.week[0].temperture}</p>
              <p className="text-[20px] font-bold">{weather.humidity}</p>
            </div>
          </div>
          <hr />
          <Carousel
            className="md:flex mt-5 items-center gap-5"
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent>
              <CarouselItem className="flex gap-10">
                {weather.week.map((week) => (
                  <span className=" basis-7">
                    <h1 className="ml-7">{week.day}</h1>
                    <Image
                      src={week.image}
                      alt={"cloud"}
                      width={100}
                      height={100}
                    />
                    <p className="text-black ml-7">{week.temperture}</p>
                  </span>
                ))}
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </CardContent>
      </Card>
    </div>
  );
}
