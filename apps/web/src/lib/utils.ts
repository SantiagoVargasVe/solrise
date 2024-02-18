import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(number: number) {
  return new Intl.NumberFormat().format(number);
}

export function formatCurrency(number: number, addSymbol: boolean = false) {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "USD",
  };

  const formattedNumber = new Intl.NumberFormat("en-US", options).format(
    number
  );

  if (addSymbol) {
    return `US ${formattedNumber}`;
  }

  return formattedNumber;
}
