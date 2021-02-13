import React from 'react'
import '../Styles/style.css'
import '../Styles/Responsive.css'
function Header({data}) {
    return (
        <div className="header">
            <div className="header-text">
                <h1>World Countries Data</h1>
                <h3>Currently, We Have {data.length} Countries</h3>
            </div>
        </div>
    )
}

export default Header
