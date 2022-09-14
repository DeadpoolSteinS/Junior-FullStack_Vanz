const type = {
  IMPORT: "IMPORT",
  LOCAL: "LOCAL",
};

class IFruit {
  constructor(id, name, type, stock) {
    this.fruitId = id;
    this.fruitName = name;
    this.fruitType = type;
    this.stock = stock;
  }
}

// menentukan apakah di dalam array sudah ada key
// disini FRUIT == Fruit == fruit (convert to lowercase)
function fruitFound(arrays, key) {
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].toLowerCase() == key.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// mengambil nama fruit yang unik (tidak sama)
function getFruitsName(fruits) {
  let result = [];

  fruits.forEach((fruit) => {
    if (!fruitFound(result, fruit.fruitName)) {
      result.push(fruit.fruitName);
    }
  });

  return result;
}

// membagi fruit berdasarkan wadah
function getFruitByWadah(fruits) {
  let wadah = [[], []];

  fruits.forEach((fruit) => {
    switch (fruit.fruitType) {
      case type.IMPORT:
        wadah[0].push(fruit);
        break;
      case type.LOCAL:
        wadah[1].push(fruit);
        break;
      default:
        break;
    }
  });

  return wadah;
}

// mengembalikan total wadah yang dibutuhkan
function getLength(wadah) {
  let size = 0;

  for (let i = 0; i < wadah.length; i++) {
    if (wadah[i].length > 0) size++;
  }

  return size;
}

let fruits = [
  new IFruit(1, "Apel", type.IMPORT, 10),
  new IFruit(2, "Kurma", type.IMPORT, 20),
  new IFruit(3, "Apel", type.IMPORT, 50),
  new IFruit(4, "Manggis", type.LOCAL, 100),
  new IFruit(5, "Jeruk Bali", type.LOCAL, 10),
  new IFruit(5, "KURMA", type.IMPORT, 20),
  new IFruit(5, "Salak", type.LOCAL, 150),
];

// nomor 1
let buahAndi = getFruitsName(fruits);
console.log("Buah yang dimiliki andi:");
console.log(buahAndi);
console.log();

// nomor 2
let wadahAndi = getFruitByWadah(fruits);
console.log("Jumlah wadah yang dibutuhkan: " + getLength(wadahAndi));

if (wadahAndi[0].length > 0) {
  console.log("Buah yang ada di wadah Import:");
  console.log(getFruitsName(wadahAndi[0]));
}
if (wadahAndi[1].length > 0) {
  console.log("Buah yang ada di wadah Local:");
  console.log(getFruitsName(wadahAndi[1]));
}
console.log();

// nomor 3
if (wadahAndi[0].length > 0) {
  console.log("Total stock yang ada di wadah Import: " + wadahAndi[0].length);
}
if (wadahAndi[1].length > 0) {
  console.log("Total stock yang ada di wadah Import: " + wadahAndi[1].length);
}

// nomor 4
// Tidak ada komentar dari saya, penjelasan dari soal sudah cukup jelas
