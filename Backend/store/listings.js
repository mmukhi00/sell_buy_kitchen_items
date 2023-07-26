const listings = [
  {
    id: 201,
    title: "Dishes on sale",
    images: [{ fileName: "becca-tapert" }],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 3,
    title: "Bowls in a great condition",
    images: [{ fileName: "brooke-lark" }],
    categoryId: 1,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 1,
    title: "Good Quality Spatulas ",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "Spatula" },
      { fileName: "spatulas" },
      { fileName: "spa" }
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 2,
    title: "Kitchen Dishes",
    images: [{ fileName: "sap" }],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 102,
    title: "Pan in good condition",
    images: [{ fileName: "spatulas" }],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 101,
    title: "Ancient kitchen Items",
    images: [{ fileName: "auth_kitchen" }],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 4,
    title: "Wood Chooper - Delivery available",
    description: "No rips no stains no odors",
    images: [{ fileName: "Chooper" }],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 6,
    title: "Grandmom's Spices Grinder",
    images: [{ fileName: "Spices_Grinder" }],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  }
];

const addListing = listing => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = id => listings.find(listing => listing.id === id);

const filterListings = predicate => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings
};
