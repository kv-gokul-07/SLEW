"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function PrivateRoute({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("../slew/Login"); // redirect if no token
    } 
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
}