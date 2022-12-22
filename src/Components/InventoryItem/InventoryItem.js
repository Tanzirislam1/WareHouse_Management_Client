import { Link } from 'react-router-dom';
import '../../../src/Style/InventoryItem/InventoryItem.css';

const InventoryItem = ({ item }) => {
    const { name, image, description, price, quantity, suplierName } = item || {};

    return (
        <div className='col-lg-4'>
            <div className="card">
                <img src={image} className="card-img-top card_img" alt="car-img" />
                <div className="card_body">
                    <h2 className="card_title">Name: {name}</h2>
                    <h3 className="card_text"><b>Description</b>: {description}</h3>
                    <h3 className='card_price'>Price: ${price}</h3>
                    <h3 className='card_suplierName'>Suplier: {suplierName}</h3>
                    <h3 className='card_quantity'>Quantity: {quantity}</h3>

                    <Link to={`/inventoryItem/${item._id}`}>
                        <button className="update_btn">Stock Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;