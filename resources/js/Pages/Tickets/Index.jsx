import { Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Badge from '@/Components/Badge';

export default function Index({ tickets }) {
    const remove = (id) => {
        if (confirm('Delete this ticket?')) router.delete(route('tickets.destroy', id)); // asks first
    };

    return (
        <AuthenticatedLayout header="My Tickets">
            {/* Empty state */}
            {tickets.data.length === 0 && (
                <div className="rounded bg-white p-8 text-center shadow">
                    You have no tickets yet. <Link href={route('tickets.create')} className="text-indigo-600">Create one</Link>
                </div>
            )}

            {/* One stacked card per ticket */}
            <div className="space-y-3">
                {tickets.data.map((t) => (
                    <div key={t.id} className="rounded bg-white p-4 shadow">
                        <div className="flex flex-wrap justify-between gap-2">
                            <Link href={route('tickets.show', t.id)} className="font-semibold text-indigo-700">{t.title}</Link>
                            <div className="flex gap-2"><Badge value={t.priority} /><Badge value={t.status} /></div>
                        </div>
                        <div className="mt-3 flex gap-4 text-sm">
                            <Link href={route('tickets.edit', t.id)}>Edit</Link>
                            <button onClick={() => remove(t.id)} className="text-red-600">Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Page buttons (Laravel gives the links) */}
            <div className="mt-6 flex flex-wrap gap-1">
                {tickets.links.map((l, i) => l.url && (
                    <Link key={i} href={l.url}
                        className={`rounded border px-3 py-1 text-sm ${l.active ? 'bg-indigo-600 text-white' : 'bg-white'}`}>
                        {l.label.replace('&laquo; ', '').replace(' &raquo;', '')}
                    </Link>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}