import React from 'react';


const Loader = ({className, alignment}) => (
    <div className={alignment}>
        <div className={`spinner-border ${className}`} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    );

export default Loader;
