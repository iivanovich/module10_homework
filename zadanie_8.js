


const fruits = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry",    "blue"]
  
  ]);

const key = [...fruits.keys()];
const arr = [...fruits.values()];

for (let i = 0; i < key.length; i++){
    console.log("Ключ - " + key[i] + ", значение - " + arr[i]);
}

