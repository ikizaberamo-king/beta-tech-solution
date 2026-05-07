const form = document.getElementById("eventForm");
const successMsg = document.getElementById("successMsg");
const formSection = document.getElementById("formSection");
const displaySection = document.getElementById("displaySection");
const quickActions = document.getElementById("quickActions");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const eventName = document.getElementById("eventName").value.trim();
    const eventDate = document.getElementById("eventDate").value;
    const eventTime = document.getElementById("eventTime").value;
    const location = document.getElementById("location").value.trim();
    const eventType = document.getElementById("eventType").value;
    const attendees = document.getElementById("attendees").value;
    const description = document.getElementById("description").value.trim();
    const organizer = document.getElementById("organizer").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validation
    if (!eventName || !eventDate || !eventTime || !location || !eventType || !attendees || !organizer || !email || !phone) {
        showMessage("Please fill all required fields ❌", "red");
        return;
    }

    if (attendees <= 0) {
        showMessage("Number of attendees must be at least 1 ❌", "red");
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage("Please enter a valid email ❌", "red");
        return;
    }

    // Phone validation (basic)
    if (phone.length < 10) {
        showMessage("Please enter a valid phone number ❌", "red");
        return;
    }

    // Save booking to localStorage
    const booking = {
        id: Date.now(), // unique ID
        eventName,
        eventDate,
        eventTime,
        location,
        eventType,
        attendees,
        description,
        organizer,
        email,
        phone,
        bookingDate: new Date().toISOString()
    };

    saveBooking(booking);

    // Success - Display information
    showMessage("Event Booked Successfully ✅", "#00ffcc");
    
    // Show quick actions
    setTimeout(() => {
        quickActions.style.display = "flex";
        quickActions.style.opacity = "0";
        quickActions.style.transform = "translateY(10px)";
        
        setTimeout(() => {
            quickActions.style.transition = "0.5s";
            quickActions.style.opacity = "1";
            quickActions.style.transform = "translateY(0)";
        }, 100);
    }, 800);
    
    setTimeout(() => {
        displayEventInfo(eventName, eventDate, eventTime, location, eventType, attendees, description, organizer, email, phone);
    }, 800);
});

function saveBooking(booking) {
    let bookings = JSON.parse(localStorage.getItem('eventBookings')) || [];
    bookings.push(booking);
    localStorage.setItem('eventBookings', JSON.stringify(bookings));
}

function displayEventInfo(eventName, eventDate, eventTime, location, eventType, attendees, description, organizer, email, phone) {
    // Populate display section
    document.getElementById("dispEventName").textContent = eventName;
    document.getElementById("dispEventDate").textContent = formatDate(eventDate);
    document.getElementById("dispEventTime").textContent = eventTime;
    document.getElementById("dispLocation").textContent = location;
    document.getElementById("dispEventType").textContent = eventType;
    document.getElementById("dispAttendees").textContent = attendees;
    document.getElementById("dispDescription").textContent = description || "No description provided";
    document.getElementById("dispOrganizer").textContent = organizer;
    document.getElementById("dispEmail").textContent = email;
    document.getElementById("dispPhone").textContent = phone;

    // Hide form and show display
    formSection.style.display = "none";
    displaySection.style.display = "block";

    // Scroll to display section
    displaySection.scrollIntoView({ behavior: "smooth" });
}

function editForm() {
    // Reset and go back to form
    form.reset();
    formSection.style.display = "block";
    displaySection.style.display = "none";
    successMsg.textContent = "";
    quickActions.style.display = "none";
    formSection.scrollIntoView({ behavior: "smooth" });
}

function bookAnotherEvent() {
    // Reset form and go back to booking another event
    form.reset();
    formSection.style.display = "block";
    displaySection.style.display = "none";
    successMsg.textContent = "";
    quickActions.style.display = "none";
    showMessage("Ready to book another event! 📅", "#00ffcc");
    formSection.scrollIntoView({ behavior: "smooth" });
}

function quickBookAnother() {
    // Quick reset for another booking
    form.reset();
    successMsg.textContent = "";
    quickActions.style.display = "none";
    showMessage("Ready to book another event! 📅", "#00ffcc");
    formSection.scrollIntoView({ behavior: "smooth" });
}

function viewAllBookings() {
    // Redirect to bookings page
    window.location.href = "event-bookings.html";
}

function showMessage(message, color) {
    successMsg.textContent = message;
    successMsg.style.color = color;
    successMsg.style.opacity = "0";
    successMsg.style.transform = "translateY(10px)";

    setTimeout(() => {
        successMsg.style.transition = "0.5s";
        successMsg.style.opacity = "1";
        successMsg.style.transform = "translateY(0)";
    }, 100);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
