import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function NavComponent() {
  const tempOptions = new Array(12).fill(null);
  const userOptions = new Array(12).fill(null);

  function logout() {
    Cookies.remove("session");
    window.location.reload();
  }

  return (
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
                  <img
                    alt="template-img"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={logout}>
                  <Link to={"#"}>Sair</Link>
                </li>
                {userOptions.map((_, i) => {
                  return (
                    <li key={`option-${i}`}>
                      <Link to={"#"}>option {i}</Link>
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
  );
}
