const box = 'mt-1 w-full rounded-md border-gray-300';

export default function TicketForm({ form, onSubmit, options, label }) {
    const { data, setData, errors, processing } = form;   // from useForm in the page

    // Small helper to draw a dropdown + its error
    const select = (name, list) => (
        <div>
            <select className={box} value={data[name]} onChange={(e) => setData(name, e.target.value)}>
                {list.map((x) => <option key={x}>{x}</option>)}
            </select>
            {errors[name] && <p className="text-sm text-red-600">{errors[name]}</p>}
        </div>
    );

    return (
        <form onSubmit={onSubmit} className="space-y-4 rounded bg-white p-4 shadow">
            <div>
                <input className={box} placeholder="Title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                {errors.title && <p className="text-sm text-red-600">{errors.title}</p>}
            </div>
            <div>
                <textarea rows="5" className={box} placeholder="Description" value={data.description}
                    onChange={(e) => setData('description', e.target.value)} />
                {errors.description && <p className="text-sm text-red-600">{errors.description}</p>}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
                {select('priority', options.priorities)}
                {select('status', options.statuses)}
                {select('category', options.categories)}
            </div>
            {/* disabled while saving */}
            <button disabled={processing} className="rounded bg-indigo-600 px-4 py-2 text-white disabled:opacity-50">
                {processing ? 'Saving...' : label}
            </button>
        </form>
    );
}