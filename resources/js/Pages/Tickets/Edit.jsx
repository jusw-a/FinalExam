import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TicketForm from '@/Components/TicketForm';

export default function Edit({ ticket, ...options }) {
    // Starts pre-filled with the ticket's current values
    const form = useForm({
        title: ticket.title, description: ticket.description,
        priority: ticket.priority, status: ticket.status, category: ticket.category,
    });

    return (
        <AuthenticatedLayout header="Edit Ticket">
            <TicketForm form={form} options={options} label="Save changes"
                onSubmit={(e) => { e.preventDefault(); form.put(route('tickets.update', ticket.id)); }} />
        </AuthenticatedLayout>
    );
}