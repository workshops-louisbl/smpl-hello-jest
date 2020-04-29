import formatList from "./listFormatter";

test("format a list", () => {
  const result = formatList([
    {key: "key1", value: "value1"},
    {key: "key3", value: "value3"},
    {key: "key4", value: "value4"},
    {key: "key5", value: "value5"},
  ])

  expect(result).toMatchSnapshot();
})
