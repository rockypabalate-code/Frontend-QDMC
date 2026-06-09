import { redirect } from "next/navigation";
import { appRoutes } from "@/lib/routes";

export default function Home() {
  redirect(appRoutes.login);
}
