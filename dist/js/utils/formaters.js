import { FormatoData } from "../types/FormatoData";
export function formatarMoedas(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
export function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato == FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleString('pt-br', { day: "2-digit", weekday: "long", month: "2-digit", year: "numeric" });
    }
    else if (formato == FormatoData.DIA_MES) {
        return data.toLocaleString('pt-br', { day: "2-digit", month: "2-digit" });
    }
    return data.toLocaleString('pt-br');
}
//
