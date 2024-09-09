import { Link } from "react-router-dom";

export function Menu()
{
    return(
    <>
    
    <nav>
        <Link to="/">Bio</Link>
        <Link to="/pictures">Pictures</Link>
        <Link to="/gallery">Gallery</Link>
    </nav>



    </>


    );
}