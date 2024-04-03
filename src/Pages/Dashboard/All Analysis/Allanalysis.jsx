import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";

const Allnalysis = () => {
    const publicAxios = useAxios();
    const { data: analysis = [], refetch } = useQuery({
        queryKey: ['analysis'],
        queryFn: async () => {
            const res = await publicAxios.get('/analysis');
            return res.data;
        }
    });


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.delete(`/analysis/${id}`)
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
            <h2 className="text-center font-bold text-3xl">All Posts</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Analysis Title</th>
                            <th>Category</th> 
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            analysis.map((post, index) => (
                                <tr key={post._id}>
                                    <td>{index + 1}</td>
                                    <td>{post.post_title}</td>
                                    <td>{post.post_category}</td>
                                    <td><button onClick={() => handleDelete(post._id)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allnalysis;
