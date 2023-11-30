
import { useQuery } from "@tanstack/react-query";
import { GrUserAdmin } from "react-icons/gr";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { GiHandcuffed } from "react-icons/gi";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    // fetching data by tanstaq query
    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    // handle user delete 
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
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
    // handle user role
    const handleRole = (id, role) => {
        Swal.fire({
            title: `Are you sure make ${role.role} this user?`,
            text: "You won't be change this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update role!"
        }).then((result) => {
            const updateRole = role
            console.log(updateRole)
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`, updateRole)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Updaated!",
                                text: `Succes ,Now This user is ${role.role}`,
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    // handle fraud agent
    const handleFraud = (id, status) => {
        Swal.fire({
            title: "Are you sure make fraud?",
            text: "You won't recover it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make this user fraud!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/users/fraud/${id}`, status)
                console.log(res.data)
                if (res.data.statusResult.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div>
            <HelmetTitle title={`Luxury Real State || Manage Users`}></HelmetTitle>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white font-[sans-serif]">

                    {/* table heading */}
                    <thead className="bg-gray-800 whitespace-nowrap">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Make Admin
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Make Agent
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Make Fraud
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {/* dynamically mapping table data */}
                        {users?.map((user, index) =>
                            <tr key={index} className="even:bg-blue-50">
                                <td className="px-6 py-4 text-sm ">
                                    <p className="w-1/2 bg-slate-200 text-center"> {index + 1}</p>
                                </td>
                                <td className="px-6 py-4 text-lg">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <div className="flex items-center cursor-pointer">
                                        <img src={user.photoURL} className="w-12 h-12 rounded-full shrink-0 object-cover" />
                                        <div className="ml-4">
                                            <p className="text-base text-gray-400 ">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-lg">
                                    {user?.role}
                                </td>
                                {/* make admin */}
                                <td className="px-6 py-4">
                                    {
                                        user?.status === "Fraud" ?
                                            <td className="px-6 py-4 text-lg text-red-600">
                                                {user?.status}
                                            </td>
                                            : <button onClick={() => handleRole(user._id, { role: "admin" })} className="mr-4 btn bg-amber-500 ">
                                                <GrUserAdmin className="text-2xl"></GrUserAdmin>
                                            </button>
                                    }
                                </td>
                                {/* make agent */}
                                <td className="px-6 py-4">
                                    {
                                        user?.status === "Fraud" ?
                                            <td className="px-6 py-4 text-lg text-red-600">
                                                {user?.status}
                                            </td>
                                            : <button onClick={() => handleRole(user._id, { role: "agent" })} className="mr-4 btn bg-amber-500">
                                                <LuUserCog className="text-2xl "></LuUserCog>
                                            </button>
                                    }
                                </td>
                                {/* make fraud */}
                                <td className="px-6 py-4">
                                    {
                                        user?.status === "Fraud" ?
                                            <td className="px-6 py-4 text-lg text-red-600">
                                                {user?.status}
                                            </td>
                                            : <button
                                                onClick={() => handleFraud(user?._id, { status: "Fraud" })}
                                                disabled={user?.role === "user" || user?.role === "admin"} className="mr-4 btn bg-amber-500">
                                                <GiHandcuffed className="text-2xl text-red-700 "></GiHandcuffed>
                                            </button>
                                    }
                                </td>
                                {/* Delete user */}
                                <td className="px-6 py-4 text-sm">
                                    <button onClick={() => handleDelete(user._id)} className="mr-4 btn bg-red-500">
                                        <MdOutlineDelete className="text-2xl "></MdOutlineDelete>
                                    </button>
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;