"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";

const AgregarGasto = () => {
  const { register, handleSubmit } = useForm();

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1>Agregar gasto</h1>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="border-4 border-yellow-300 flex flex-col bg-slate-700 gap-4 text-black"
      >
        <select defaultValue={"Gasto"} {...register("itemType")}>
          <option value={"Gasto"}>Gasto</option>
          <option value={"Reintegro"}>Reintegro</option>
          <option value={"Ajuste"}>Ajuste</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          {...register("description")}
        />
        <input
          type="date"
          name="date"
          placeholder="Seleccione fecha"
          {...register("date")}
        />
        <input
          type="number"
          name="total"
          placeholder="Ingrese monto"
          {...register("total")}
        />
        <input
          type="number"
          name="installments"
          placeholder="Ingrese cuotas"
          {...register("installments")}
        />
        <Button type="submit">Agregar item</Button>
      </form>
    </main>
  );
};

export default AgregarGasto;
