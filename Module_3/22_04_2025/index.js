const guests = [
  {
    name: "Emily",
    country: "Canada",
    nights: 5,
    totalPaid: 1200,
    isVerified: true,
  },
  {
    name: "Raj",
    country: "India",
    nights: 2,
    totalPaid: 450,
    isVerified: true,
  },
  {
    name: "Sophie",
    country: "France",
    nights: 3,
    totalPaid: 800,
    isVerified: false,
  },
  {
    name: "Liam",
    country: "Canada",
    nights: 4,
    totalPaid: 950,
    isVerified: true,
  },
  {
    name: "Noah",
    country: "USA",
    nights: 1,
    totalPaid: 300,
    isVerified: false,
  },
  { name: "Ava", country: "Canada", nights: 0, totalPaid: 0, isVerified: true },
  {
    name: "Mia",
    country: "Australia",
    nights: 4,
    totalPaid: 1300,
    isVerified: false,
  },
  {
    name: "Leo",
    country: "Germany",
    nights: 5,
    totalPaid: 1000,
    isVerified: true,
  },
  {
    name: "Chloe",
    country: "Brazil",
    nights: 6,
    totalPaid: 1100,
    isVerified: false,
  },
  {
    name: "Daniel",
    country: "Spain",
    nights: 3,
    totalPaid: 600,
    isVerified: false,
  },
  {
    name: "Nina",
    country: "Canada",
    nights: 4,
    totalPaid: 1500,
    isVerified: false,
  },
  {
    name: "Oscar",
    country: "Canada",
    nights: 3,
    totalPaid: 950,
    isVerified: true,
  },
  {
    name: "Jessica",
    country: "Canada",
    nights: 5,
    totalPaid: 1200,
    isVerified: true,
  },
  {
    name: "Isabella",
    country: "Italy",
    nights: 3,
    totalPaid: 2000,
    isVerified: false,
  },
  {
    name: "Ethan",
    country: "USA",
    nights: 0,
    totalPaid: 200,
    isVerified: false,
  },
  {
    name: "Grace",
    country: "UK",
    nights: 7,
    totalPaid: 1800,
    isVerified: true,
  },
  {
    name: "Yuki",
    country: "Japan",
    nights: 3,
    totalPaid: 1000,
    isVerified: false,
  },
];

// Find the highest-paying verified guest from Canada.

// Step 1: Find the guests from Canada
let canadianGuests = guests.filter(
  (guest) => guest.country === "Canada" && guest.isVerified
);

// Step 2: Sort the Canadian guests by their totalPaid
let sortcanadianGuestsByTotalPaid = canadianGuests.sort(
  (a, b) => b.totalPaid - a.totalPaid
);

// Step 3: Get the highest-paying verified guest => it will be the first element in the sorted list
let highestPayingVerifiedGuest = sortcanadianGuestsByTotalPaid[0];

// We will get the higest paying value
let higestPayingValue = highestPayingVerifiedGuest.totalPaid;

// Step 4: From the highest payment, we will get the guest that having the same payment
let result = sortcanadianGuestsByTotalPaid.filter(
  (guest) => guest.totalPaid === higestPayingValue
);

const highestPayingVerifiedFromCanada = guests
  .filter((g) => g.country === "Canada" && g.isVerified)
  .sort((a, b) => b.totalPaid - a.totalPaid)[0];

/*
2. Filter guests who:
Stayed at least 3 nights, AND
Paid more than $500, AND
Were not verified
*/
// Step 1: Find all the guests Staying at least 3 nights
let guestsStayingAtLeast3Nights = guests.filter(guest => guest.nights >= 3);

// Step 2: From the result in the step 1, find the guests who paid more than $500
let guestsPaidMoreThan500 = guestsStayingAtLeast3Nights.filter(
  (guest) => guest.totalPaid >= 500
);

// Step 3: From the result in the step 2, find the guests were not verified
let guestsNotVerified = guestsPaidMoreThan500.filter(
  (guest) => !guest.isVerified
);


// Question 3. Map to show: name, nights, guestType based on total Paid 
// Premium Guest vs Regular Guest

let guestsWithGuestType = guests.map(guest => ({
  name: guest.name,
  nights: guest.nights,
  guestType: guest.totalPaid > 1000 ? "Premium" : "Regular"
}));


// Create a new object based on the original object that we have 

/**
 * 1. name
 * 2. nights
 * 3. guestType (normal or premium)
 */

// Sudo code
// go through each element and we create a new object
// we have to include the if else condition to check if the guest is premium or not (1000)

let result3 = [];
guests.forEach(guest => {
  if (guest.totalPaid > 1000) {
    result3.push({
      name: guest.name,
      nights: guest.nights,
      guestType: "Premium"
    })
  } else {
    result3.push({
      name: guest.name,
      nights: guest.nights,
      guestType: "Regular"
    })
  }
})

// Question 4: Sort guest by nights , if they have the same nights => sort by totalPaid (DESC)
let sortedGuests = guests.sort((a, b) => {
  if (b.nights !== a.nights) {
    return b.nights - a.nights;
  }
  return b.totalPaid - a.totalPaid;
})
