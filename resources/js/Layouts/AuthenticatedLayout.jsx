import { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const { auth, flash } = usePage().props;   // both come from HandleInertiaRequests
    const [show, setShow] = useState(false);

    // Show the message, hide it after 4 seconds
    useEffect(() => {
        if (flash.success) {
            setShow(true);
            const t = setTimeout(() => setShow(false), 4000);
            return () => clearTimeout(t);
        }
    }, [flash.success]);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="flex flex-wrap items-center gap-4 bg-white px-4 py-3 shadow">
                <b>{auth.user.name}</b>
                <Link href={route('dashboard')}>Dashboard</Link>
                <Link href={route('tickets.index')}>Tickets</Link>
                <Link href={route('tickets.create')} className="rounded bg-indigo-600 px-3 py-1 text-white">New Ticket</Link>
                <Link href={route('logout')} method="post" as="button" className="ml-auto">Logout</Link>
            </nav>

            {show && (
                <div className="mx-auto mt-4 flex max-w-4xl justify-between rounded bg-green-100 px-4 py-3 text-green-800">
                    <span>{flash.success}</span>
                    <button onClick={() => setShow(false)}>×</button>
                </div>
            )}

            <main className="mx-auto max-w-4xl px-4 py-6">
                {header && <h1 className="mb-4 text-xl font-semibold">{header}</h1>}
                {children}
            </main>
        </div>
    );
}