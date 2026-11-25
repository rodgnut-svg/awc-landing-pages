export type Audience = "owner" | "trainer";

export const parts = [
  "Gym listings",
  "Trainer verification",
  "Approvals",
  "Booking",
  "Deposits & payment",
  "Reviews",
];

export const ownerBullets = [
  "List your floor and the hours it’s quiet",
  "Set your own rate",
  "Approve every trainer yourself",
];

export const trainerBullets = [
  "Get verified once, apply to many gyms",
  "Find, book and pay a deposit in one place",
  "Coach where it suits your clients that week",
];

export const copy = {
  owner: {
    h1a: "Rent your gym’s quiet hours",
    h1b: "to trainers.",
    sub: "Independent, certified and insured trainers book your off-peak floor time. You set the rate and you approve every trainer. Here’s the whole platform in 90 seconds.",
    callTitle: "On the call",
    callPoints: [
      "See the platform running live",
      "Look at which of your hours could be rented out",
      "Agree the simplest way to get your floor listed",
    ],
  },
  trainer: {
    h1a: "Stop paying rent on one gym.",
    h1b: "Get verified at all of them.",
    sub: "Get approved at gyms across your city and coach clients wherever suits them that week. Here’s the whole platform in 90 seconds.",
    callTitle: "What happens next",
    callPoints: [
      "Create your trainer profile",
      "Get verified so gym owners can approve you",
      "Apply to gyms near you and start booking",
    ],
  },
} as const;
