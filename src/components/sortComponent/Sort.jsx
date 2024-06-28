import React from "react"
import './Sort.css'
const Sort = ({ handleSort }) => {
    const handleSortChange = (event) => {
        handleSort(event.target.value);
    };

    return (
        <div className="sort-cont">
            <div className="sort-section">
                <label className="form-label" htmlFor="selection">sort by :</label>
                <select
                    className="form-select form-select-lg"
                    name="sort"
                    id="selection"
                    onChange={handleSortChange}
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div>
        </div>
    )
}

export default Sort
