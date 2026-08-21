import { useState } from "react";

type User = {
  name: string;
  email: string;
  age: number;
};

export default function Form() {
  const [user, setUser] = useState<User | null>(null);

  function addUser(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const age = Number(formData.get("age"));

    if (typeof name !== "string") {
      return;
    }

    if (typeof email !== "string") {
      return;
    }

    if (age < 0) {
      return;
    }

    const newUser = {
      name,
      email,
      age,
    };

    setUser(newUser);
  }

  return (
    <div>
      <h1>Formulario simples</h1>
      <form action={addUser}>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <br />
        <label htmlFor="idade">Idade:</label>
        <input type="number" name="age" />
        <br />
        <button type="submit">Enviar</button>
      </form>

      {user && (
        <div>
          <h2>Dados enviados</h2>

          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      )}
    </div>
  );
}
