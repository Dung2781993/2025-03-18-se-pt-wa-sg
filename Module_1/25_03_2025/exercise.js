const stories = [
  {
    title: "The Enchanted Forest",
    author: "Ella Moon",
    characters: ["Princess Lily", "The Wise Owl", "Evil Sorcerer"],
    setting: "A mystical forest with glowing flowers and talking animals",
    plot: "Princess Lily embarks on a quest to find the magical Crystal of Light to save her kingdom from the Evil Sorcerer's dark spell. Guided by the Wise Owl, she must overcome enchanted obstacles and prove her pure heart.",
    moral: "Bravery and kindness can overcome even the darkest of evils."
  },
  {
    title: "The Dragon and the Pebble",
    author: "Tommy Brave",
    characters: ["Timmy", "The Gentle Dragon", "Wicked King"],
    setting: "A small village at the edge of Dragon Mountain",
    plot: "Timmy, a young shepherd, befriends a gentle dragon that has been wrongly accused of terrorizing the village. Together, they uncover the Wicked King's plot to blame the dragon to gain power.",
    moral: "True friendship and honesty can break even the strongest lies."
  },
  {
    title: "The Golden Feather",
    author: "Rosa Fields",
    characters: ["Rose", "Talking Sparrow", "The Greedy Merchant"],
    setting: "A bustling marketplace in a medieval town",
    plot: "Rose finds a magical golden feather that grants wishes. When the Greedy Merchant tries to steal it, Rose learns that the feather only works when used with a pure heart and selfless intentions.",
    moral: "Greed and selfishness never lead to true happiness."
  },
  {
    title: "The Secret of the Crystal Lake",
    author: "Jasper Stone",
    characters: ["Eli", "Mermaid Mira", "The Water Spirit"],
    setting: "A hidden lake surrounded by misty mountains",
    plot: "Eli, a curious boy, discovers that the lake is guarded by a mermaid named Mira, who protects the ancient Water Spirit. When the lake's magic begins to fade, Eli and Mira must find the legendary Moonflower to restore balance.",
    moral: "Respect nature and cherish its secrets."
  }
];

function checkOddNumber(number) {
    if (number % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
}

function totalSum (a, b) {
  return a + b;
}

function generateRandomStories() {
  let randomNumber = Math.random();
  return stories[randomNumber];
}