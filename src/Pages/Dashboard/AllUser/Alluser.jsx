import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const AllUsers = () => {
    const publicAxios = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await publicAxios.get('/users');
            return res.data;
        }
    });

    const handleMakeRole = (user, role) => {
        Swal.fire({
            title: `Are you sure you want to make ${user.name} a ${role}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, Make ${role}`
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.patch(`/users/${role}/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                icon: "success",
                                title: `${user.name} is now a ${role}!`,
                            });
                        }
                    })
            }
        });
    }

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl bg-green-400 text-white  px-10 py-6 rounded-md">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Client Id</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.clientId}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : user.role === 'client' ? 'Client' : (
                                        <div className="flex justify-start">
                                            <button
                                                onClick={() => handleMakeRole(user, 'admin')}
                                                className="btn text-white bg-green-500 hover:bg-green-600">
                                                Admin
                                            </button>
                                            <button
                                                onClick={() => handleMakeRole(user, 'client')}
                                                className="btn  bg-green-500 hover:bg-green-600">
                                                <FaUsers className="text-white text-xl"></FaUsers>
                                            </button>
                                        </div>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
