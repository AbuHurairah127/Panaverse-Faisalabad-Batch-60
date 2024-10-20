import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      {" "}
      <header className="bg-orange-300 h-20 w-screen"> header</header>
      {children}
    </main>
  );
};

export default layout;
