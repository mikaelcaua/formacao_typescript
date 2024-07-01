import { formatarMoedas } from "../utils/formaters";
import { formatarData } from "../utils/formaters";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoData = document.querySelector('time');
let saldo = 3000;
let data = new Date();
if (elementoData != null) {
    elementoData.textContent = formatarData(data);
}
export function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
export function atualizarSaldo(saldo) {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoedas(saldo);
    }
}
//
