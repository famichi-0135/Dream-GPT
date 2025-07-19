import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-col">
      <div>
        <div className="text-4xl font-bold">
          LANDING PAGE
        </div>
        <Link href="/dashboard">
          <div className="text-4xl font-bold">
            DASHBOARD PAGE
          </div>
        </Link>
      </div>
    </div>
  );
}
