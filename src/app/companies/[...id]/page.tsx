import React from 'react';
import AddCompanyButton from '@/app/components/add-company-button';

import { Status } from '@/app/components/status-label';
import Header from '@/app/components/Header';

export interface PageProps {
    params: { id: string[] };
}

export default function Page({ params }: PageProps) {
    return (
        <>
            <Header>Companies ({params.id.toString()})</Header>
            <p>{new Date().toTimeString()}</p>
        </>
    );
}
