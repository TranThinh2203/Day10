const numbers = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3, 2];

let uniqueNumbers = [];
numbers.forEach(num => {
  if (!uniqueNumbers.some(n => n === num)) {
    uniqueNumbers.push(num);
  }
});

uniqueNumbers.forEach(num => {
  let count = numbers.filter(n => n === num).length;
  console.log(`Số ${num} xuất hiện ${count} lần`);
});

const found = uniqueNumbers.find(num => numbers.filter(n => n === num).length === 4);
console.log("Số xuất hiện đúng 4 lần đầu tiên là:", found);
