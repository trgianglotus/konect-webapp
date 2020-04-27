import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';



class AddProducts extends Component {

    constructor() {
        super();
        this.state = {
            productName: '',
            supplierName: '',
            postedDate: '',
            aptTime: '',
            productDesc: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleAdd(e) {
        e.preventDefault();
        let tempApt = {
            productName: this.state.productName,
            supplierName: this.state.supplierName,
            postedDate: this.state.postedDate,
            aptTime: this.state.aptTime,
            productDesc: this.state.productDesc,
        }
        this.props.addProduct(tempApt);
        this.setState({
            productName: '',
            supplierName: '',
            postedDate: '',
            aptTime: '',
            productDesc: '',
        });
        this.props.toggleForm();
    }

    render() {
        return (
            <div className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-product')
            }>
                <div className="apt-addheading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}>
                    <FaPlus /> Add Product
            </div>

                <div className="card-body">
                    <form id="aptForm" noValidate
                        onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="productName"
                                readOnly
                            >
                                Product Name
                  </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="productName"
                                    placeholder="Product Name"
                                    value={this.state.productName}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="supplierName"
                            >
                                Supplier
                  </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="supplierName"
                                    placeholder="Supplier's Name"
                                    value={this.state.supplierName}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="postedDate"
                            >
                                Date
                  </label>
                            <div className="col-md-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="postedDate"
                                    id="postedDate"
                                    value={this.state.postedDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="aptTime"
                            >
                                Time
                  </label>
                            <div className="col-md-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="aptTime"
                                    id="aptTime"
                                    value={this.state.aptTime}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="productDesc">
                                Description
                  </label>
                            <div className="col-md-10">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    cols="50"
                                    name="productDesc"
                                    id="productDesc"
                                    placeholder="Description"
                                    value={this.state.productDesc}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block ml-auto"
                                >
                                    Add Product
                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProducts;