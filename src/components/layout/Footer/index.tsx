interface IFooterProps {}

export function Footer({}: IFooterProps) {
  return (
    <footer
      className={`
        fixed bottom-0 left-0 flex w-screen 
        bg-white drop-shadow
      `}
    >
      <div className={`m-auto max-w-7xl py-3 h-10 w-full`}>
        <div className="grid grid-cols-2 h-full"></div>
      </div>
    </footer>
  );
}
