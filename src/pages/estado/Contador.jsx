import { IconMinus, IconPlus } from "@tabler/icons-react";
import { Pagina } from "../../components/Pagina";
import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <Pagina titulo="Contador" subtitulo="Conceito de Estado no React">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <div className="text-6xl font-black">{contador}</div>
        <div className="flex gap-5">
          <button
            className="rounded-full p-4 bg-blue-600"
            onClick={() => setContador(contador - step)}
          >
            <IconMinus size={30} />
          </button>
          <button
            className="rounded-full p-4 bg-blue-800"
            onClick={() => setContador(contador + step)}
          >
            <IconPlus size={30} />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button
            className="rounded-full p-2 bg-purple-600"
            onClick={() => setStep(step - 1)}
          >
            <IconMinus />
          </button>

          <span>{step}</span>

          <button
            className="rounded-full p-2 bg-purple-800"
            onClick={() => setStep(step + 1)}
          >
            <IconPlus />
          </button>
        </div>
      </div>
    </Pagina>
  );
}
