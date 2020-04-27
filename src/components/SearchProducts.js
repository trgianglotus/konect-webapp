import React, { Component } from 'react';

class SearchProducts extends Component {
    render() {
        return (
            <div className="search-products row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            id="SearchApts"
                            type="text"
                            className="form-control"
                            aria-label="Search products"
                            onChange={e => this.props.searchApts(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by <span className="caret" />
                            </button>

                            <div className="sort-menu dropdown-menu dropdown-menu-right">
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === "productName" ? "active" : '')
                                } href="#"
                                    onClick={e => this.props.changeOrder('productName', this.props.orderDir)}
                                >
                                    Product Name
                    </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === "postedDate" ? "active" : '')
                                } href="#"
                                    onClick={e => this.props.changeOrder('postedDate', this.props.orderDir)}
                                >
                                    Date
                    </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === "supplierName" ? "active" : '')
                                } href="#"
                                    onClick={e => this.props.changeOrder('supplierName', this.props.orderDir)}
                                >
                                    Supplier
                    </button>
                                <div role="separator" className="dropdown-divider" />
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === "asc" ? "active" : '')
                                } href="#"
                                    onClick={e => this.props.changeOrder(this.props.orderBy, 'asc')}
                                >
                                    Asc
                    </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === "desc" ? "active" : '')
                                } href="#"
                                    onClick={e => this.props.changeOrder(this.props.orderBy, 'desc')}
                                >
                                    Desc
                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchProducts;