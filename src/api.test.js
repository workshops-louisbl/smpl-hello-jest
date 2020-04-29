import api from "./api";

test("retrieve user from api", async () => {
  const data = await api.getUser();

  expect(data).toMatchSnapshot();
})
