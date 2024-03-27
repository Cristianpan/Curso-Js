const cliente = {
  nombre: "Cristian",
  balance: 500,
  tipo: "Premium",
};

describe("Testing al cliente", () => {
  test("Es Juan Pablo", () => {
    expect(cliente).toMatchSnapshot(); 
  });
});
