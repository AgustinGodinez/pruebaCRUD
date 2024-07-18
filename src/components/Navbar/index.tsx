import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="font-sans py-4 px-6 bg-teal-700 text-white  w-full ">
      <NavLink
        to="/"
        className="text-2xl no-underline text-grey-darkest hover:text-teal-500 flex items-center"
      >
        <img
          src="/foto.webp"
          className="h-16 w-14 rounded-full mr-3 object-cover"
          alt="Foto Mia"
        />
        <h1>Agustin Godinez Montaño</h1>
      </NavLink>
    </nav>
  );
};
