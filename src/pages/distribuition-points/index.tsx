import React from "react";
import { CardPrimary } from "../../components/cards/CardPrimary";
import { Button, LoadingScreen, Loading } from "../../components/common";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import useInView from "../../hooks/useInView";
import {
  createDistribuitionPoints,
  listDistribuitionPoints,
} from "../../services/distribuition-points.service";
import {
  IDistribuitionPoint,
  IDistribuitionPointCreate,
} from "../../interfaces/distriuition-points";
import { ModalDistribuitionPoint } from "../../components/modals/DistribuitionPoint/index";
import { Search } from "../../components/search";

const limit = 10;

export default function DistribuitionPointsScreen() {
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  const page = React.useRef<number>(0);
  const filter = React.useRef({});

  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [requesting, setRequesting] = React.useState<boolean>(false);
  const [infinitScroll, setInfinitScroll] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [distribuitionPoints, setDistribuitionPoints] = React.useState<
    IDistribuitionPoint[]
  >([]);

  const handleRedirect = (id: string) => {
    navigate(`/distribuition-points/${id}`);
  };

  const handleFilter = async (data: any) => {
    filter.current = data;

    try {
      setRequesting(true);

      const resp = await listDistribuitionPoints(filter.current);

      const respData = resp.data;
      setDistribuitionPoints(respData);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleDistribuitionPoint = async (data: IDistribuitionPointCreate) => {
    try {
      setRequesting(true);
      console.log(data);
      // const resp = await createDistribuitionPoints(data);
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

      const resp = await listDistribuitionPoints({
        limit: limit,
        offset: currentPage * limit,
        ...filter.current,
      });

      console.log(resp);
      const respData = resp.data;
      const respTotal = resp.total;
      setDistribuitionPoints((currentData) => [...currentData, ...respData]);
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
            text="Novo ponto de distribuição"
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
            {distribuitionPoints.map((distribuitionPoint) => {
              return (
                <CardPrimary image="" title={distribuitionPoint.name}>
                  <div>
                    <p>{distribuitionPoint.description}</p>
                  </div>

                  <div
                    className={`
                      absolute bottom-0 right-0 cursor-pointer
                      m-4 bg-slate-200 rounded-md p-2
                      transition-colors
                      hover:bg-slate-300 active:bg-slate-200
                    `}
                    onClick={() => handleRedirect(distribuitionPoint.id)}
                  >
                    <BsChevronRight />
                  </div>
                </CardPrimary>
              );
            })}
          </div>

          {!distribuitionPoints ||
            (!distribuitionPoints.length && !infinitScroll && (
              <div className="rounded-lg border border-solid border-black p-2 text-center my-5">
                <p className="B8 text-gray-1">Pontos de distribuição não encontrados</p>
              </div>
            ))}

          {infinitScroll && (
            <div className="flex justify-center items-center h-[100px]" ref={ref}>
              <Loading />
            </div>
          )}
        </>
      )}
      <ModalDistribuitionPoint
        open={openModal}
        close={() => setOpenModal(false)}
        onSubmit={handleDistribuitionPoint}
      />
    </div>
  );
}
