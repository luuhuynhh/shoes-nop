import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoesStore from "./components/ShoesStore";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout modalId={"modalId"} />} >
          <Route path='/' element={<ShoesStore modalId={"modalId"} />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
