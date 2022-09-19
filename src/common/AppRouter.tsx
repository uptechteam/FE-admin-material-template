import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "@core/constants";

import { ProtectedPages, PublicPages } from "@atoms";
import {
  Dashboard,
  ForgotPasswordPage,
  NotFoundPage,
  SignInPage,
} from "@pages";

const AppRouter: React.FC = () => {
  const isAuth = false;

  return (
    <Routes>
      {/* PRIVATE PAGES */}
      <Route element={<ProtectedPages isAuthorized={isAuth} />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Route>
      {/* PUBLIC PAGES */}
      <Route element={<PublicPages isAuthorized={isAuth} />}>
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      </Route>
      <Route
        path={ROUTES.HOME}
        element={<Navigate to={ROUTES.SIGN_IN} replace />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRouter;
