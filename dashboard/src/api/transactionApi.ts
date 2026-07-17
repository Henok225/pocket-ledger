import {  PARSER_URL, apiFetch } from "./client";
import type { Transaction } from "../types/transaction";

export const getTransactions = () =>
  apiFetch<Transaction[]>("/listTransactions");

export const addTransaction = (transaction: Transaction) =>
  apiFetch<Transaction>("/addTransaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });

export async function uploadStatement(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${import.meta.env.VITE_PARSER_URL}/parse`,
    {
      method: "POST",
      body: formData,
    }
  );

  return response.json();
}

export async function parseStatement(file: File) {

  const formData = new FormData();

  formData.append("file", file);


  const response = await fetch(
    `${PARSER_URL}/parse`,
    {
      method: "POST",
      body: formData,
    }
  );


  if (!response.ok) {
    throw new Error("Parser failed");
  }


  return response.json();

}