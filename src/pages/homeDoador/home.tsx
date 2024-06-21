import { Signal } from "@preact/signals-react";
import { useOutletContext } from "react-router-dom";
import { LoadingScreen } from "../../utils/screens/LoadingScreen";

export function Home() {
  const tempOptions = new Array(12).fill(null);

  const necessidade = 
    {
      titulo: "lugar",
      foto: "data:image/jpeg;base64,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",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur aut veniam soluta autem tempora dicta quia ipsum reiciendis. Ad consectetur nostrum ratione reprehenderit ipsam exercitationem reiciendis similique esse enim.",
      lista: ["feijão", "arroz"],
    };

  const userOptions = new Array(12).fill(null);

  const user: any = useOutletContext();

  return (
    <section className="w-full">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="fixed lg:p-3 z-10 w-full navbar bg-base-300">
            <div className="lg:w-[90%] flex justify-between items-center py-.5 w-full mx-auto relative">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="absolute right-1/2 translate-x-1/2 lg:static lg:translate-x-0">
                CG LOGO
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar bg-base-300 btn md:w-fit lg:p-0"
                >
                  <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {userOptions.map((_, i) => {
                    return (
                      <li key={`option-${i}`}>
                        <a href="#">option {i}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="z-20 drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            <div className="p-4 font-bold text-3xl w-full">
                CG LOGO
            </div>
            {tempOptions.map((_, i) => {
              return (
                <li className="w-full" key={i}>
                  <a className="py-3" href="#">Sidebar Item {i}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[90%] mt-36 mx-auto">
        <div className="bg-red-500 p-2 w-full">filter area</div>
      </div>
      <div className="w-[90%] my-8 mx-auto flex">
        <div className="hidden lg:flex flex-col flex-start">
          <ul className="menu max-w-md menu-horizontal">
            {tempOptions.map((_, i) => {
              return (
                <li className="w-full" key={i}>
                  <a>Navbar Item {i}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2 w-full">
          {new Array(12).fill(null).map((_, i) => {
            return (
              <div
                className="max-w-xs bg-base-200 flex flex-col gap-3 mx-auto text-center"
                key={i}
              >
                <div className="aspect-video z-0 relative">
                  <div className="absolute h-full w-full backdrop-grayscale-[.45] z-10"></div>
                  <img
                    className="z-0 w-full h-full object-fit object-center"
                    src={necessidade.foto}
                    alt={necessidade.titulo}
                  />
                </div>
                <div className="infos-container p-4 pt-0">
                  <h1 className="font-bold uppercase text-lg">
                    {necessidade.titulo}
                  </h1>
                  <article className="px-3 line-clamp-4 text-justify opacity-75">
                    {necessidade.desc}
                  </article>
                  <ul className="flex px-3 gap-2 pt-3">
                    {necessidade.lista.map((item, i) => {
                      return (
                        <li
                          className="p-2 px-3 bg-primary rounded-full"
                          key={i}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
}
