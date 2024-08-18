import { ViaCEP } from "../../../../../../utils/apis/viaCEP";
import { FocusEvent, SetStateAction } from "react";

export async function handleCEP(e: FocusEvent<HTMLInputElement, Element>, setAdress: any) {
    const cep = e.currentTarget.value.replace(/\-/g, "").toUpperCase();

    if (/^\d{8}$/.test(cep)) {
        setAdress(await ViaCEP.getAdress(e.currentTarget.value));
        return;
    }

    setAdress(null);
}
