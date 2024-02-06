import MagicButton from '@/app/components/magic-buttoon';
import React from 'react';

interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <main>
            <h1 className="text-xl">Dashboard</h1>
            <MagicButton />
        </main>
    );
}
