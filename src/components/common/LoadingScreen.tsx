import React from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      className={`
        fixed top-0 left-0 z-10 w-svw h-svh
        flex justify-center items-center bg-white
        overflow-hidden transition-all duration-500
        ${isLoading ? "visible opacity-100" : "invisible opacity-0"}
      `}
    >
      <span className="text-accent loading loading-infinity loading-lg"></span>
    </section>
  );
}
