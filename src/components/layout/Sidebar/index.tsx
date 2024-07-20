import { Button } from "../../common";

interface ISidebarProps {
  open: boolean;
  close: () => void;
}

export function Sidebar({ open, close }: ISidebarProps) {
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
          h-full overflow-hidden 
          w-full sm:w-[375px] p-4 transition ease 
          duration-[0.4s] bg-gray-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col relative h-full">
          <Button text="Nova necessidade" className="bg-black text-white" />
          <Button text="Nova necessidade" className="bg-black text-white" />
          <Button text="Nova necessidade" className="bg-black text-white" />
          <Button text="Nova necessidade" className="bg-black text-white" />
          <Button text="Nova necessidade" className="bg-black text-white" />
          <Button text="Nova necessidade" className="bg-black text-white" />
        </div>
      </div>
    </aside>
  );
}
