"use client";
import Header from "@/components/Header";
import Inputitems from "@/components/Inputitems";
import Selectitems from "@/components/Selectitems";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Select, exchange_rates } from "@/lib/database";
import {
  ExchangeRates,
  currencySchema,
  currencyType,
  valueType,
} from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {};

const select_db: valueType[] = Select;

export default function page({}: Props) {
  const form = useForm<currencyType>({
    resolver: zodResolver(currencySchema),
    defaultValues: { currency1: "0", currency2: "0" },
  });

  const currency = (
    amount: number,
    from_currency: string,
    to_currency: string,
    exchange_rates: ExchangeRates
  ): number => {
    if (from_currency != "USD") {
      amount = amount / exchange_rates[from_currency];
    }
    if (to_currency != "USD") {
      amount = amount * exchange_rates[to_currency];
    }

    return amount;
  };

  const OnSubmit = (data: currencyType) => {
    if (data.currency1 != "") {
      let currency1 = Number(data.currency1);
      const currencys = currency(
        currency1,
        data.currency1Units,
        data.currency2Units,
        exchange_rates
      );
      form.setValue("currency2", currencys.toFixed(2));
    } else if (data.currency2 != "") {
      let currency2 = Number(data.currency2);
      const currencys = currency(
        currency2,
        data.currency1Units,
        data.currency2Units,
        exchange_rates
      );
      form.setValue("currency1", currencys.toFixed(2));
    }
  };

  return (
    <div className="bg-[url('/images/currency.jpg')] h-[100vh]">
      <Header />
      <div className="flex items-center justify-center">
        <Card className="bg-transparent w-[50%] p-6 backdrop-blur-sm shadow-md">
          <h1 className="text-center text-white font-bold text-[27px] py-5">
            CURRENCY COVERTER
          </h1>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(OnSubmit)}>
                <Inputitems
                  form={form}
                  placeholder={"Enter currency"}
                  type={"text"}
                  name={"currency1"}
                />
                <Selectitems
                  form={form}
                  name={"currency1Units"}
                  placeholder={"Select currency"}
                  selects={select_db}
                />
                <div className="mt-5">
                  <Inputitems
                    form={form}
                    placeholder={"Enter curreny"}
                    type={"text"}
                    name={"currency2"}
                  />
                  <Selectitems
                    form={form}
                    name={"currency2Units"}
                    placeholder={"Select currency"}
                    selects={select_db}
                  />
                </div>
                <div className="flex items-center justify-center mt-10">
                  <Button
                    type="submit"
                    className=" bg-white hover:bg-white text-black font-bold w-[40%] h-14"
                  >
                    Convert Currency
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
