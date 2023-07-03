import { Routes, Route, Navigate } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import PageLayoute from "./components/MainLayout/PageLayout/PageLayoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to={"/home/all"} />} />
        <Route path="/:page" element={<PageLayoute />}>
          <Route path="/:page/:sub" element={<PageLayoute />}>
            <Route path="/:page/:sub/:group" element={<PageLayoute />} />
          </Route>
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
