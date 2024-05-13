import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostSlice";

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderPosts = posts.map(post => (
        <article key={post.id} className="bg-gray-500 p-4 rounded shadow mb-4 border border-black border-solid border-1">
            <h3 className="text-white font-semibold mb-2 text-3xl ">{post.title}</h3>
            <p className="text-gray-100">{post.content.substring(0, 100)}</p>
        </article>
    ));

    return (
        <div className="container mx-auto mt-12">
            <section className="text-center">
                <h2 className="text-5xl font-semibold uppercase mb-8">Posts</h2>
                <div className="mx-auto max-w-lg">
                    {renderPosts}
                </div>
            </section>
        </div>
    );
}

export default PostList;
