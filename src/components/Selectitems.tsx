import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { UseFormReturn } from "react-hook-form";
import { currencyType, valueType } from "@/lib/types";

type Props = {
  placeholder: string;
  name: "currency1Units" | "currency2Units";
  form: UseFormReturn<currencyType>;
  selects: valueType[];
};

export default function Selectitems({
  placeholder,
  name,
  form,
  selects,
}: Props) {
  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="mt-3">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {selects.map((select) => (
                    <div key={select.id}>
                      <SelectItem value={select.symbol}>
                        {select.value}
                      </SelectItem>
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
