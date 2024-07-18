import { useEffect } from "react";
import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchUser, updateUser } from "../../store/utils";
import { ErrorComp, LoadingUser } from "../../components";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserProps } from "../../types";
import Swal from "sweetalert2";

export default function EditarPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useAppSelector((state) => state.users);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUser(Number(id)));
  }, [dispatch, id]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserProps>();

  useEffect(() => {
    if (user) {
      setValue("id", user.id);
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("gender", user.gender);
      setValue("status", user.status);
    }
  }, [user, setValue]);

  const onSubmit: SubmitHandler<UserProps> = (info) => {
    Swal.fire({
      title: `¿Estas seguro que quieres actualizar a ${info.name}?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      confirmButtonColor: "#FF3B3B",
      denyButtonText: `No`,
      denyButtonColor: "#22B371",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateUser(info));
        Swal.fire({
          title: "Usuario Actualizado",
          icon: "success",
          iconColor: "green",
        });
        navigate("/");
      }
    });
  };

  if (error) return <ErrorComp message={error} />;

  return (
    <>
      {loading ? (
        <LoadingUser />
      ) : (
        <section className="w-full sm:w-3/5 m-10 mx-auto">
          <Card>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Información del Usuario:
              <span className="text-teal-500">{id}</span>
            </h3>
            <form
              className="gap-4 space-y-3 sm:w-3/4 sm:mx-auto items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Label
                value="Nombre"
                className="block text-sm font-bold text-gray-700"
              />
              <TextInput
                placeholder="Nombre de usuario"
                className="mt-1 block w-full"
                {...register("name", { required: "El nombre es obligatorio" })}
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
              <Label
                value="Email"
                className="block text-sm font-bold text-gray-700"
              />
              <TextInput
                type="email"
                placeholder="Correo Electrónico"
                className="mt-1 block w-full"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "El formato del email es inválido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
              <Label
                value="Género"
                className="block text-sm font-bold text-gray-700"
              />
              <Select
                className="mt-1 block w-full"
                {...register("gender", {
                  required: "El género es obligatorio",
                })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
              {errors.gender && (
                <span className="text-red-500 text-sm">
                  {errors.gender.message}
                </span>
              )}
              <Label
                value="Status"
                className="block text-sm font-bold text-gray-700"
              />
              <Select
                className="mt-1 block w-full"
                {...register("status", {
                  required: "El estatus es obligatorio",
                })}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
              {errors.status && (
                <span className="text-red-500 text-sm">
                  {errors.status.message}
                </span>
              )}
              <footer className="flex space-x-4">
                <Button type="submit" className="mt-4 bg-teal-500 text-white">
                  Guardar
                </Button>
                <NavLink to="/">
                  <Button color="teal" className="mt-4">
                    Regresar
                  </Button>
                </NavLink>
              </footer>
            </form>
          </Card>
        </section>
      )}
    </>
  );
}
