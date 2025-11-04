"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "../container/uttils/auth.js"


export default function PrivateRoute() {
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const user = await getUser();
      if (user) router.replace("/login");
      else router.replace("/home");
    };
    check();
  }, [router]);

  return <div className="text-center p-10">Redirecting...</div>;
}