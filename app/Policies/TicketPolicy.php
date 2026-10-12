public function view(User $user, Ticket $ticket): bool   { return $user->id === $ticket->user_id; }
public function update(User $user, Ticket $ticket): bool { return $user->id === $ticket->user_id; }
public function delete(User $user, Ticket $ticket): bool { return $user->id === $ticket->user_id; }