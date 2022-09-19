import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "@core/constants";

import { AuthLayout } from "@templates";

const PublicPages: FC<{ isAuthorized: boolean }> = ({ isAuthorized }) => {
  if (isAuthorized) {
    return <Navigate to={ROUTES.DASHBOARD} />;
  }

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
export default PublicPages;
