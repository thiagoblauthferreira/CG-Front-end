import React from "react";
import { Button } from "../../components/common";
import { ModalLogout } from "../../components/modals/Logout";
import { sidebarData } from "../../utils/layout/SidebarData";

interface ISidebarProps {
  open: boolean;
  close: () => void;
}

export function Sidebar({ open, close }: ISidebarProps) {
  const [openModalLogout, setOpenModalLogout] = React.useState<boolean>(false);

  return (
    <aside
      className={`
        fixed z-10 inset-0 top-0 left-0 w-screen h-screen
        flex justify-end transition-all
        ${open ? "visible bg-gray-100/30 backdrop-blur-sm" : "invisible"}
      `}
      onClick={() => close()}
    >
      <div
        className={`
          h-full overflow-hidden flex flex-col
          w-full sm:w-[375px] p-4 transition ease 
          duration-[0.4s] bg-white relative
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-center items-center min-h-20">LOGO</div>

        <div className="overflow-y-auto my-2 mb-14 not-scroll-bar">
          <ul
            className={`
              flex flex-col gap-2
            `}
          >
            {sidebarData().map((menu) => {
              return (
                <li key={`sidebar-menu-${menu.id}`}>
                  <Button
                    text={menu.text}
                    prefix={menu.icon}
                    className="bg-black w-full text-white"
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4">
          <Button
            text={"Sair"}
            className="bg-black w-full text-white"
            onClick={() => setOpenModalLogout(true)}
          />
        </div>
      </div>

      <ModalLogout open={openModalLogout} close={() => setOpenModalLogout(false)} />
    </aside>
  );
}
