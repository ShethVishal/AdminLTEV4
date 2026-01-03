function showToast(message, type = "danger") {
    // Generate a unique ID for each toast
    const toastId = "toast";

    // Toast HTML with fixed positioning
    const toastHTML = `
        <div id="${toastId}" 
             class="toast toast-${type} position-fixed bottom-0 end-0 m-3" 
             role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="5000">
            <div class="toast-header">
                <i class="bi bi-circle me-2"></i>
                <strong class="me-auto">DiaDesk</strong>
                <small>Just Now</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">${message}</div>
        </div>
    `;

    // Append directly to body (so each toast is new)
    document.body.insertAdjacentHTML("beforeend", toastHTML);

    // Get the new toast element
    const toastEle = document.getElementById(toastId);
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastEle);

    // Show the toast
    toastBootstrap.show();
}