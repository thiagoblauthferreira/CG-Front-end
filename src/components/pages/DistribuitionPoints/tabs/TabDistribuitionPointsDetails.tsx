import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IDistribuitionPointCreate } from "../../../../interfaces/distriuition-points";
import { distributionPointSchema } from "../../../../validators";
import { useDistribuitionPointProvider } from "../context";
import { Collapse, Input, Textarea } from "../../../common";

const defaultStyleBtnCollapse =
  "py-4 border-b border-solid border-black font-bold text-base";

export function TabDistribuitionPointDetails() {
  const { distribuitionPoint } = useDistribuitionPointProvider();

  const { setValue } = useForm<IDistribuitionPointCreate>({
    resolver: zodResolver(distributionPointSchema),
  });

  React.useEffect(() => {
    if (distribuitionPoint) {
      for (const k in distribuitionPoint) {
        const key = k as keyof IDistribuitionPointCreate;
        if (key === "address" && distribuitionPoint[key] !== null) {
          for (const sk in distribuitionPoint[key]) {
            const subKey = sk as keyof IDistribuitionPointCreate["address"];
            setValue(`${key}.${subKey}`, distribuitionPoint[key][subKey]);
          }
        } else {
          setValue(key, distribuitionPoint[key]);
        }
      }
    }
  }, []);

  return (
    <form>
      <div className="my-5">
        <Collapse
          defaultIsOpen
          buttonArrow={{ className: "!top-3" }}
          btnCollapseChildren={
            <p className={`${defaultStyleBtnCollapse} pt-0`}>Ponto de distribuição</p>
          }
        >
          <div
            className={`
              grid grid-cols-1 gap-4 py-3
              md:grid-cols-2
            `}
          >
            <div className="h-60 w-full rounded-2xl bg-slate-600"></div>
            <div className="grid gap-4 grid-rows-2">
              <Input label="Nome: " placeholder="Digite o nome" disabled />
              <Input label="Telefone: " placeholder="(xx) x-xxxx-xxx" disabled />
            </div>
            <Textarea
              label="Descrição: "
              placeholder="Digite uma descrição"
              disabled
              containerClassName="col-span-1 md:col-span-2"
            />
          </div>
        </Collapse>

        <Collapse
          defaultIsOpen
          btnCollapseChildren={<p className={`${defaultStyleBtnCollapse}`}>Endereço</p>}
        >
          <div
            className={`
              grid grid-cols-1 gap-4 py-3
              md:grid-cols-2
            `}
          >
            <Input label="CEP: " placeholder="Digite o CEP" disabled />
            <Input label="Estado: " placeholder="Digite o estado" disabled />
            <Input label="País: " placeholder="Digite o país" disabled />
            <Input label="Município: " placeholder="Digite o município" disabled />
            <Input label="Bairro: " placeholder="Digite o bairro" disabled />
            <Input label="Logradouro: " placeholder="Digite o logradouro" disabled />
            <Input label="Número: " placeholder="Digite o número" disabled />
            <Input label="Complemento: " placeholder="Digite o complemento" disabled />
          </div>
        </Collapse>
      </div>
    </form>
  );
}
