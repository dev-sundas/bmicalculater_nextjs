import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <nav className="text-[white] font-bold text-[20px]  w-[90%] m-auto">
      <ul className="flex gap-10 py-10 ">
        <li className="hover:underline">
          <Link href={"/"}>BMI CALCULATER</Link>
        </li>
        <li className="hover:underline">
          <Link href={"/currency_converter"}>CURRENCY COVERTER</Link>
        </li>
      </ul>
    </nav>
  );
}
