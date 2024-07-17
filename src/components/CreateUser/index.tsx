import { useAppDispatch } from "../../store";
import { ModalComponent } from "../ModalComponent";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormDataProps } from "./types";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { useState } from "react";
import { createUser } from "../../store/utils";
import { showModal } from "../../store/userSlice";

export const CreateUser = () => {
  const dispatch = useAppDispatch();

  const [data] = useState ({
    name: "",
    email: "",
    gender: "male",
    status: "active",
    id: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataProps>();

  const onSubmit: SubmitHandler<FormDataProps> = (info) => {
    const {name, gender, email} = info;
    const newUser = { ...data, name, gender, email }; 
    
    dispatch(createUser(newUser));    
    reset({ name: "", email: "", gender: "male" });
    dispatch(showModal(false))
  };

  const handleCancel = () => {
    reset({ name: "", email: "", gender: "male" });
    dispatch(showModal(false))
  };

  return (
    <ModalComponent nameButton="Nuevo Usuario" title="Crear Usuario">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4"
      >
        <Label
          value="Nombre"
          className="block text-sm font-medium text-gray-700"
        />
        <TextInput
          placeholder="Nombre de usuario"
          {...register("name", { required: "El nombre es obligatorio" })}
          className="mt-1 block w-full"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
        <Label
          value="Email"
          className="block text-sm font-medium text-gray-700"
        />
        <TextInput
          type="email"
          placeholder="Correo Electrónico"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "El formato del email es inválido",
            },
          })}
          className="mt-1 block w-full"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <Label
          value="Género"
          className="block text-sm font-medium text-gray-700"
        />
        <Select
          {...register("gender", { required: "El género es obligatorio" })}
          className="mt-1 block w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        {errors.gender && (
          <span className="text-red-500 text-sm">{errors.gender.message}</span>
        )}
        <footer className="flex space-x-4">
          <Button
            type="submit"
            className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md "
          >
            Guardar
          </Button>
          <Button
            color="red"
            type="button"
            onClick={handleCancel}
            className="px-4 py-2  text-red-700 text-sm font-medium rounded-md  "
          >
            Borrar Datos
          </Button>
        </footer>
      </form>
    </ModalComponent>
  );
};
