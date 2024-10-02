import { useState } from "react"
import { FilhoDireta } from "./FilhoDireta"

export function PaiDireta() {

    const [nome, setNome] = useState("")

    return (
        <div
      className={`
            w-full flex flex-col items-center p-7 rounded-md
            bg-blue-500 text-white gap-4
        `}
    >
      <div className="flex gap-3">
        <button 
            className="botao"
            onClick={() => setNome("João")}
        >
            João
        </button>
        <button 
            className="botao" 
            onClick={() => setNome("Maria")}
        >
            Maria
        </button>
        
        <button 
            className="botao" 
            onClick={() => setNome("José")}
        >
            José
        </button>
        
      </div>
      {/* <span className="text-4xl p-5">{nome}</span> */}
      
      {/* Comunicação direta com o filho */}
      <FilhoDireta texto={nome}/>

        

    </div>
    )
}