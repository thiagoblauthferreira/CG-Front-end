import { useOutletContext } from "react-router-dom";

export function Home() {
  const tempOptions = new Array(12).fill(null);

  const necessidade = {
    titulo: "lugar",
    foto: "",
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
                    <img alt="template-img" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
            <div className="p-4 font-bold text-3xl w-full">CG LOGO</div>
            {tempOptions.map((_, i) => {
              return (
                <li className="w-full" key={i}>
                  <a className="py-3" href="#">
                    Sidebar Item {i}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <main className="flex w-[90%] mt-28 mx-auto">
        <div className="hidden lg:flex flex-col flex-start">
          <ul className="menu max-w-md menu-horizontal">
            {tempOptions.map((_, i) => {
              return (
                <li className="w-full" key={i}>
                  <a href="#">Navbar Item {i}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:block divider"></div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="bg-red-500 p-2 w-full">filter area</div>
          </div>
          <div className="flex">
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
        </div>
      </main>
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
