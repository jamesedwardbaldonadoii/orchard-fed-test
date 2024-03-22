import './index.scss';
import * as bootstrap from 'bootstrap'

// Function to attach src and srcset attributes to image-preview element
function setImagePreview(src, srcset) {
    const imagePreview = document.getElementById('image-preview');
    if (imagePreview) {
        imagePreview.setAttribute('src', src);
        imagePreview.setAttribute('srcset', srcset);
    }
}

// Function to check if an element or any of its ancestors is an anchor
function isAnchorOrAncestorAnchor(element) {
    while (element) {
        if (element.tagName.toLowerCase() === 'a') {
            return true;
        }
        element = element.parentElement;
    }
    return false;
}

const myModal = document.getElementById('imageModal');

if (myModal) {
    myModal.addEventListener('shown.bs.modal', (ev) => {
        const relatedTarget = ev.relatedTarget; // triggered the modal
        const nearestImg = relatedTarget?.querySelector('img'); // Nearest img element
        const src = nearestImg ? nearestImg.getAttribute('src') : null; // src attribute
        const srcset = nearestImg ? nearestImg.getAttribute('srcset') : null; // srcset attribute

        // Attach src and srcset attributes to image-preview
        setImagePreview(src, srcset);
    });
}

document.addEventListener('click', function(event) {
    // Check if the clicked element is an anchor or if any of its ancestors is an anchor
    if (isAnchorOrAncestorAnchor(event.target)) {
        // Prevent the default action of the anchor (e.g., following the link)
        event.preventDefault();

        // Log the clicked anchor to console
        console.log('Anchor clicked:', event.target);
    }
});
