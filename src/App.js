import { Routes, Route, Navigate } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import PageLayoute from "./components/MainLayout/PageLayout/PageLayoute";
import NotFound from "./pages/NotFound";
import Auth from "pages/Auth";
import CabinetPage from "pages/CabinetPage";

import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "redux/auth/authAPI";
import { selectToken } from "redux/auth/authSlice";

function App() {
  const token = useSelector(selectToken);
  useCurrentUserQuery(null, { skip: !token });

  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to={"/home/all"} />} />

        <Route path="/:page" element={<PageLayoute />}>
          <Route path="/:page/:sub" element={<PageLayoute />}>
            <Route path="/:page/:sub/:group" element={<PageLayoute />} />
          </Route>
        </Route>

        <Route path="/:cabinet" element={<CabinetPage />}>
          <Route path="/:cabinet/:messages" element={<CabinetPage />}></Route>
        </Route>

        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
