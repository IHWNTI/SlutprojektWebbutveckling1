import { buses } from "../data/buses";

export function getBuses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(buses);
    }, 500); // simulerar nätverk
  });
}