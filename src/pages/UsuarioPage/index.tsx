import { Button, Card } from "flowbite-react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchUser } from "../../store/utils";
import { useEffect } from "react";
import { ErrorComp, LoadingUser } from "../../components";

export default function UsuarioPage() {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.users);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUser(Number(id)));
  }, [dispatch, id]);

  if (error) return <ErrorComp message={error} />;

  return (
    <>
      {loading ? (
        <LoadingUser />
      ) : (
        <section className="w-full sm:w-11/12 m-10 mx-auto">
          <Card>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Información del Usuario:{" "}
              <span className="text-teal-500">{id}</span>
            </h3>
            <article className="md:grid md:grid-cols-2 gap-4">
              <dl className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border  my-5 shadow-md">
                <dt className="text-sm text-gray-600">Nombre</dt>
                <dd className="text-sm sm:text-base font-medium capitalize">
                  {user.name}
                </dd>
              </dl>
              <dl className="flex flex-col items-start justify-center rounded-shadow-md bg-white bg-clip-border my-5 shadow-md ">
                <dt className="text-sm text-gray-600">Email</dt>
                <dd className="text-sm sm:text-base font-medium capitalize">
                  {user.email}
                </dd>
              </dl>
              <dl className="flex flex-col items-start justify-center rounded-shadow-md bg-white bg-clip-border my-5 shadow-md ">
                <dt className="text-sm text-gray-600">Genero</dt>
                <dd className="text-sm sm:text-base font-medium capitalize">
                  {user.gender}
                </dd>
              </dl>
              <dl className="flex flex-col items-start justify-center rounded-shadow-md bg-white bg-clip-border my-5 shadow-md ">
                <dt className="text-sm text-gray-600">Estatus</dt>
                <dd className="text-sm sm:text-base font-medium capitalize">
                  {user.status}
                </dd>
              </dl>
            </article>
            <NavLink to="/">
              <Button color="teal" className="mt-4">
                Regresar
              </Button>
            </NavLink>
          </Card>
        </section>
      )}
    </>
  );
}
