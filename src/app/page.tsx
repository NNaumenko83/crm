import AddCompanyButton from './components/add-company-button';
// import StatusLabel, { Status } from './components/status-label';

export default function Home() {
    return (
        <main>
            <AddCompanyButton>Add company</AddCompanyButton>
            <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
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
