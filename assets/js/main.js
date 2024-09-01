document.querySelector('.btn-primary').addEventListener('click', function(event) {
    const confirmed = confirm('Are you sure you want to submit?');
    if (!confirmed) {
        event.preventDefault(); // Prevent form submission if not confirmed
    }
});