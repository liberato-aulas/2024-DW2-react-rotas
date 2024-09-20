import { IconMinus, IconPlus } from "@tabler/icons-react";
import { Pagina } from "../../components/Pagina";

export function Contador() {

  return (
    <Pagina titulo="Contador" subtitulo="Conceito de Estado no React">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        
      <div className="text-6xl font-black">0</div>
      <div className="flex gap-5">
        <button className="rounded-full p-4 bg-blue-600"><IconMinus size={30}/></button>
        <button className="rounded-full p-4 bg-blue-800"><IconPlus size={30}/></button>
      </div>
      
      <div className="flex items-center gap-5">
        <button className="rounded-full p-2 bg-purple-600"><IconMinus /></button>
        <span>0</span>
        <button className="rounded-full p-2 bg-purple-800"><IconPlus /></button>
      </div>
      </div>
    </Pagina>
  )
}