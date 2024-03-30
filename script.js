document.addEventListener('DOMContentLoaded', function() {
    // Function to update date and time
    function updateDateTime() {
        var now = new Date();
        var datetimeElement = document.getElementById('datetime');
        datetimeElement.innerHTML = now.toLocaleString();
    }

    // Function to get user's location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            document.getElementById('location').innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    // Function to display user's location
    function showPosition(position) {
        var locationElement = document.getElementById('location');
        locationElement.innerHTML = "Latitude: " + position.coords.latitude.toFixed(2) + 
            ", Longitude: " + position.coords.longitude.toFixed(2);
    }

    // Initial call to update date and time
    updateDateTime();

    // Call updateDateTime function every second
    setInterval(updateDateTime, 1000);

    // Call getLocation to get user's location
    getLocation();
});
