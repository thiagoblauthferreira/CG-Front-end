import { useOutletContext } from "react-router-dom";
import { FooterComponent } from "../components/footer.component";
import { NavComponent } from "../components/nav.component";
import { CardComponent } from "./components/card.component";

export function Home() {
  const user: any = useOutletContext();
  const tempOptions = new Array(12).fill(null);

  return (
    <section className="w-full">
      <NavComponent />
      <main className="flex w-[90%] mt-28 mx-auto">
        {/* <div className="hidden lg:flex flex-col flex-start">
          <ul className="menu max-w-md menu-horizontal">
            {tempOptions.map((_, i) => {
              return (
                <li className="w-full" key={i}>
                  <a href="#">Navbar Item {i}</a>
                </li>
              );
            })}
          </ul>
        </div> */}
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="w-full">
            <div className="bg-red-500 p-2 w-full">filter area</div>
          </div>
          <div className="flex w-full">
            <div className="gap-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {new Array(12).fill(null).map((_, i) => {
                return <CardComponent index={i}/>
              })}
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </section>
  );
}
