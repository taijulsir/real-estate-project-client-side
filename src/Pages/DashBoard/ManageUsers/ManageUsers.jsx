
import { useQuery } from "@tanstack/react-query";
import { GrUserAdmin } from "react-icons/gr";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
import { RiUserForbidLine } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
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
            confirmButtonText: "Yes, delete it!"
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
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white font-[sans-serif]">
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
                                        <img src={user.photoURL} className="w-9 h-9 rounded-full shrink-0" />
                                        <div className="ml-4">
                                            <p className="text-base text-gray-400 ">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-lg">
                                    {user?.role}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => handleRole(user._id, { role: "admin" })} className="mr-4 btn bg-amber-500 ">
                                        <GrUserAdmin className="text-2xl"></GrUserAdmin>
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => handleRole(user._id, { role: "agent" })} className="mr-4 btn bg-amber-500">
                                        <LuUserCog className="text-2xl "></LuUserCog>
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="mr-4 btn bg-amber-500">
                                        <RiUserForbidLine className="text-2xl "></RiUserForbidLine>
                                    </button>
                                </td>
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