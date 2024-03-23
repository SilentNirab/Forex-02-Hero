import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const AddPost = () => {
    const { user } = useAuth()
    const publicAxios = useAxios()


    const handelAddPost = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const post_image = form.get("image");
        const post_name = form.get("name");
        const description = form.get("description");

        const post = { post_image, post_name,  description };
        // send data to the server

        publicAxios.post('/posts', post)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Post added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.error("Error adding post:", error);
            });
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-4">Add Your Products</h2>
            <form onSubmit={handelAddPost} className="card-body 2 max-w-md mx-auto">

                <input type="text" name="image" placeholder="Image" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <input type="text" name="name" placeholder="Name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />

                {/* user info */}
                <input type="text" name="user_name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.displayName} required />
                <input type="text" name="user_photo" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.photoURL} required />
                <input type="text" name="user_email" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.email} required />

                <textarea name="description" placeholder="Short description" className=" border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" ></textarea>
                <div className="form-control mt-6">

                    <button className="bg-black w-full text-white text-md font-bold px-4 py-2 rounded-md">Add Product</button>

                </div>
            </form >
        </div >
    );
};

export default AddPost;
