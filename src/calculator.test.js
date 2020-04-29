import calculator from "./calculator";

test("adds 2 and 3 equal 5", () => {
  // arrange
  const expected = 5;
  const operandA = 2;
  const operandB = 3;

  // act
  const result = calculator.add(operandA, operandB);

  // assert
  expect(result).toBe(expected);
})

test("subtracts 5 from 25 equal 20", () => {
  const result = calculator.subtract(25, 5);

  expect(result).toBe(20);
})
