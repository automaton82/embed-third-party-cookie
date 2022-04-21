// Helper function to get a cookie.
// From https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

document.addEventListener('DOMContentLoaded', event => {

    // Check for iOS / Safari.
    // https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API
    // https://webkit.org/blog/11545/updates-to-the-storage-access-api/
    if (!!document.hasStorageAccess) {
        document.hasStorageAccess().then(result => {

            // If we don't have access we must request it, but the request
            // must come from a UI event.
            if (!result) {

                // Show the button and tie to the click.
                const requestStorageAccessButton = document.getElementById('requestStorageAccessButton');
                requestStorageAccessButton.style.display = "block";
                requestStorageAccessButton.addEventListener("click", event => {

                    // On UI event, consume the event by requesting access.
                    document.requestStorageAccess().then(result => {

                        // Finally we are allowed! Reload to get the cookie.
                        window.location.reload();
                    }).catch(err => {

                        // If we get here it means either our page was never loaded as a first party page,
                        // or the user clicked 'Don't Allow'.
                        // Either way open that now so the user can request from there (or learn more about us).
                        window.top.location = window.location.href + "requeststorageaccess.html";
                    });
                });
            }
        }).catch(err => console.error(err));
    }

    // Always try to get the cookie.
    const cookieValue = getCookie('embeddedCookie');
    if (cookieValue) {
        document.getElementById('cookieValue').innerText = cookieValue;
    }
});