import { useSelector } from "react-redux";
import Router from "./components/Router";
import Routes from "./router/routes";
import { FC } from "react";
import { selectIsAuth } from "./redux/slices/auth/selectors";

const App: FC = () => {
  const isAuth = useSelector(selectIsAuth)

  return isAuth ? (
    <Router routes={Routes.publicRoutes} />
  ) : (
    <Router routes={Routes.privateRoutes} />
  );
};

export default App;
