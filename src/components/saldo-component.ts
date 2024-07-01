import { formatarMoedas } from "../utils/formaters.js"
import { formatarData } from "../utils/formaters.js"

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLSpanElement
const elementoData = document.querySelector('time') as HTMLTimeElement

let saldo = 3000
let data = new Date()

if(elementoData!=null){
    elementoData.textContent = formatarData(data)
}

export function getSaldo():number{
    return saldo
}

atualizarSaldo(saldo)
export function atualizarSaldo(saldo:number):void{
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoedas(saldo)
    }
}
//