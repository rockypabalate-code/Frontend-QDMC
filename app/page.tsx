"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  authStorageKeys,
  getPostLoginRoute,
  getStoredUser,
} from "@/lib/auth/session-storage";
import { appRoutes } from "@/lib/routes";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(authStorageKeys.token);
    const user = getStoredUser();

    if (token && user) {
      router.replace(getPostLoginRoute(user.role));
      return;
    }

    router.replace(appRoutes.login);
  }, [router]);

  return null;
}