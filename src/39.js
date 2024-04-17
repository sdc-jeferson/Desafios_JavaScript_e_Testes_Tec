function tempPersonalized(seconds, callback) {
  console.log("Wait for it...");
  setTimeout(callback, seconds * 1000);
}

tempPersonalized(2, () => {
  console.log("It's done!");
});
