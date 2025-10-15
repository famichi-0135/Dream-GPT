import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/(supabase)/logout-button";
import { createClient } from "@/utils/supabase/client";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex h-svh w-full items-centepr justify-center gap-2">
      <p>
        Hello <span>{data.claims.email}</span>
      </p>
      <LogoutButton />
    </div>
  );
}
