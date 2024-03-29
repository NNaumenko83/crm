import ClientCoomponent from './components/ClientCoomponent';
import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-buttoon';
import ServerCoomponent from './components/server-component';
import ServerCoomponentCopy from './components/server-component-copy';

// import StatusLabel, { Status } from './components/status-label';

export default function Home() {
    return (
        <main>
            <AddCompanyButton>Add company</AddCompanyButton>
            <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
            <MagicButton />
            {/* <ServerCoomponent />
            <ClientCoomponent>
                <ServerCoomponentCopy />
            </ClientCoomponent> */}

            {/* <StatusLabel status={Status.Active} disabled={false}>
                Active
            </StatusLabel>
            <StatusLabel status={Status.NotActive} disabled={true}>
                Not Active
            </StatusLabel>
            <StatusLabel status={Status.Pending} disabled={false}>
                Pending
            </StatusLabel>
            <StatusLabel status={Status.Suspended} disabled={false}>
                Suspended
            </StatusLabel> */}
        </main>
    );
}
