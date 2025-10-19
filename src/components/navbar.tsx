import { signOut } from "@/app/(auth)/auth/login/actions";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { LogoutBtn } from "./ui/logoutButton";
import Image from "next/image";

export async function Navbar() {
  try {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getSession();
    console.log(data);
    if (!data || error) {
      return (
        <header>
          <div className="flex items-center justify-between pl-4 border-b-gray-300 border-1 h-20">
            <Link href="/dashboard" className="h-full flex items-center">
              <h1 className="text-3xl font-bold px-4 h-16 flex items-center hover:bg-gray-50 rounded-lg transition">
                Dream-GPT
              </h1>
            </Link>
            <div className="flex pl-4  h-full">
              <Link href="/auth/login">
                <div className="px-10 h-full bg-black mr-0 flex items-center font-bold text-white hover:text-white hover:bg-indigo-600 transition">
                  login
                </div>
              </Link>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div className="flex items-center justify-between pl-4 border-b-gray-300 border-1 h-20">
            <Link
              href="/dashboard"
              className="h-full flex items-center isolate"
            >
              <h1 className="text-3xl font-bold px-4 h-16 flex items-center hover:bg-gray-50 rounded-lg transition">
                Dream-GPT
              </h1>
            </Link>
            <div className="flex pl-4  h-full">
              <button onClick={signOut}>
                <div className="px-10 h-full bg-black mr-0 flex items-center font-bold text-white hover:text-white hover:bg-indigo-600 transition">
                  logout
                </div>
              </button>
            </div>
          </div>
        </header>
      );
    }
  } catch (error) {
    console.error("Error in Navbar:", error);
    return (
      <header>
        <div>Error loading Navbar</div>
      </header>
    );
  }
}
