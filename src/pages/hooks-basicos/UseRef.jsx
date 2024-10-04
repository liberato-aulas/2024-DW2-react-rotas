import { useState } from "react";
import { Pagina } from "../../components/Pagina";
import { useRef } from "react";

export function UseRef() {

  const [estado, setEstado] = useState(0)
  const referencia = useRef(0)
  
  const refInput = useRef()
  const refTexto = useRef()
  

  function incrementaEstado(){
    setEstado(estado + 1)
  }

  function incrementaReferencia() {
    // referencia.current = referencia.current +1
    referencia.current += 1
  }

  return (
    <Pagina 
        titulo="UseRef"
        subtitulo="Hooks Básicos"
      >

        <div className="flex flex-col">

          <div>{`REFERÊNCIA: ${referencia.current} | ESTADO: ${estado}  `}</div>
          
          <div>
            <button className="bg-purple-400 px-3 py-2 rounded-md mr-2"
              onClick={incrementaReferencia}
            >
              Ref +
              </button>
            <button className="bg-blue-400 px-3 py-2 rounded-md"
              onClick={incrementaEstado}
            >
              Estado +
              </button>
          </div>

        <div className="mt-6">
          <h2>useRef com elemento</h2>
          
          <input ref={refInput} type="text" className="text-black"/>
          
          <button 
            className="bg-purple-400 px-3 py-2 rounded-md ml-2"
            onClick={() => refTexto.current.innerHTML = refInput.current.value}
          >
            ok
          </button>

          <p 
            ref={refTexto}
            className="text-2xl">  
          </p>
        </div>
      </div>


    </Pagina>
  )
}