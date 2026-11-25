export type Audience = "owner" | "trainer";

export const parts = [
  "Gym listings",
  "Trainer verification",
  "Approvals",
  "Booking",
  "Deposits & payment",
  "Reviews",
];

export const copy = {
  owner: {
    eyebrow: "For gym owners",
    h1a: "Your floor is empty at 2pm.",
    h1b: "It shouldn’t be.",
    sub: "Rent your quiet hours to certified, insured independent trainers. You set the rate and you approve who trains. Here’s the whole platform in 90 seconds.",
    stepsTitle: "Turn dead time into a second income stream",
    steps: [
      { n: "01", h: "List your floor", p: "Add your gym, the hours it’s quiet and the rate you want to charge." },
      { n: "02", h: "Approve your trainers", p: "Certified, insured trainers apply to use your space. You accept or decline each one." },
      { n: "03", h: "Get paid", p: "Booking, deposits and payment all happen on the platform. Their clients walk past your desk on the way in." },
    ],
    quote: "Anywhere Clubs lets me fill the hours my floor was sitting empty, with trainers I have approved myself.",
    who: "Don Murphy",
    role: "Owner, Gold’s Gym Newburgh & Middletown NY",
    closer: "See how it would work on your floor.",
  },
  trainer: {
    eyebrow: "For personal trainers",
    h1a: "Stop paying rent on one gym.",
    h1b: "Get verified at all of them.",
    sub: "Get approved at gyms across your city and coach clients wherever suits them that week. Profile, booking and deposits in one place. Here’s how it works in 90 seconds.",
    stepsTitle: "One profile. Every gym that fits.",
    steps: [
      { n: "01", h: "Build your profile", p: "Get verified once. Your profile does the finding, the booking and the deposit." },
      { n: "02", h: "Get approved at gyms", p: "Apply to gyms near you. Owners approve who trains on their floor." },
      { n: "03", h: "Coach anywhere", p: "Book floor time when it suits your clients and keep your own rate." },
    ],
    quote: "Since using the Anywhere Clubs platform, I’m making about 50% more than I was, and I’m actually working less now.",
    who: "Danielle Munoz",
    role: "Independent personal trainer",
    closer: "Ready to coach at gyms near you?",
  },
} as const;
