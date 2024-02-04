'use client';
import React from 'react';
import ServerCoomponentCopy from './server-component-copy';

export interface ClientCoomponentProps {
    children?: React.ReactNode;
}

function ClientCoomponent({ children }: ClientCoomponentProps) {
    // console.log('ClientCoomponent:');
    return (
        <div>
            <span>Client component</span>
            {children}
        </div>
    );
}

export default ClientCoomponent;
