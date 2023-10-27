import React from "react";
import { Routes, Route } from "react-router-dom";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const RouteNotFound: React.FC<Props> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>404 NOT FOUND</div>} />
    </Routes>
  );
};
