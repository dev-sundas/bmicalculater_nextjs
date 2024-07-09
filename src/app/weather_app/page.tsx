import Header from "@/components/Header";
import Weatheritems from "@/components/Weatheritems";
import { Weatherlist } from "@/lib/database";
import { weatherType } from "@/lib/types";
import React from "react";

const Weather: weatherType[] = Weatherlist;

type Props = {};

export default function Page({}: Props) {
  return (
    <main className="bg-[url('/images/clouds.webp')] bg-no-repeat h-[100vh] bg-cover">
      <Header />
      <Weatheritems weathers={Weather} />
    </main>
  );
}
