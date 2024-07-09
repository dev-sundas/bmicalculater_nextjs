import React from "react";
import { weatherType } from "@/lib/types";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Weather from "@/components/Weathercard";
import Weathercard from "@/components/Weathercard";

type Props = { weathers: weatherType[] };

export default function Weatheritems({ weathers }: Props) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {weathers.map((weather) => (
            <CarouselItem key={weather.id}>
              <Weathercard weather={weather} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
