import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

    return (
        <div>

        <button onClick={() => setContador(contador + 1)}>
            Contador "+"
        </button>
        <button onClick={() => setContador(contador - 1)}>
            Contador "-"
        </button>
        <p>Contador: {contador}</p>
        </div>
    );


}