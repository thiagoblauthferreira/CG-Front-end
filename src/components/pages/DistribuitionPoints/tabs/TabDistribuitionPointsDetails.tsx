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
    <div className="my-5">
      <div className="stats bg-white stats-vertical md:stats-horizontal shadow w-full">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <h2 className={`py-8 pb-4 font-bold text-lg`}>Ponto de distribuição</h2>

      <div className="card bg-white rounded-xl shadow">
        <div className="card-body p-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:p-8">
          <div className="h-60 w-full rounded-2xl bg-slate-600"></div>
          <div className="space-y-4">
            <p className="text-base">
              <span className="font-bold">Nome:</span> {"Teste"}
            </p>

            <p className="text-base">
              <span className="font-bold">Telefone:</span> {"Teste"}
            </p>

            <p className="text-base">
              <span className="font-bold">Descrição:</span> {"Digite uma descrição"}
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className={`py-4 font-bold text-lg`}>Endereço:</h2>

            <div className="space-y-4 pl-4">
              <p className="text-base">
                <span className="font-bold">CEP:</span> {"Teste"}
              </p>
              <p className="text-base">
                <span className="font-bold">Estado:</span> {"Teste"}
              </p>
              <p className="text-base">
                <span className="font-bold">País:</span> {"Digite uma descrição"}
              </p>
              <p className="text-base">
                <span className="font-bold">Município:</span> {"Digite uma descrição"}
              </p>
              <p className="text-base">
                <span className="font-bold">Bairro:</span> {"Digite uma descrição"}
              </p>
              <p className="text-base">
                <span className="font-bold">Logradouro:</span> {"Digite uma descrição"}
              </p>
              <p className="text-base">
                <span className="font-bold">Número:</span> {"Digite uma descrição"}
              </p>
              <p className="text-base">
                <span className="font-bold">Complemento:</span> {"Digite uma descrição"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <Collapse
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
      </Collapse> */}
    </div>
  );
}
