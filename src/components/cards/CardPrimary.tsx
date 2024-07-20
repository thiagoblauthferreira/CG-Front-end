interface ICardPrimaryProps {
  image: string;
  title: string;
  children: React.ReactNode;
  className?: {
    cardContent?: string;
    cardBody?: string;
  };
}

export function CardPrimary({ children, image, title, className }: ICardPrimaryProps) {
  return (
    <div
      className={`
        card card-compact bg-base-100 shadow-xl
        rounded-lg w-full
        ${className?.cardContent || ""}
      `}
    >
      <figure>
        <img
          src={
            image ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="card-image"
        />
      </figure>
      <div
        className={`
          card-body relative
          ${className?.cardBody || ""}
        `}
      >
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}