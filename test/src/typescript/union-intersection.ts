
// Union types (OR)
type Status = "pending" | "approved" | "rejected";

function setStatus(status: Status): void {
  console.log(`Status set to: ${status}`);
}

setStatus("approved");
// setStatus("completed"); // Error!

type StringOrNumber = string | number;

function printId(id: StringOrNumber): void {
  if (typeof id === "string") {
    console.log(`ID (string): ${id.toUpperCase()}`);
  } else {
    console.log(`ID (number): ${id}`);
  }
}


// Intersection types (AND)

interface HasTitle {
  title: string;
}

interface HasPrice {
  price: number;
}

type ProductCard = HasTitle & HasPrice;

const product: ProductCard = {
  title: "Laptop",
  price: 50000
};


