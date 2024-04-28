import { Button } from "@material-tailwind/react";


const Card = ({coffee}) => {
    const {_id, name, chef, supplier, taste, category, details,photo} = coffee

    const handleDelete = (id) => {
        console.log(id);
    }
    return (
        <div className=" flex items-center gap-12">
            <img src={photo} alt="" />
            <div>
                <p>{name}</p>
                <p>{chef}</p>
                <p>{supplier}</p>
                <div className=" flex gap-5 mt-4">
                    <Button>EDIT</Button>
                    <Button onClick={() => handleDelete(_id)}>DELETE</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;