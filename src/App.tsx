import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { CreateUser, Footer, Navbar } from "./components";
import ErrorPage from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createUser" element={<CreateUser/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
