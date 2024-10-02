import { Pagina } from "../../components/Pagina";
import { PaiDireta } from "../../components/comunicacao/direta/PaiDireta";

export function ComunicacaoDireta() {

    return (
        <Pagina 
            titulo="Comunicação Direta"
            subtitulo="Exemplo de comunicação DIRETA entre componentes"
        >
            
            <PaiDireta/>
            
        </Pagina>
    )
}