import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";


const BrakingNews = () => {
    const publicAxios = useAxios()

    const handelBrakingNews = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const news_title = form.get("title");

        const news = { news_title };
        // send data to the server

        publicAxios.post('/news', news)
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

        <div className="py-12">
            <h2 className="text-4xl text-center font-bold">News Post</h2>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form onSubmit={handelBrakingNews}>
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">News</label><br />
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" id="title" required />
                            </div>

                            <button type="submit" className="p-3 bg-green-500 text-white hover:bg-green-600 rounded-md" required>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrakingNews;
