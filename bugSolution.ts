function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: both arguments are numbers

//Alternative solution using type assertion:
// let result = add(Number("1"), 2); //Using type assertion is less safe, use it carefully.