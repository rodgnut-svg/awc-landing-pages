import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Get verified at gyms near you | Anywhere Clubs",
};

export default function TrainersPage() {
  return <LandingPage audience="trainer" />;
}
