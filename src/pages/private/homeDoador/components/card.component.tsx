export function CardComponent() {
  const necessidade = {
    titulo: "lugar",
    foto: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur aut veniam soluta autem tempora dicta quia ipsum reiciendis. Ad consectetur nostrum ratione reprehenderit ipsam exercitationem reiciendis similique esse enim.",
    lista: ["feijão", "arroz"],
  };

  return (
    <div
      className="max-w-xs bg-base-200 flex flex-col gap-3 mx-auto text-center"
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
        <h1 className="font-bold uppercase text-lg">{necessidade.titulo}</h1>
        <article className="px-3 line-clamp-4 text-justify opacity-75">
          {necessidade.desc}
        </article>
        <ul className="flex px-3 gap-2 pt-3">
          {necessidade.lista.map((item, i) => {
            return (
              <li className="p-2 px-3 bg-primary rounded-full" key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
