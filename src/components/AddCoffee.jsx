
import {
    Button,
    Input,
} from "@material-tailwind/react";


const AddCoffee = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;

        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value

        const newCoffee = {name, chef, supplier, taste, category, details}
        console.log(newCoffee);
    }

    return (
        <>
        <form onSubmit={handleSubmit} >
        <div className=" flex justify-center items-center gap-6 my-12 px-64">
            <div className="w-full space-y-6">
                <label htmlFor="">Coffee Name</label>
                <Input label="Enter Coffee Name" name="name" className="" />
            </div>
            <div className="w-full space-y-6">
                <label htmlFor="">Chef</label>
                <Input label="Enter Chef Name" name="chef" className="" />
            </div>
        </div>
        <div className=" flex justify-center items-center gap-6 my-12 px-64">
            <div className="w-full space-y-6">
                <label htmlFor="">Supplier</label>
                <Input label="Enter Coffee Supplier" name="supplier" className="" />
            </div>
            <div className="w-full space-y-6">
                <label htmlFor="">Taste</label>
                <Input label="Enter Coffee Taste" name="taste" className="" />
            </div>
        </div>
        <div className=" flex justify-center items-center gap-6 my-12 px-64">
            
            <div className="w-full space-y-6">
                <label htmlFor="">Category</label>
                <Input label="Enter Category" name="category" className="" />
            </div>
            <div className="w-full space-y-6">
                <label htmlFor="">Details</label>
                <Input label="Enter Details" name="details" className="" />
            </div>
        </div>
        <div className=" flex justify-center items-center px-64">
        <Button type="submit" className=" w-full ">Add Coffee</Button>
        </div>
        </form>
        </>
    );
};

export default AddCoffee;
