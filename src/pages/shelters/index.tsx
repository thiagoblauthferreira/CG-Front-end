import React from "react";
import { CardPrimary } from "../../components/cards/CardPrimary";
import { Button, Select } from "../../components/common";
import { LoadingScreen } from "../../components/common/LoadingScreen";

export default function SheltersScreen() {
  const [requesting, setRequesting] = React.useState<boolean>(false);

  const load = async () => {
    try {
      setRequesting(true);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  React.useEffect(() => {
    load();
  }, []);

  if (requesting) {
    return <LoadingScreen />;
  }

  return (
    <div className="py-8">
      <div className="my-5">
        <p className="font-semibold">Filtrar por</p>
        <div
          className={`
            grid grid-cols-1 gap-3
            sm:grid-cols-2 xl:grid-cols-4
          `}
        >
          <Select
            options={[
              { label: "teste", value: "teste" },
              { label: "teste", value: "teste" },
            ]}
          />
          <Select
            options={[
              { label: "teste", value: "teste" },
              { label: "teste", value: "teste" },
            ]}
          />
          <Select
            options={[
              { label: "teste", value: "teste" },
              { label: "teste", value: "teste" },
            ]}
          />

          <div
            className={`
              flex justify-end
            `}
          >
            <Button
              text="Filtrar"
              className={`
                bg-black text-white w-full
              `}
            />
          </div>
        </div>
      </div>

      <div
        className={`
          grid grid-cols-1 gap-3
          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        `}
      >
        <CardPrimary image="" title="Teste">
          <div>
            <p>teste</p>
            <p>teste, teste, teste</p>
          </div>

          <div
            className={`
              absolute bottom-0 right-0
              m-4 bg-slate-300 rounded-md px-2
              cursor-pointer 
            `}
          >
            teste
          </div>
        </CardPrimary>
        <CardPrimary image="" title="Teste">
          <div>
            <p>teste</p>
          </div>
        </CardPrimary>
        <CardPrimary image="" title="Teste">
          <div>
            <p>teste</p>
          </div>
        </CardPrimary>
        <CardPrimary image="" title="Teste">
          <div>
            <p>teste</p>
          </div>
        </CardPrimary>
        <CardPrimary image="" title="Teste">
          <div>
            <p>teste</p>
          </div>
        </CardPrimary>
        <CardPrimary image="" title="Teste">
          <div>
            <p>teste</p>
          </div>
        </CardPrimary>
        <CardPrimary image="" title="Teste">
          <div>
            <p>teste</p>
          </div>
        </CardPrimary>
        <CardPrimary image="" title="Teste">
          <div>
            <p>teste</p>
          </div>
        </CardPrimary>
      </div>
    </div>
  );
}
