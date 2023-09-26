
document.addEventListener('DOMContentLoaded', function () {
   
    const mainUploadBox = document.getElementById('main-image-upload');
    const mainUploadInput = document.getElementById('main-upload-input');
    const imagePreviews = document.querySelectorAll('.empty-preview');

    // "Drop Image Here" button
    mainUploadBox.addEventListener('click', () => {
        mainUploadInput.click();
    });

    //  file input
    mainUploadInput.addEventListener('change', (event) => {
        const files = event.target.files;

        //display files in the empty preview boxes
        for (let i = 0; i < Math.min(files.length, imagePreviews.length); i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (e) => {
                imagePreviews[i].innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
            };

            reader.readAsDataURL(file);
        }
    });
});
