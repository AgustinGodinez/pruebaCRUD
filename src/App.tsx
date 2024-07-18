import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CreateUser, Footer, Navbar } from "./components";
import ErrorPage from "./pages/ErrorPage";
import UsuarioPage from "./pages/Usuario";
import EditarPage from "./pages/EditarPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createUser" element={<CreateUser/>} />
        <Route path="/usuario/:id" element={<UsuarioPage/>} />
        <Route path="/editar/:id" element={<EditarPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
