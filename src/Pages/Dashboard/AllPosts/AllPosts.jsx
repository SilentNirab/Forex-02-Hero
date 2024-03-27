import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";

const AllPosts = () => {
    const publicAxios = useAxios();
    const { data: posts = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await publicAxios.get('/posts');
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
                publicAxios.delete(`/posts/${id}`)
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
        // Function to strip HTML tags and keep inline styles
        // const stripHtmlTagsAndKeepStyle = (html) => {
        //     const div = document.createElement("div");
        //     div.innerHTML = html;
        //     const children = div.childNodes;
        //     let result = '';
        //     for (let i = 0; i < children.length; i++) {
        //         result += children[i].outerHTML || children[i].nodeValue || '';
        //     }
        //     return result;
        // }
    return (
        <div>
            <h2 className="text-center font-bold text-3xl">All Posts</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Post Title</th>
                            {/* <th>Content</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index) => (
                                <tr key={post._id}>
                                    <td>{index + 1}</td>
                                    <td>{post.post_title}</td>
                                    {/* Sanitize HTML content before rendering */}
                                    {/* <td dangerouslySetInnerHTML={{ __html: stripHtmlTagsAndKeepStyle(post.post_content) }} /> */}
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

export default AllPosts;
