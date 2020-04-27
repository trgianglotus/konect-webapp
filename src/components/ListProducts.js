import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListProducts extends Component {
    render() {
        return (
            <div className="product-list item-list mb-3">
                {this.props.products.map(item => (
                    <div className="pet-item col media py-3" key={item.aptId}>
                        <div className="mr-3">
                            <button className="pet-delete btn btn-sm btn-danger"
                                onClick={() => this.props.deleteProduct(item)}
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="pet-info media-body">
                            <div className="pet-head d-flex">
                                <span className="pet-name"
                                    contentEditable
                                    suppressContentEditableWarning
                                    onBlur={e => this.props.updateInfo('productName', e.target.innerText, item.aptId)}
                                >{item.productName}</span>
                                <span className="apt-date ml-auto">
                                    <Moment
                                        date={item.postedDate}
                                        parse="YYYY-MM-dd hh:mm"
                                        format="MMM-D h:mma"
                                    />
                                </span>
                            </div>

                            <div className="owner-name"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={e => this.props.updateInfo('supplierName', e.target.innerText, item.aptId)}
                            >
                                <span className="label-item">Supplier: </span>
                                <span>{item.supplierName}</span>
                            </div>
                            <div className="apt-notes"
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={e => this.props.updateInfo('productDesc', e.target.innerText, item.aptId)}
                            >{item.productDesc}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListProducts;