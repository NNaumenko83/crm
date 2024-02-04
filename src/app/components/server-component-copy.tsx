import { headers } from 'next/headers';
import React from 'react';

export interface ServerCoomponentCopyProps {
    children?: React.ReactNode;
}

function ServerCoomponentCopy({}: ServerCoomponentCopyProps) {
    // console.log('ServerCoomponentCopy:');
    // console.log(headers());

    return (
        <div>
            <span>Server component copy</span>
        </div>
    );
}

export default ServerCoomponentCopy;
