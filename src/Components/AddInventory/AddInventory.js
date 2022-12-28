import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import '../../../src/Style/AddInventory/AddInventory.scss';
import auth from '../../Firebase/Firebase.init';
import '../../../src/Style/StockUpdate/StockUpdate.scss';

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const userEmail = user?.email;
    // console.log(userEmail);


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const image = event.target.imageUrl.value;
        const name = event.target.productName.value;
        const email = userEmail;
        console.log(email);

        const description = event.target.productDescription.value;
        const price = event.target.productPrice.value;
        const quantity = event.target.productQuantity.value;
        const suplierName = event.target.productSuplierName.value;

        const addNewItem = { image, name, description, price, quantity, suplierName, email };
        console.log(addNewItem);

        const url = `https://warehouse-server-nu.vercel.app/addItem`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addNewItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
                toast("Add Item successfully!!!");
                event.target.reset();

                // Adding reload button to show updated items on UI
                window.location.reload(false);
            });
    }

    return (
        <section className="add-inventory-form">
            <div className='container'>
                <h2 className='add-item-title'
                    data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-delay="250"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">Add a New Inventory Item</h2>
                <form className='add-item-form' action='/myItems' onSubmit={handleFormSubmit}>
                    <div className="input-group"
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <input className='img-field' type="url" name="imageUrl" id="" placeholder='Add Image Url' required />
                    </div>
                    <div className="input-group"
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="750"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <input className='product-name-field' type="text" name="productName" id="" placeholder='Product Name' required />
                    </div>
                    <div className="input-group"
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="1000"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <input className='product-description-field' type="text" name="productDescription" id="" placeholder='Product Description' required />
                    </div>
                    <div className="input-group" data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="1250"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <input className='product-price-field' type="number" name="productPrice" id="" placeholder='Product Price' required />
                    </div>
                    <div className="input-group" data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="1500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <input className='product-quantity-field' type="number" name="productQuantity" id="" placeholder='Product Quantity' required />
                    </div>
                    <div className="input-group"
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="1750"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <input type="text" name="productSuplierName" id="" placeholder='Suplier Name' required />
                    </div>
                    <input
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="2000"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false" className='new_item_btn' type="submit" value="Add Item" />
                </form>
            </div>
        </section>
    );
};

export default AddInventory;