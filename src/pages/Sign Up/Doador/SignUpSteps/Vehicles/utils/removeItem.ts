import { MouseEvent, MouseEventHandler } from "react"

export const removeItem: MouseEventHandler = (e: MouseEvent) => {
    const veiculosForm = document.querySelector(".veiculos-form");
    const filhos = veiculosForm?.querySelectorAll(".veiculo");
    const veiculo = e.currentTarget.parentElement?.parentElement;

    console.log(filhos?.length)

    if(filhos?.length === 1) return

    veiculo?.remove();
}