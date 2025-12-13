import { useQuery } from '@tanstack/react-query';


export default function PostsComponent() {


const fetchPosts = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
return res.json();
};

const { data, isLoading, error: error, refetch } = useQuery({
refetchOnWindowFocus: true,
keepPreviousData: true,
queryKey: ['posts'],
queryFn: fetchPosts,
staleTime: 30000,
cacheTime: 60000,
});


return (
<div className="max-w-2xl w-full p-4 border rounded-xl shadow">
<h2 className="text-xl font-semibold mb-4">Posts (with caching + refetch)</h2>


{isLoading && <p className="text-blue-500">Loading posts...</p>}
{error && <p className="text-red-500">Failed to fetch posts </p>}


<button
onClick={() => refetch()}
className="bg-green-600 text-white px-3 py-2 rounded mb-4"
>
Refetch Posts
</button>


<ul className="flex flex-col gap-3">
{data?.slice(0, 10).map((post) => (
<li key={post.id} className="border p-3 rounded bg-gray-50">
<h3 className="font-bold text-lg">{post.title}</h3>
<p className="text-sm">{post.body}</p>
</li>
))}
</ul>
</div>
);
}