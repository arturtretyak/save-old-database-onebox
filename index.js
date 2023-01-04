const genTable = document.querySelector("tbody");
const table = genTable.querySelectorAll(".js-live-search-item"); //some table items

const arrayNew = [];

for (let index = 0; index < table.length; index++) {
  const numberId = table[index]
    .getElementsByTagName("td")[1]
    .querySelector("a")
    .getAttribute("href")
    .replaceAll("/", "");

  const oldDelivery = table[index]
    .getElementsByTagName("td")[4]
    .textContent.replaceAll(" ", "")
    .replaceAll("\n", "");

  if (oldDelivery) {
    arrayNew.push([numberId, oldDelivery]);
  }
}

console.table(arrayNew);
