import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sort<span className="far fa-caret-square-down ml-5"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>
                                <a role="button">
                                    <span className="fa fa-sort-alpha-down pr-5">
                                    </span>
                                    Name A-Z
                                </a>
                            </li>
                            <li>
                                <a role="button">
                                    <span className="fa fa-sort-alpha-up pr-5">
                                    </span>
                                    Name Z-A
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li><a role="button">Active</a></li>
                            <li><a role="button">Inactive</a></li>
                        </ul>
                    </div>
        );
    }
}

export default Sort;