import { Bank, CreditCard, Money } from "phosphor-react";

export const paymentMethods = {
    credit: {
        label: "Cartão de crédito",
        icon: <CreditCard size={16}/>
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16} />
    },
    money: {
        label:"Dinheiro",
        icon: <Money size={16} />
    }
}