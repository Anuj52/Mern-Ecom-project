import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Handle the root route redirection based on authentication and user role
  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    }
    return user?.role === "admin" ? <Navigate to="/admin/dashboard" /> : <Navigate to="/shop/home" />;
  }

  // If user is not authenticated and trying to access a non-auth route, redirect to login
  if (!isAuthenticated && !location.pathname.includes("/login") && !location.pathname.includes("/register")) {
    return <Navigate to="/auth/login" />;
  }

  // If user is authenticated and trying to access login/register, redirect based on user role
  if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    return user?.role === "admin" ? <Navigate to="/admin/dashboard" /> : <Navigate to="/shop/home" />;
  }

  // If authenticated but non-admin user tries to access admin routes, redirect to unauthorized page
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("/admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // If authenticated but admin user tries to access shop routes, redirect to admin dashboard
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  // If none of the conditions matched, render the children (page component)
  return <>{children}</>;
}

export default CheckAuth;
