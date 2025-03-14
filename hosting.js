function uploadFile() {
    const fileInput = document.getElementById('fileUpload');
    const fileList = fileInput.files;
    const taskList = document.getElementById('taskList');
    const status = document.getElementById('uploadStatus');

    if (fileList.length === 0) {
        status.textContent = "Silakan pilih file terlebih dahulu!";
        return;
    }

    for (const file of fileList) {
        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        taskList.appendChild(listItem);
    }

    status.textContent = "File berhasil diunggah!";
    fileInput.value = ""; // Reset input file
}
