// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Generic with arrays
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let firstNumber = getFirstElement([1, 2, 3]); // number
let firstName = getFirstElement(["Masud", "Sajid", "Hasan"]); // string

// Generic interfaces
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 26,
};

// Generic classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");

