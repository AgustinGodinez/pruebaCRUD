# Proyecto con Vite + React + Tailwind CSS + TypeScript

Este proyecto es una aplicación web desarrollada con Vite, React y utiliza Tailwind CSS para estilos. Además, integra Flowbite React para algunos diseños de botones o formularios y algunas otras librerias para el consumo de api, manejo de estado, alertas, etc. Hecho por Agustin Godinez Montaño

## Demo

- Puedes ver una demostración en vivo del proyecto [aquí](https://agustincrud.netlify.app/).

## Instalación

Para empezar, clona este repositorio e instala las dependencias:

```
git clone https://github.com/AgustinGodinez/pruebaCRUD.git
cd pruebaCRUD
npm install
npm run dev
```

## Librerias

Las librerias usadas en este proyecto

```
- axios              #Para el consumo de apis
- Redux-toolkit      #Para el manejo de estados
- flowbite-react:    #Para uso de diseño como de botones o formularios
- tailwindcss        #Para estilos del proyecto
- react-hook-form    #Para validacion de formularios
- sweetalert2        #Para alertas de la app
- react-router-dom   #Para rutas de nuestra app
```
## Estructura de Carpetas

Este proyecto está construido con Vite + React + Tailwind CSS + TypeScript utiliza ESLint y Prettier para asegurar la calidad y consistencia del código.


```
public/
├── Delete.svg          #Icono de borrar usuario.
├── Edit.svg            #Icono de editar usuario.
├── foto.webp           #foto mia con formato para la web.
├── GitHub.svg          #Icono de GitHub.
├── PlayDemo.svg        #Icono de Play.
└── View.svg            #Icono de ver usuario.

src/
├── components/         #Contiene los componentes reutilizables de la aplicación.
│   ├── CreateUser/     #Componente con funcionalidad para crear un usuario.
│   │   └── index.tsx   #Punto de entrada y funcionalidad del componente.
│   ├── ErrorComp/      #Componente para manejar errores.
│   │   ├── index.tsx   #Punto de entrada y funcionalidad del componente.
│   │   └── types.ts    #Definiciones de types para el componente.
│   ├── Footer/         #Componente del pie de página.
│   │   └── index.tsx   #Punto de entrada y funcionalidad del componen
│   ├── LoadingTable/   #Componente para mostrar una tabla cargandose.
│   │   └── index.tsx   #Punto de entrada y funcionalidad del componente.
│   ├── LoadingUser/    #Componente para mostrar un usuario cargandose.
│   │   └── index.tsx   #Punto de entrada y funcionalidad del componente.
│   ├── ModalComponent/ #Componente modal reutilizable.
│   │   ├── index.tsx   #Punto de entrada y funcionalidad del componente.
│   │   └── types.ts    #Definiciones de types para el componente.
│   ├── Navbar/         #Componente de la barra de navegación.
│   │   └── index.tsx   #Punto de entrada del componente.
│   ├── UserTable/      #Componente con funcionalidad para ver usuarios un usuario y llamado al componete CreateUser.
│   │    └── index.tsx  #Punto de entrada y funcionalidad del componente.
│   └── index.ts/       #Punto de entrada del archivo llamando a todos componentes para su reutilizacion.

├── pages/              #Contiene las páginas de la aplicación.
│   ├── EditarPage/     #Page con funcionalidad para editar un usuarios.
│   │   ├── index.tsx   #Punto de entrada y funcionalidad de la pagina.
│   │   └── types.ts    #Definiciones de types para el componente.
│   ├── ErrorPage/      #Page de error 404.
│   │   ├── index.tsx   #Punto de entrada de la pagina.
│   │   └── styles.css  #Estilos específicos para la página de error usando tailwind.
│   ├── HomePage/       #pagina de inicio llamado al componente UserTable.
│   │   └── index.tsx   #Punto de entrada de la pagina.
│   └── UsuarioPage/    #Page con funcionalidad para ver un usuario por el id de la ruta.
│       └── index.tsx   ##Punto de entrada y funcionalidad de la pagina.
├── store/              #Contiene toda la funcionalidad del redux
│   ├── index.ts        #configuración del store
│   ├── types.ts        #Definiciones de types generales de la aplicacion .
│   ├── userSlice.ts    #métodos para procesar la data GET,POST, PATCH, DELETE
│   └── utils.ts        #Configuracion de Axios y llamadas API
├── App.tsx             #Configuracion del rutado de las paginas de la aplicación.
└── main.tsx
└── styles.css
```