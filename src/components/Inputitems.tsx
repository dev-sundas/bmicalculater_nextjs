import { currencyType } from "@/lib/types";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

type Props = {
  placeholder: string;
  type: string;
  name: "currency1" | "currency2";
  form: UseFormReturn<currencyType>;
};

export default function Inputitems({ placeholder, type, name, form }: Props) {
  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                className="p-6"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
