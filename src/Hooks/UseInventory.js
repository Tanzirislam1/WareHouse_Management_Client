const { useState, useEffect } = require("react")

const useInventory = () => {
    const [inventory, setInventory] = useState([]);
    // console.log(inventoryItems, 'inventory');

    useEffect(() => {
        fetch('http://localhost:5000/inventoryItems')
        .then(res => res.json())
        .then(data => setInventory(data))
    }, []);

    return [inventory, setInventory];
}

export default useInventory;