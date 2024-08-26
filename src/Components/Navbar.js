import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="nav">
            <Link to="/" className="site-title">
                Home
            </Link>
            <ul>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/delete">Delete</Link></li>
            </ul>
        </nav>
    )
}