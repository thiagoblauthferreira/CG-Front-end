import { Button, Modal } from "../common";
import { useAuthProvider } from "../../context/Auth";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ILogout {
  close: () => void;
  open: boolean;
}

export function ModalLogout({ close, open }: ILogout) {
  const { logout } = useAuthProvider();

  return (
    <Modal
      className="max-w-[343px] md:max-w-[400px] w-full p-3"
      open={open}
      close={close}
      removeBtnClose
    >
      <div className="w-full flex flex-col items-center gap-2">
        <IoIosCloseCircleOutline
          size={83}
          strokeWidth={1}
          className="text-red-600 mt-4"
        />
        <div className="w-full mb-2">
          <p className="text-2xl font-medium text-center">
            Você tem certeza que deseja sair agora?
          </p>
        </div>
        <div className="grid grid-rows-2 gap-2 mt-2 w-full">
          <Button text={"Cancelar"} className="w-full bg uppercase" onClick={close} />
          <Button
            text={"Confirmar"}
            className="w-full bg-black text-white uppercase"
            onClick={logout}
          />
        </div>
      </div>
    </Modal>
  );
}
