"use client";

import { signOut } from "@/app/(auth)/auth/login/actions";

export async function LogoutBtn() {
  return (
    <button onClick={()=>  signOut()}>
      <div className="px-10 h-full bg-black mr-0 flex items-center font-bold text-white hover:text-white hover:bg-indigo-600 transition">
        logout
      </div>
    </button>
  );
}
