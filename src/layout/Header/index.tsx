import { useAuthProvider } from "../../context/Auth";
import { Avatar } from "../../components/common";

interface IHeaderProps {
  openSidebar: () => void;
}

export function Header({ openSidebar }: IHeaderProps) {
  const { currentUser } = useAuthProvider();

  return (
    <header
      className={`
        fixed top-0 left-0 flex w-screen bg-white
        z-10 drop-shadow px-4
      `}
    >
      <div
        className={`
          m-auto max-w-7xl py-3 h-[100px] w-full
        `}
      >
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-start items-center">
            <div>LOGO</div>
          </div>

          <div className="flex justify-end items-center">
            <div onClick={openSidebar}>
              <Avatar src="" className="cursor-pointer size-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
