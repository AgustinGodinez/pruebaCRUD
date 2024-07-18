import PlayDemo from "/PlayDemo.svg";
import GitHub from "/GitHub.svg";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-teal-700  to-teal-500  ">
      <section className="container px-6 py-8 mx-auto text-center">
        <p className="max-w-md mx-auto mt-4 text-white">
          La app se encuentra en Deploy con Netlify
        </p>
        <a href="https://agustincrud.netlify.app/" target="_blank">
          <img
            className="w-auto h-16 rounded-full mx-auto"
            src="https://kollitsch.dev/blog/2023/netlifys-new-logo/header_hu908b72d00b7cf365062f7338efd98fef_20461_914x457_fit_q85_h2_lanczos_3.webp"
            alt="Logo"
          />
        </a>
        <nav className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
          <a href="https://agustincrud.netlify.app/" target="_blank">
            <button className="flex items-center justify-center w-full px-2 py-2 mt-3 text-sm bg-white  text-black  transition-colors duration-300 transform border rounded-md sm:mx-2  sm:mt-0 sm:w-auto hover:bg-gray-300  focus:outline-none  ">
              <img
                src={PlayDemo}
                className="w-5 h-5 mx-1"
                alt="View Demo Icon"
              />
              <span className="mx-1">View Demo</span>
            </button>
          </a>
          <a
            href="https://github.com/AgustinGodinez/pruebaCRUD"
            target="_blank"
          >
            <button className="flex items-center justify-center w-full px-2 h-[35px] py-2 mt-3 text-sm  text-white  transition-colors duration-300 transform border rounded-md sm:mx-2  sm:mt-0 sm:w-auto hover:bg-gray-300 hover:text-black focus:outline-none  ">
              <img src={GitHub} alt="GitHub icon" />
              <span className="mx-1">View Repositorie</span>
            </button>
          </a>
        </nav>
        <hr className="my-10 border-gray-200" />
        <section className="flex flex-col items-center sm:flex-row sm:justify-between text-white">
          <p className="text-sm ">© Copyright 2024. All Rights Reserved.</p>
          <nav className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm  transition-colors duration-300 hover:text-black "
              aria-label="Teams"
            >
              Teams
            </a>
            <a
              href="#"
              className="mx-2 text-sm  transition-colors duration-300 hover:text-black"
              aria-label="Privacy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="mx-2 text-sm  transition-colors duration-300 hover:text-black "
              aria-label="Cookies"
            >
              Cookies
            </a>
          </nav>
        </section>
      </section>
    </footer>
  );
};
