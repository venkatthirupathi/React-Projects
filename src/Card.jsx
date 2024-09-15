import profilepic from "./assets/profile.jpeg";

import './index.css'

function Card()
{
    return(

<div className="Card">
<img   className="Card-image" src={profilepic} placeHolder="https://via.placeHolder.150"  alt="Venkat" width={200} height={200}></img>
<h2 className="card-title">Venkat</h2>
<p className="card-text">Interested in Travelling</p>



</div>




    );
}
export default Card;