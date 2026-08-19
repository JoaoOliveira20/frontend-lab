import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  function removeCount() {
    if (count === 0) {
      return alert("O valor já está em 0");
    }

    setCount(count - 1);
  }

  function resetCount(){
    setCount(0)
  }

  return (
    <div>
      <p>{count}</p>

      <button onClick={removeCount}>-1</button>
      <button onClick={addCount}>+1</button>
      <button onClick={resetCount}>resetar contagem</button>
    </div>
  );
}
