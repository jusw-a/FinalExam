import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TicketForm from '@/Components/TicketForm';

export default function Create(props) {   // props = priorities, statuses, categories from the controller
    const form = useForm({ title: '', description: '', priority: 'Medium', status: 'Open', category: 'Software' });

    return (
        <AuthenticatedLayout header="New Ticket">
            <TicketForm form={form} options={props} label="Create ticket"
                onSubmit={(e) => { e.preventDefault(); form.post(route('tickets.store')); }} />
        </AuthenticatedLayout>
    );
}