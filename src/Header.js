import "./Assets/css/Header.css"
import { Link } from "react-router-dom"

function Header(){
    return(
        <div className="Header">
            <div className="title_header">WatchList</div>
            <div className="navbar">
                <div> <Link to="/" className="options"> Watchlist</Link></div>
                <div><Link to="/watched" className="options"> Watched</Link></div>
                <div className="Add"> <Link to="/add" className="options"> + ADD </Link></div>

            </div>
        </div>
    )

}
export default Header