import React from 'react';

export interface ServerCoomponentProps {
    children?: React.ReactNode;
}

function ServerCoomponent({}: ServerCoomponentProps) {
    // console.log('ServerCoomponent:');
    return (
        <div>
            <span>Server component</span>
        </div>
    );
}

export default ServerCoomponent;
