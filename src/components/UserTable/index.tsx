import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchUsers } from "../../store/utils";
import { Loading } from "../../components";

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

  if (error) return <p>Error: {error}</p>;

  return (
    <section className="w-11/12 mx-auto my-10">
      <h2 className="font-bold text-4xl mb-6">Lista de Usuarios</h2>
      <header className="flex mb-10">
        <button
          className="mr-3 rounded-lg sm:w-1/4 bg-teal-500 h-16 px-6 text-lg font-bold  transition-all text-white"
          data-ripple-light="true"
        >
          Nuevo Usuario
        </button>
        <input
          type="text"
          placeholder="Search by ID, name, email, gender, or status"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" p-2 border-2 border-teal-300 rounded w-full focus:outline-none focus:ring-1 focus:ring-teal-700"
        />
      </header>
      {loading ? <Loading/>:<>
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
                <td className="bg-teal-400 text-white font-bold p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    ID:
                  </span>
                  {user.id}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Name:
                  </span>
                  {user.name}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Email:
                  </span>
                  {user.email}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    GENDER:
                  </span>
                  {user.gender}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    STATUS:
                  </span>
                  {user.status}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell border-teal-300 border-2 hover:bg-gray-300">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions:
                  </span>
                  <button>Ver</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
      </>}
    </section>
  );
};
