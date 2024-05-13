import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./PostSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            );
            setTitle('');
            setContent('');
        }
    };

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    return (
        <div className="p-4">
            <section className="max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
                <form>
                    <label className="block mb-2">Post Title:</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3"
                        value={title}
                        onChange={onTitleChanged} />
                    <label className="block mb-2">Content:</label>
                    <textarea
                        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3"
                        value={content}
                        onChange={onContentChanged} />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        onClick={onSavePostClicked}>
                        Save Post
                    </button>
                </form>
            </section>
        </div>
    )
}

export default AddPostForm;
