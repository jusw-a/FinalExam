Schema::create('tickets', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->cascadeOnDelete(); // owner
    $table->string('title');
    $table->text('description');
    $table->string('priority');
    $table->string('status')->default('Open');
    $table->string('category');
    $table->timestamps();
});
