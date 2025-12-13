import { useParams } from 'react-router-dom';


export default function BlogPost() {
const { postId } = useParams();


return (
<div>
<h2 className="text-xl font-bold">Blog Post ID: {postId}</h2>
<p>This is content for post #{postId}.</p>
</div>
);
}