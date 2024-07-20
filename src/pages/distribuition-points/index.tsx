import { CardPrimary } from "../../components/cards/CardPrimary";
import { Button, Select } from "../../components/common";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

export default function DistribuitionPointsScreen() {
  const navigate = useNavigate();

  const handleRedirect = (id: string) => {
    navigate(`/distribuition-points/${id}`);
  };

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
              absolute bottom-0 right-0 cursor-pointer
              m-4 bg-slate-200 rounded-md p-2
              transition-colors
              hover:bg-slate-300 active:bg-slate-200
            `}
            onClick={() => handleRedirect("teste")}
          >
            <BsChevronRight />
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
