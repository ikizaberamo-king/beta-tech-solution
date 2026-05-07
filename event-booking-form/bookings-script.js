document.addEventListener('DOMContentLoaded', function() {
    loadBookings();
});

function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem('eventBookings')) || [];
    const bookingsContainer = document.getElementById('bookingsContainer');
    const noBookings = document.getElementById('noBookings');

    if (bookings.length === 0) {
        noBookings.style.display = 'block';
        return;
    }

    noBookings.style.display = 'none';

    // Sort bookings by booking date (newest first)
    bookings.sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));

    bookings.forEach(booking => {
        const bookingCard = createBookingCard(booking);
        bookingsContainer.appendChild(bookingCard);
    });
}

function createBookingCard(booking) {
    const card = document.createElement('div');
    card.className = 'booking-card';
    card.innerHTML = `
        <div class="booking-header">
            <h3>${booking.eventName}</h3>
            <span class="booking-date">Booked on ${formatDateTime(booking.bookingDate)}</span>
        </div>

        <div class="booking-details">
            <div class="detail-row">
                <div class="detail-item">
                    <label>Event Date:</label>
                    <p>${formatDate(booking.eventDate)}</p>
                </div>
                <div class="detail-item">
                    <label>Event Time:</label>
                    <p>${booking.eventTime}</p>
                </div>
            </div>

            <div class="detail-row">
                <div class="detail-item">
                    <label>Location:</label>
                    <p>${booking.location}</p>
                </div>
                <div class="detail-item">
                    <label>Event Type:</label>
                    <p>${booking.eventType}</p>
                </div>
            </div>

            <div class="detail-row">
                <div class="detail-item">
                    <label>Attendees:</label>
                    <p>${booking.attendees}</p>
                </div>
                <div class="detail-item">
                    <label>Organizer:</label>
                    <p>${booking.organizer}</p>
                </div>
            </div>

            <div class="detail-row">
                <div class="detail-item">
                    <label>Email:</label>
                    <p>${booking.email}</p>
                </div>
                <div class="detail-item">
                    <label>Phone:</label>
                    <p>${booking.phone}</p>
                </div>
            </div>

            ${booking.description ? `
            <div class="description-section">
                <label>Description:</label>
                <p>${booking.description}</p>
            </div>
            ` : ''}
        </div>

        <div class="booking-actions">
            <button class="delete-btn" onclick="deleteBooking(${booking.id})">Delete Booking</button>
        </div>
    `;

    return card;
}

function deleteBooking(bookingId) {
    if (confirm('Are you sure you want to delete this booking?')) {
        let bookings = JSON.parse(localStorage.getItem('eventBookings')) || [];
        bookings = bookings.filter(booking => booking.id !== bookingId);
        localStorage.setItem('eventBookings', JSON.stringify(bookings));

        // Reload the page to refresh the list
        location.reload();
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatDateTime(dateString) {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}