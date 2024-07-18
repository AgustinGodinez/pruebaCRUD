import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteUser, fetchUsers } from "../../store/utils";
import { CreateUser, ErrorComp, LoadingTable } from "../../components";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import View from "/View.svg";
import Delete from "/Delete.svg";
import Edit from "/Edit.svg";

export const UserTable = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
          user.id.toString().includes(lowerCaseSearchTerm) ||
          user.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          user.email.toLowerCase().includes(lowerCaseSearchTerm) ||
          user.gender.toLowerCase().includes(lowerCaseSearchTerm) ||
          user.status.toLowerCase().includes(lowerCaseSearchTerm)
        );
      })
    );
  }, [users, searchTerm]);

  const handleDelete = (id: number, name: string) => {
    Swal.fire({
      title: `¿Estas seguro que quieres eliminar a ${name}?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      confirmButtonColor: "#FF3B3B",
      denyButtonText: `No`,
      denyButtonColor: "#22B371",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
        Swal.fire({
          title: "Usuario Eliminado",
          icon: "success",
          iconColor: "red",
        });
      }
    });
  };

  if (error) return <ErrorComp message={error} />;

  return (
    <section className="w-11/12 mx-auto my-10">
      <h2 className="font-bold text-4xl mb-6">Lista de Usuarios</h2>
      <header className="flex mb-10">
        <CreateUser />
        <input
          type="text"
          placeholder="Search by ID, name, email, gender, or status"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" p-2 border-2 border-teal-300 rounded w-full focus:outline-none focus:ring-1 focus:ring-teal-700"
        />
      </header>
      {loading ? (
        <LoadingTable />
      ) : (
        <>
          <table className="w-full border-collapse block md:table">
            <thead className="block md:table-header-group text-white">
              <tr className="bg-teal-400 md:border-none block md:table-row max-md:hidden">
                <th className="p-3 border-x-2 font-bold md:border md:border-teal-100 text-center">
                  ID
                </th>
                <th className="p-3 border-x-2 font-bold md:border md:border-teal-100 text-center">
                  Name
                </th>
                <th className="p-3 border-x-2 font-bold md:border md:border-teal-100 text-center">
                  Email
                </th>
                <th className="p-3 border-x-2 font-bold md:border md:border-teal-100 text-center">
                  Gender
                </th>
                <th className="p-3 border-x-2 font-bold md:border md:border-teal-100 text-center">
                  Status
                </th>
                <th className="p-3 border-x-2 font-bold md:border md:border-teal-100 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="md:hover:bg-gray-300 md:border-none block md:table-row mb-8"
                >
                  <td className=" capitalize bg-teal-400 text-white font-bold p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      ID:
                    </span>
                    {user.id}
                  </td>
                  <td className=" capitalize p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Name:
                    </span>
                    {user.name}
                  </td>
                  <td className=" capitalize p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Email:
                    </span>
                    {user.email}
                  </td>
                  <td className=" capitalize p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      GENDER:
                    </span>
                    {user.gender}
                  </td>
                  <td className=" capitalize p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      STATUS:
                    </span>
                    {user.status}
                  </td>
                  <td className=" capitalize p-2 md:border md:border-grey-500 text-left flex md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Actions:
                    </span>
                    <div className="flex space-x-4 justify-center">
                      <NavLink to={`/usuario/${user.id}`}>
                        <img
                          src={View}
                          alt="View User Icon"
                          className="h-6 w-6 text-blue-600"
                        />
                      </NavLink>
                      <NavLink to={`/editar/${user.id}`}>
                        <img
                          src={Edit}
                          alt="View User Icon"
                          className="h-6 w-6 text-teal-600"
                        />
                      </NavLink>
                      <button onClick={() => handleDelete(user.id, user.name)}>
                        <img
                          src={Delete}
                          alt="Delete icon"
                          className="h-6 w-6 text-red-600"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};
