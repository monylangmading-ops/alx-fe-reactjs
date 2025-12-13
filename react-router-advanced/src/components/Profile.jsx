import { Link, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';


export default function Profile() {
return (
<div>
<h2 className="text-xl font-bold">User Profile</h2>


<nav className="flex gap-4 my-3">
<Link to="details" className="underline">Details</Link>
<Link to="settings" className="underline">Settings</Link>
</nav>


<Routes>
<Route path="details" element={<ProfileDetails />} />
<Route path="settings" element={<ProfileSettings />} />
</Routes>
</div>
);
}

