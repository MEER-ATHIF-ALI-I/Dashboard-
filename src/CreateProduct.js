import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProductContext from './ProductsContext';

function CreateProducts() {
    const { products, setProducts } = useContext(ProductContext);
    const [productName, setProductName] = useState('');
    const [productCompany, setProductCompany] = useState('');
    const [productType, setProductType] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [price, setPrice] = useState('');
    let history = useHistory();
    let handleSubmit = (e) => {
        e.preventDefault();
        let obj = { productName, productCompany, type: productType, availableFrom, price };
        setProducts([...products, obj]);
        history.push('/products');
    }
    return (
        <div>
            <h3 className="ml-3">Create New Products</h3>

            <div className="container p-3 ">
                <form onSubmit={handleSubmit}>
                    <div className="row p-1">
                        <div className="col-lg-6">
                            <label>Product Name</label>
                            <input type="text" value={productName} onChange={(e) => { setProductName(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Product Company</label>
                            <input type="text" value={productCompany} onChange={(e) => { setProductCompany(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row p-1">
                        <div className="col-lg-6">
                            <label>Product Type</label>
                            <input type="text" value={productType} onChange={(e) => { setProductType(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Available From</label>
                            <input type="date" value={availableFrom} onChange={(e) => { setAvailableFrom(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row p-1 mb-4">
                        <div className="col-lg-6">
                            <label>Price</label>
                            <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row p-1 submitbtn">
                        <input type="submit" value="Submit" className="btn btn-primary " />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default CreateProducts