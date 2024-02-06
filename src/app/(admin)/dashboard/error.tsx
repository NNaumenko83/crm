'use client';

import Button from '@/app/components/button';
import React from 'react';

export interface ErrorComponentProps {
    error: Error;
    reset: () => void;
}

export default function error({ error, reset }: ErrorComponentProps) {
    return (
        <div>
            <p>{`Something went wroong ${error}`}</p>
            <Button onClick={() => reset()}> Try again</Button>
        </div>
    );
}
