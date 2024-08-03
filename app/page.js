"use client";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div>
        <Link href={"/agregar"}>
          <Button>Agregar item</Button>
        </Link>
      </div>
    </main>
  );
}
