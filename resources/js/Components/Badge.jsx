const COLORS = {
    Low: 'bg-green-100 text-green-800', Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-orange-100 text-orange-800', Urgent: 'bg-red-100 text-red-800',
    Open: 'bg-blue-100 text-blue-800', 'In Progress': 'bg-purple-100 text-purple-800',
    Resolved: 'bg-green-100 text-green-800', Closed: 'bg-gray-200 text-gray-700',
};

export default function Badge({ value }) {
    return <span className={`rounded-full px-2 py-1 text-xs font-semibold ${COLORS[value]}`}>{value}</span>;
}