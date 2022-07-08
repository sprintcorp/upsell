import React from 'react';
import button from 'react-bootstrap/Button';
export default function Button({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={
                `btn btn-dark btn-sm ml-3 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
