import React from "react";

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ring-1 ring-inset ring-sky-400/20">
    {children}
  </li>
);

export default Tag;
