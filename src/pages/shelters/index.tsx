import React from "react";
import { CardPrimary } from "../../components/cards/CardPrimary";
import { Button, Select } from "../../components/common";
import { LoadingScreen } from "../../components/common/LoadingScreen";
import { IShelter } from "../../interfaces/shelter";
import { listShelters } from "../../services/shelter.service";
import useInView from "../../hooks/useInView";

const limit = 10;

export default function SheltersScreen() {
  const { ref, inView } = useInView();

  const [requesting, setRequesting] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [shelters, setShelters] = React.useState<IShelter[]>([]);

  const page = React.useRef<number>(0);

  const load = async () => {
    try {
      const currentPage = page.current;

      const resp = await listShelters({
        limit: limit,
        offset: currentPage * limit,
      });
      setShelters((currentData) => [...currentData, ...resp]);
      setLoading(resp.length > 0);
      page.current++;
    } catch (error) {
      setLoading(false);
    } finally {
      setRequesting(false);
    }
  };

  React.useEffect(() => {
    if (inView) {
      load();
    }
  }, [inView]);

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

          <Button
            text="Filtrar"
            className={`
                bg-black text-white w-full
              `}
          />
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
      </div>

      {!shelters ||
        (!shelters.length && !loading && (
          <div className="rounded-lg border border-solid border-gray-600 p-2 text-center">
            <p className="B8 text-gray-1">""</p>
          </div>
        ))}

      {loading && (
        <div className="relative h-[100px]" ref={ref}>
          {/* <Loading classIcon="!size-[40px]" /> */}
        </div>
      )}
    </div>
  );
}
