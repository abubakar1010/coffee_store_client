import { Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Card = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, supplier, photo} = coffee

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            const remaining = coffees.filter( item => item._id != id )
            setCoffees(remaining)
        })
        
    }
    return (
        <div className=" flex items-center gap-12">
            <img src={photo} alt="" />
            <div>
                <p>{name}</p>
                <p>{chef}</p>
                <p>{supplier}</p>
                <div className=" flex gap-5 mt-4">
                    
                    <Button onClick={() => handleDelete(_id)}>DELETE</Button>
                    <Link to={`/updateCoffee/${_id}`}>
                    <Button>EDIT</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}

export default Card;