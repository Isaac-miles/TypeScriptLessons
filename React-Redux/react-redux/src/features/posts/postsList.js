// import { useSelector } from "react-redux";
// import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
// import PostsExcerpt from "./PostsExcerpt";

// const PostsList = () => {

//     const orderedPostIds = useSelector(selectPostIds)
//     const postStatus = useSelector(getPostsStatus);
//     const error = useSelector(getPostsError);

//     let content;
//     if (postStatus === 'loading') {
//         content = <p>"Loading..."</p>;
//     } else if (postStatus === 'succeeded') {
//         content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
//     } else if (postStatus === 'failed') {
//         content = <p>{error}</p>;
//     }

//     return (
//         <section>
//             {content}
//         </section>
//     )
// }
// export default PostsList

import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from './postsSlice';

const PostsList = () => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery('getPosts')

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = posts.ids.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}
export default PostsList