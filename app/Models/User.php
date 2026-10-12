public function tickets()
{
    return $this->hasMany(Ticket::class); // one user has many tickets
}