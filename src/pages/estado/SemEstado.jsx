import { Pagina } from "../../components/Pagina";

export function SemEstado() {
  
  let numero = 0

  function incrementar() {
    numero += 1
    console.log(numero)
  }

  return (
    <Pagina titulo="Sem Estado" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4">

        <span className="text-2xl">
          {numero}
        </span>
        <button 
          className="bg-purple-400 rounded-md p-2"
          onClick={incrementar}
        >
          Incrementar
        </button>

      </div>
    </Pagina>
  );
}
