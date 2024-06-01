import { useForm } from "react-hook-form";
import Nav from "../../../components/Navbar";
import { SelectInput } from "../../../components/SelectInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ShelterFilterInterface,
  ShelterFilterSchema,
} from "./utils/shelterFilter.zod.interface";
import {
  ShelterFilterOptions,
  ShelterTypeCause,
  ShelterTypeNeed,
} from "./utils/filter";

import Button from "../../../components/Button";

interface SearchShelterDoadorProps {}

function SearchShelterScreen(props: SearchShelterDoadorProps) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    trigger,
    watch,
  } = useForm<ShelterFilterInterface>({
    resolver: zodResolver(ShelterFilterSchema),
    mode: "onSubmit",
  });

  return (
    <div className="search-helter-section">
      <Nav />
      <section className="relative pt-16 items-center flex">
        <div className="min-h-96 w-full items-center justify-between bg-white px-7 py-7">
          <span className="label-text uppercase">Filtrar por: </span>
          <div className="filter-box flex flex-col md:flex-row gap-4 w-full mt-2">
            <SelectInput
              register={register}
              setError={setError}
              name="nearby"
              showLabel={false}
              items={ShelterFilterOptions}
              className="col-span-2 min-w-56"
            />
            <SelectInput
              register={register}
              setError={setError}
              name="typeCause"
              showLabel={false}
              items={ShelterTypeCause}
              className="col-span-2 min-w-56"
            />
            <SelectInput
              register={register}
              setError={setError}
              name="typeNeed"
              showLabel={false}
              items={ShelterTypeNeed}
              className="col-span-2 min-w-56"
            />
            <Button>Filtrar</Button>
          </div>

          <div className="shelter-content mt-8 ">
            <h2 className="font-bold">{arr?.length} Abrigos disponíveis</h2>
            <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {arr.map((item, index) => (
                <div
                  key={index}
                  className="card bg-base-100 rounded-lg shadow-lg shadow-xl"
                >
                  <div className="card-body">
                    <h2 className="card-title">Abrigo {index + 1}</h2>
                    <p className="text-sm font-semibold">Itens esperados: </p>
                    <p className="text-sm">
                      Arroz, feijão, açucar, macarrão...
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-ghost">Ver mais</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchShelterScreen;
