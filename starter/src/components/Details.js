import { Link, useNavigate } from "react-router-dom";

const Details = ({book}) =>{
    const navigate = useNavigate();

    
    return(
<div className="Details">
<div>{book.title}</div>
<button onClick={() => navigate(-1)}>Go Back</button>
</div>)};
export default Details;