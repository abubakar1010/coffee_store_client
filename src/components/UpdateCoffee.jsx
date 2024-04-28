import { Button, Input } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const data = useLoaderData()

    const  {_id, name, chef, supplier, taste, category, details,photo} = data;

    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target;

        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee = {name, chef, supplier, taste, category, details,photo}
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
        })
        .catch( error => {
            console.log(error.message);
        })
    }
    return (
        <form onSubmit={handleUpdate} >
        <div className=" flex justify-center items-center gap-6 my-12 px-64">
            <div className="w-full space-y-6">
                <label htmlFor="">Coffee Name</label>
                <Input label="Enter Coffee Name" name="name" defaultValue={name} className="" />
            </div>
            <div className="w-full space-y-6">
                <label htmlFor="">Chef</label>
                <Input label="Enter Chef Name" name="chef" defaultValue={chef} className="" />
            </div>
        </div>
        <div className=" flex justify-center items-center gap-6 my-12 px-64">
            <div className="w-full space-y-6">
                <label htmlFor="">Supplier</label>
                <Input label="Enter Coffee Supplier" defaultValue={supplier} name="supplier" className="" />
            </div>
            <div className="w-full space-y-6">
                <label htmlFor="">Taste</label>
                <Input label="Enter Coffee Taste" defaultValue={taste} name="taste" className="" />
            </div>
        </div>
        <div className=" flex justify-center items-center gap-6 my-12 px-64">
            
            <div className="w-full space-y-6">
                <label htmlFor="">Category</label>
                <Input label="Enter Category" defaultValue={category} name="category" className="" />
            </div>
            <div className="w-full space-y-6">
                <label htmlFor="">Details</label>
                <Input label="Enter Details" defaultValue={details} name="details" className="" />
            </div>
        </div>
        <div className=" flex justify-center items-center gap-6 my-12 px-64">
            <div className="w-full space-y-6">
                <label htmlFor="">Photo</label>
                <Input label="Enter Photo URL" name="photo" defaultValue={photo} className="" />
            </div>
        </div>
        
        
        <div className=" flex justify-center items-center px-64">
        <Button type="submit" className=" w-full ">Update Coffee</Button>
        </div>
        </form>
    );
};

export default UpdateCoffee;