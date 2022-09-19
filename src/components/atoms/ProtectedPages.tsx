import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "@core/constants";

import { MainLayout } from "@templates";

const ProtectedPages: React.FC<{ isAuthorized: boolean }> = ({
  isAuthorized,
}) => {
  if (!isAuthorized) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default ProtectedPages;
