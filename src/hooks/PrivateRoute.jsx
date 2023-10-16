import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function useIsAuthenticated() {
  const accessToken = sessionStorage.getItem("kakaoUserId");
  return !!accessToken;
}

export function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true, state: { from: location } });
    }
  }, [isAuthenticated, navigate, location]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
