import React from "react";
import PropertyCard from "./PropertyCard";

const props = {
  title: "2 bedroom period property",
  type: "flat",
  bathrooms: 2,
  bedrooms: 2,
  price: 2500000,
  city: "Leeds",
  email: "j.d.Smith@gmail.com",
};

const Properties = () => {
  return (
    <div>
      <PropertyCard {...props} />
    </div>
  );
};

export default Properties;
