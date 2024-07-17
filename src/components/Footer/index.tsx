export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-teal-700  to-teal-500">
      <section className="container px-6 py-8 mx-auto text-center">
        <img
          className="w-auto h-16 rounded-full mx-auto"
          src="https://kollitsch.dev/blog/2023/netlifys-new-logo/header_hu908b72d00b7cf365062f7338efd98fef_20461_914x457_fit_q85_h2_lanczos_3.webp"
          alt="Logo"
        />

        <p className="max-w-md mx-auto mt-4 text-white">
          La app se encuentra en Deploy con Netlify
        </p>

        <nav className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
          <a href="https://github.com/" target="_blank">
            <button className="flex items-center justify-center w-full px-2 py-2 mt-3 text-sm  text-white  transition-colors duration-300 transform border rounded-md sm:mx-2  sm:mt-0 sm:w-auto hover:bg-gray-50 hover:text-black focus:outline-none  ">
              <svg
                className="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="mx-1">View Demo</span>
            </button>
          </a>
          <a href="https://github.com/" target="_blank">
            <button className="flex items-center justify-center w-full px-2 h-[35px] py-2 mt-3 text-sm  text-white  transition-colors duration-300 transform border rounded-md sm:mx-2  sm:mt-0 sm:w-auto hover:bg-gray-50 hover:text-black focus:outline-none  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"
                  fill="currentColor"
                ></path>
              </svg>
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
