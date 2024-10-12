import {FC} from "react";
import { Route, Routes } from "react-router-dom";

interface IRoute {
  path: string;
  element: React.ReactNode 
}

interface RouterProps {
  routes: IRoute[]
}

const Router: FC<RouterProps> = ({routes}) :React.ReactNode => {
  return (
        <Routes>
          {routes.map((item) => (
            <Route key = {item.path} path={item.path} element={item.element}/>
          ))}
        </Routes>
  )
};

export default Router;
