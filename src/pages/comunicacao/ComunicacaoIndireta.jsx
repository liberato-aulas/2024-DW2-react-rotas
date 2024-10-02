import { Pagina } from "../../components/Pagina";
import { PaiIndireta } from "../../components/comunicacao/indireta/PaiIndireta";

export function ComunicacaoIndireta() {

    return (
        <Pagina 
            titulo="Comunicação Indireta"
            subtitulo="Exemplo de comunicação INDIRETA entre componentes"
        >
            <PaiIndireta />
        </Pagina>
    )
}