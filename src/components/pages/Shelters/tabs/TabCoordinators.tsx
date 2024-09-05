import { Search } from "../../../search";
import { useAuthProvider } from "../../../../context/Auth";
import { TableCoordinators } from "../../../tables";
import { useShelterProvider } from "../context";

export function TabCoordinators() {
  const { coordinators, requesting, handleCoordinators, handleFilter } =
    useShelterProvider();
  const { currentUser } = useAuthProvider();

  return (
    <div>
      <div className="my-5">
        <p className="font-semibold mb-2">Filtrar por</p>
        <div
          className={`
            flex flex-col gap-4 md:flex-row
          `}
        >
          <Search
            className="gap-4 w-full"
            onFilter={handleFilter}
            options={[
              {
                optionKey: "search",
                type: "input",
              },
            ]}
          />
        </div>
      </div>

      <div>
        <TableCoordinators
          total={coordinators.total}
          dataSource={coordinators.data}
          onPaginate={handleCoordinators}
          requesting={requesting}
          textNotFound="Nenhum cordenador encontrado"
        />
      </div>
    </div>
  );
}
