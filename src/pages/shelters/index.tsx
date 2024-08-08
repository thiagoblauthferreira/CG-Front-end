import React from "react";
import { CardPrimary } from "../../components/cards/CardPrimary";
import { Button, Loading } from "../../components/common";
import { LoadingScreen } from "../../components/common/LoadingScreen";
import { IShelter, IShelterCreate } from "../../interfaces/shelter";
import { createShelter, listShelters } from "../../services/shelter.service";
import useInView from "../../hooks/useInView";
import { BsChevronRight } from "react-icons/bs";
import { Search } from "../../components/search";
import { useNavigate } from "react-router-dom";
import { ModalShelter } from "../../components/modals/Shelter";

const limit = 10;

export default function SheltersScreen() {
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  const page = React.useRef<number>(0);
  const filter = React.useRef({});

  const [requesting, setRequesting] = React.useState<boolean>(false);
  const [infinitScroll, setInfinitScroll] = React.useState<boolean>(true);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [shelters, setShelters] = React.useState<IShelter[]>([]);

  const handleRedirect = (id: string) => {
    navigate(`/shelters/${id}`);
  };

  const handleFilter = async (data: any) => {
    filter.current = data;

    try {
      setRequesting(true);

      const resp = await listShelters({ params: filter.current });

      const respData = resp.data;
      setShelters(respData);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleShelter = async (data: IShelterCreate) => {
    try {
      setRequesting(true);
      console.log(data);
      // const resp = await createShelter(data);
      // console.log(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const load = async () => {
    try {
      const currentPage = page.current;

      const resp = await listShelters({
        limit: limit,
        offset: currentPage * limit,
        ...filter.current,
      });

      console.log(resp);
      const respData = resp.data;
      const respTotal = resp.total;
      setShelters((currentData) => [...currentData, ...respData]);
      setInfinitScroll(respTotal > limit ? respData.length > 0 : false);
      page.current++;
    } catch (error) {
      setInfinitScroll(false);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (inView) {
      load();
    }
  }, [inView]);

  return (
    <div className="py-8">
      <LoadingScreen ref={ref} loading={loading} />
      <div className="my-5">
        <p className="font-semibold mb-2">Filtrar por</p>
        <div
          className={`
            flex flex-col gap-4 md:flex-row
          `}
        >
          <Search
            className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full"
            onFilter={handleFilter}
            options={[
              {
                optionKey: "teste1",
                type: "select",
                options: [{ label: "All", value: "" }],
              },
              {
                optionKey: "teste2",
                type: "select",
                options: [{ label: "All", value: "" }],
              },
              {
                optionKey: "teste3",
                type: "select",
                options: [{ label: "All", value: "" }],
              },
            ]}
          />

          <Button
            text="Novo abrigo"
            className="bg-black text-white"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>
      {requesting ? (
        <div className="flex justify-center items-center h-[100px]" ref={ref}>
          <Loading />
        </div>
      ) : (
        <>
          <div
            className={`
              grid grid-cols-1 gap-3
              sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            `}
          >
            {shelters.map((shelter) => {
              return (
                <CardPrimary image="" title={shelter.name}>
                  <div>
                    <p>{shelter.description}</p>
                  </div>

                  <div
                    className={`
                      absolute bottom-0 right-0 cursor-pointer
                      m-4 bg-slate-200 rounded-md p-2
                      transition-colors
                      hover:bg-slate-300 active:bg-slate-200
                    `}
                    onClick={() => handleRedirect(shelter.id)}
                  >
                    <BsChevronRight />
                  </div>
                </CardPrimary>
              );
            })}
          </div>

          {!shelters ||
            (!shelters.length && !infinitScroll && (
              <div className="rounded-lg border border-solid border-black p-2 text-center my-5">
                <p className="B8 text-gray-1">Abrigos não encontrados</p>
              </div>
            ))}

          {infinitScroll && (
            <div className="flex justify-center items-center h-[100px]" ref={ref}>
              <Loading />
            </div>
          )}
        </>
      )}
      <ModalShelter
        open={openModal}
        close={() => setOpenModal(false)}
        onSubmit={handleShelter}
      />
    </div>
  );
}
