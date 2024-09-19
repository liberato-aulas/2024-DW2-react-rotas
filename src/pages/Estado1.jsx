import { useState } from "react";
import { Pagina } from "../components/Pagina";

export function Estado1() {
  const [num, setNum] = useState(0);
  // const estado= useState(0)
  // const num = estado[0]
  // const setNum = estado[1]

  const [texto, setTexto] = useState("olá, seja bem vindo");

  function incrementar() {
    setNum(num + 1);
  }

  return (
    <Pagina titulo="Estado 1" subtitulo="Conceito de Estado no React">
      <div>
        <div>{num}</div>
        <button onClick={incrementar}>Incrementar</button>
      </div>
      <div>
        <input
          className="bg-zinc-400"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button
          className="bg-zinc-600 p-4 rounded-md"
          onClick={() => setTexto("")}
        >
          ok
        </button>
        <span>{texto}</span>
      </div>
    </Pagina>
  );
}
