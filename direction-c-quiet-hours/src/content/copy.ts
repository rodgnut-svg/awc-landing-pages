export type Audience = "owner" | "trainer";

export const copy = {
  owner: {
    h1a: "Your floor is empty at 2pm.",
    h1b: "It shouldn’t be.",
    sub: "Rent your quiet hours to certified, insured independent trainers and turn dead time into a second income stream. Here’s the whole platform in 90 seconds.",
    dayTitle: "The hours you’re not using are the hours we fill",
    quietLabel: "Quiet hours → trainer sessions",
    features: [
      { h: "Your rate", p: "You decide what each hour costs." },
      { h: "Your approval", p: "Trainers apply. You accept or decline each one." },
      { h: "Certified and insured", p: "Only certified, insured trainers can train on your floor." },
      { h: "Booking and payment", p: "Deposits and payment are handled on the platform." },
    ],
    quote: "Anywhere Clubs lets me fill the hours my floor was sitting empty, with trainers I have approved myself.",
    who: "Don Murphy",
    role: "Owner, Gold’s Gym Newburgh & Middletown NY",
  },
  trainer: {
    h1a: "Gyms sit empty at 2pm.",
    h1b: "Your clients don’t have to.",
    sub: "Get verified once and book quiet-hour floor time at gyms across your city. Coach wherever suits your clients that week. Here’s the whole platform in 90 seconds.",
    dayTitle: "Quiet hours are your hours",
    quietLabel: "Quiet hours → your sessions",
    features: [
      { h: "One profile", p: "Get verified once and apply to many gyms." },
      { h: "Owners approve", p: "Each gym decides who trains on its floor." },
      { h: "Find and book", p: "Your profile does the finding, the booking and the deposit." },
      { h: "Your clients, your rate", p: "Coach wherever suits them that week." },
    ],
    quote: "Since using the Anywhere Clubs platform, I’m making about 50% more than I was, and I’m actually working less now.",
    who: "Danielle Munoz",
    role: "Independent personal trainer",
  },
} as const;

