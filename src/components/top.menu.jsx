import {Link} from "react-router-dom";

function TopMenu() {
    return (

        <ul className="hidden space-x-2 md:inline-flex">
            <li><Link to={`profile`} className="px-4 py-2 font-semibold text-gray-600 rounded">Profile</Link></li>
            <li><Link to={`jobs`} className="px-4 py-2 font-semibold text-gray-600 rounded">Jobs</Link></li>
            <li><Link to={`messages`} className="px-4 py-2 font-semibold text-gray-600 rounded">Messages</Link></li>
            <li><Link to={`faq`} className="px-4 py-2 font-semibold text-gray-600 rounded">Faq</Link></li>
            <li><Link to={`account`} className="px-4 py-2 font-semibold text-gray-600 rounded">Account</Link></li>
        </ul>
    );
}

export default TopMenu;