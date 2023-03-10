export const data = [
  {
    id: "1",
    product: "Cyberpunk 2077",
    category: "xbox",
    price: 36.49,
    images: ["https://imgur.com/3CF1UhY.png"],
  },
  {
    id: "2",
    product: "Grand Theft Auto 5",
    category: "xbox",
    price: 21.99,
    images: ["https://imgur.com/BqNWnDB.png"],
  },
  {
    id: "3",
    product: "Minecraft",
    category: "xbox",
    price: 49.99,
    images: ["https://imgur.com/LXnUnd2.png"],
  },
  {
    id: "4",
    product: "PUBG",
    category: "xbox",
    price: 5.09,
    images: ["https://imgur.com/Ondg3Jn.png"],
  },
  {
    id: "5",
    product: "FIFA 21",
    category: "xbox",
    price: 17.49,
    images: ["https://imgur.com/AzT9YMP.png"],
  },
  {
    id: "6",
    product: "Battlefield 5",
    category: "xbox",
    price: 29.35,
    images: ["https://imgur.com/X3MQNVs.png"],
  },
  {
    id: "7",
    product: "Watch Dogs 2",
    category: "xbox",
    price: 18.99,
    images: ["https://imgur.com/v3lqCEb.png"],
  },
  {
    id: "8",
    product: "Fortnite",
    category: "ps5",
    price: 29.99,
    images: ["https://imgur.com/3lTxDpl.png"],
  },
  {
    id: "9",
    product: "Call of Duty: Black Ops",
    category: "ps5",
    price: 69.99,
    images: ["https://imgur.com/4GvUw3G.png"],
  },
  {
    id: "10",
    product: "NBA2K21 Next Generation",
    category: "ps5",
    price: 69.99,
    images: ["https://imgur.com/Mxjvkws.png"],
  },
  {
    id: "11",
    product: "Spider-Man Miles Morales",
    category: "ps5",
    price: 29.99,
    images: ["https://imgur.com/guV5cUF.png"],
  },
  {
    id: "12",
    product: "Resident Evil Village",
    category: "ps5",
    price: 59.99,
    images: ["https://imgur.com/1CxJz8E.png"],
  },
  {
    id: "13",
    product: "Assassin's Creed Valhalla",
    category: "ps5",
    price: 59.99,
    images: ["https://imgur.com/xJD093X.png"],
  },
  {
    id: "14",
    product: "Animal Crossing",
    category: "switch",
    price: 59.99,
    images: ["https://imgur.com/1SVaEBk.png"],
  },
  {
    id: "15",
    product: "The Legend of Zelda",
    category: "switch",
    price: 59.99,
    images: ["https://imgur.com/IX5eunc.png"],
  },
  {
    id: "16",
    product: "Stardew Valley",
    category: "switch",
    price: 14.99,
    images: ["https://imgur.com/aL3nj5t.png"],
  },
  {
    id: "17",
    product: "Mario Golf Super Rush",
    category: "switch",
    price: 59.99,
    images: ["https://imgur.com/CPxlyEg.png"],
  },
  {
    id: "18",
    product: "Super Smash Bros",
    category: "switch",
    price: 59.99,
    images: ["https://imgur.com/ZuLatzs.png"],
  },
  {
    id: "19",
    product: "Grand Theft Auto 5",
    category: "pc",
    price: 29.99,
    images: ["https://imgur.com/9LRil4N.png"],
  },
  {
    id: "20",
    product: "Battlefield V",
    category: "pc",
    price: 39.99,
    images: ["https://imgur.com/T3v629h.png"],
  },
  {
    id: "21",
    product: "Red Dead Redemption 2",
    category: "pc",
    price: 39.99,
    images: ["https://imgur.com/aLObdQK.png"],
  },
  {
    id: "22",
    product: "Flight Simulator 2020",
    category: "pc",
    price: 59.99,
    images: ["https://imgur.com/2IeocI8.png"],
  },
  {
    id: "23",
    product: "Forza Horizon 4",
    category: "pc",
    price: 59.99,
    images: ["https://imgur.com/gLQsp6N.png"],
  },
  {
    id: "24",
    product: "Minecraft",
    category: "pc",
    price: 29.99,
    images: ["https://imgur.com/qm1gaGD.png"],
  },
  {
    id: "25",
    product: "Rainbow Six Seige",
    category: "pc",
    price: 7.99,
    images: ["https://imgur.com/JIgzykM.png"],
  },
  {
    id: "26",
    product: "Xbox Controller",
    category: "accessories",
    price: 59,
    images: ["https://imgur.com/a964vBm.png"],
  },
  {
    id: "27",
    product: "Xbox Controller",
    category: "accessories",
    price: 69,
    images: ["https://imgur.com/ntrEPb1.png"],
  },
  {
    id: "28",
    product: "Gaming Keyboard",
    category: "accessories",
    price: 49.99,
    images: ["https://imgur.com/VMe3WBk.png"],
  },
  {
    id: "29",
    product: "Gaming Mouse",
    category: "accessories",
    price: 29.99,
    images: [
      "https://imgur.com/wvpHOCm.png",
      "https://imgur.com/wvpHOCm.png",
      "https://imgur.com/wvpHOCm.png",
    ],
  },
  {
    id: "30",
    product: "Switch Joy-Con",
    category: "accessories",
    price: 13.99,
    images: ["https://imgur.com/faQ0IXH.png"],
  },
];

export const parser = (id) => {
  return data.filter((x) => x.id == id)[0];
};
