import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Badge from '@/Components/Badge';

export default function Show({ ticket }) {
    return (
        <AuthenticatedLayout header={ticket.title}>
            <div className="space-y-3 rounded bg-white p-4 shadow">
                <div className="flex gap-2">
                    <Badge value={ticket.priority} /> <Badge value={ticket.status} /> <span>{ticket.category}</span>
                </div>
                <p className="whitespace-pre-line">{ticket.description}</p>
                <Link href={route('tickets.index')} className="text-indigo-600">← Back</Link>
            </div>
        </AuthenticatedLayout>
    );
}