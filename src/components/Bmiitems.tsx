"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BmiSchema, BmiType, DietType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormControl, FormItem, FormMessage } from "./ui/form";
import { useState } from "react";
import Eiditdialog from "./Eiditdialog";
import { Dietplane } from "@/lib/database";

type Props = {};

export default function BmiItems({}: Props) {
  const [open, setopen] = useState(false);
  const [tag, settag] = useState("");
  const [message, setmessage] = useState("");
  const [BMI, setbmi] = useState("");
  const form = useForm<BmiType>({
    resolver: zodResolver(BmiSchema),
  });

  const OnSubmit = (data: BmiType) => {
    let userheight = Number(data.height);
    let userweight = Number(data.weight);
    if (data.heightUnits == "inches") {
      userheight *= 2.54;
    }
    if (data.weightUnits == "lbs") {
      userweight /= 2.2046;
    }
    userheight /= 100;
    const BMI = userweight / userheight ** 2;
    if (BMI <= 18.5) {
      setbmi(BMI.toFixed(2));
      setmessage("You are under weight");
      settag("underweight");
    } else if (BMI >= 18.5 || BMI <= 24.9) {
      setbmi(BMI.toFixed(2));
      setmessage("Your weight is normal");
      settag("normalweight");
    } else if (BMI >= 25 || BMI <= 29.9) {
      setbmi(BMI.toFixed(2));
      setmessage("You are over weight");
      settag("underweight");
    } else if (BMI >= 30) {
      setbmi(BMI.toFixed(2));
      setmessage("You are obsey");
      settag("obsey");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <Card className="bg-transparent w-[50%] backdrop-blur-md shadow-md p-6 my-12">
        <CardContent>
          <div className="">
            <h1 className="text-white text-[32px] font-bold text-center mt-4">
              BMI CALCULATER
            </h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(OnSubmit)}>
                <div className="mt-8">
                  <h2 className="text-[white] text-[27px] font-bold text-center">
                    Your Height
                  </h2>
                </div>
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Enter your height"
                          className="p-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="heightUnits"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="mt-3">
                            <SelectValue placeholder="Units" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="centi meter">
                              CentiMeter
                            </SelectItem>
                            <SelectItem value="inches">Inches</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-8">
                  <h2 className="text-[white] text-[27px] font-bold text-center">
                    Your Weight
                  </h2>
                </div>
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Enter your weight"
                          className="p-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weightUnits"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="mt-3">
                            <SelectValue placeholder="Units" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kilo">Kilograms</SelectItem>
                            <SelectItem value="lbs">Pounds</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  {BMI.length > 0 && (
                    <span className=" text-[20px] text-[black] font-bold">
                      <p className=" mt-3">
                        Your BMI:
                        {BMI}
                      </p>
                      <div className="flex justify-between">
                        <p className="text-center">{message}</p>

                        <Button
                          className="text-black bg-white hover:bg-white font-bold"
                          onClick={() => {
                            setopen(true);
                          }}
                        >
                          Show diet plan
                        </Button>
                      </div>

                      {
                        <Eiditdialog
                          open={open}
                          setopen={setopen}
                          diet={
                            Dietplane.filter(
                              (diet: DietType) => diet.tag == tag
                            )[0]
                          }
                        />
                      }
                    </span>
                  )}
                </div>
                <div className=" flex justify-center items-center mt-5">
                  <Button
                    type="submit"
                    className="bg-[white] text-[black] font-bold w-[40%] h-14 hover:bg-[white]"
                  >
                    Calculate BMI
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
