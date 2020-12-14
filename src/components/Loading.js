import { CircularProgress } from '@material-ui/core';
import React from 'react'

function Loading() {
    return (
        <div className="loading-container">
            <CircularProgress />
        </div>
    )
}

export default Loading;
