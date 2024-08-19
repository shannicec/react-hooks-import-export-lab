import { username, city, image } from "../data/user"; // Ensure this path is correct

test("username, city, and image are all exported", () => {
  console.log("Username in test:", username); // Log actual values for debugging
  console.log("City in test:", city);
  console.log("Image in test:", image);

  // Check the values against expected results
  expect(username).toBe("Liza");
  expect(city).toBe("New York");
  expect(image).toBe("https://i.imgur.com/mV8PQxj.gif");
});
