import React from 'react';

import AddCompanyButton from '@/app/components/add-company-button';

import { Status } from '@/app/components/status-label';
import Header from '@/app/components/Header';
import Toolbar from '@/app/components/ToolBar';
import SearchInput from '@/app/components/SearchInput';
import CompanyTable from '@/app/components/CompanyTable';
import CompanyRow from '@/app/components/CompanyRow';

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <>
            <Header>Companies</Header>
            <main>
                <Toolbar action={<AddCompanyButton />}>
                    <SearchInput />
                </Toolbar>
                <CompanyTable>
                    <CompanyRow
                        id={1}
                        category="Products"
                        company="Costco"
                        status={Status.Pending}
                        promotion={true}
                        country="USA"
                        joinedDate="02.19.2023"
                    />
                </CompanyTable>
            </main>
        </>
    );
}
