import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Rent your gym’s quiet hours | Anywhere Clubs",
};

export default function GymOwnersPage() {
  return <LandingPage audience="owner" />;
}
