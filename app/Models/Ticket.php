class Ticket extends Model
{
    // The allowed choices. Used by validation AND the dropdowns.
    public const PRIORITIES = ['Low', 'Medium', 'High', 'Urgent'];
    public const STATUSES   = ['Open', 'In Progress', 'Resolved', 'Closed'];
    public const CATEGORIES = ['Hardware', 'Software', 'Network', 'Account', 'Other'];

    // Only these can be mass-filled. user_id is NOT here (safety).
    protected $fillable = ['title', 'description', 'priority', 'status', 'category'];
}