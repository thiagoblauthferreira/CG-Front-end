import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";

interface ILinksProps {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

function Links({ links, title }: ILinksProps) {
  return (
    <div className="space-y-3">
      <h3 className="uppercase dark:text-gray-900">{title}</h3>
      <ul className="space-y-1">
        {links.map((link) => {
          return (
            <li>
              <a
                rel="noopener noreferrer"
                href={link.url}
                className="transition-all hover:opacity-80"
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      className={`
        flex w-full bg-slate-300 drop-shadow px-5
      `}
    >
      <div className={`m-auto max-w-7xl w-full divide-y divide-black`}>
        <div
          className={`
            container flex flex-col justify-between py-10 mx-auto
            space-y-8 lg:flex-row lg:space-y-0 
          `}
        >
          <div className="lg:w-1/3">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="size-16 rounded-full bg-slate-600"></div>
              <span className="self-center text-2xl font-semibold">Coletivo Gloma</span>
            </a>
          </div>

          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3">
            <Links
              title="Suporte"
              links={[
                { text: "Suporte", url: "" },
                { text: "Privacidade", url: "" },
                { text: "Termos & condições", url: "" },
                { text: "FAQ", url: "" },
              ]}
            />

            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900">Mídias sociais</div>
              <div className="flex justify-start space-x-4">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="transition-all hover:opacity-80"
                >
                  <BsFacebook size={18} />
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="transition-all hover:opacity-80"
                >
                  <BsTwitterX size={18} />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="transition-all hover:opacity-80"
                >
                  <BsInstagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 1968 Company Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
