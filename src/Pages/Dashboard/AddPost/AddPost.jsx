import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddPost = () => {
    const publicAxios = useAxios()
    const [content, setContent] = useState('');

    const handleEditorChange = (value) => {
        setContent(value);
    };



    const handelAddPost = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const post_title = form.get("title");
        const post_content = content;
        const image = form.get("image");
        const Data = new FormData()
        Data.append("image", image)
        fetch(`https://api.imgbb.com/1/upload?key=ce2333bf62321691c88f982c14b6daba`, {
            method: "POST",
            body: Data
        })
            .then(res => res.json())
            .then(data => {
                const post = { image : data.data.url, post_title, post_content };
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
            })

        
    }
    return (

        <div className="py-12">
            <h2 className="text-4xl text-center font-bold">Create New Post</h2>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form onSubmit={handelAddPost}>
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Title</label><br />
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" id="title" required />
                            </div>

                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Thumbnail Image</label><br />
                                <input type="file" className="border-2 border-gray-300 p-2 w-full" name="image" id="description" required />
                            </div>

                            <div className="mb-8">
                                <label className="text-xl text-gray-600">Content</label><br />
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    name="content"
                                    onChange={handleEditorChange}
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ size: [] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' },
                                            { 'indent': '-1' }, { 'indent': '+1' }],
                                            ['link'],
                                            ['clean']
                                        ]
                                    }}
                                />
                            </div>
                            <button type="submit" className="p-3 bg-green-500 text-white hover:bg-green-600 rounded-md" required>Submit Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
