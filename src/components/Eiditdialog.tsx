"use client";
import React from "react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { DietType } from "@/lib/types";

type Props = {
  diet: DietType;
  open: boolean;
  setopen: (open: boolean) => void;
};

export default function Eiditdialog({ diet, open, setopen }: Props) {
  console.log("diet", diet);

  return (
    <div>
      <Dialog open={open} onOpenChange={setopen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your Diet Plan</DialogTitle>
          </DialogHeader>
          <div key={diet.id}>
            <p>
              {diet.plan.fruit}
              <br />
              {diet.plan.vegitable}
              <br />
              {diet.plan.drink}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
