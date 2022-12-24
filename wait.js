(async () => {
  const res = await fetch(`https://api.github.com/users/jameshibbard`);
  const json = await res.json();
  console.log(json.public_repos);
  console.log("Hello!");
})();

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

console.log("Hello");
sleep(2000);
console.log("World!");