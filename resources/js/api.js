export default {
    getData(folder) {
        return window.axios
            .get('/nova-vendor/codicastudio/file-manager/data', {
                params: {
                    folder,
                },
            })
            .then(response => response.data);
    },

    getDataField(resource, attribute, folder, filter) {
        return window.axios
            .get(`/nova-vendor/codicastudio/file-manager/${resource}/${attribute}/data`, {
                params: {
                    folder,
                    filter,
                },
            })
            .then(response => response.data);
    },

    uploadFile() {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/uploads/add')
            .then(response => response.data);
    },

    moveFile(oldPath, newPath) {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/actions/move', {
                old: oldPath,
                path: newPath,
            })
            .then(response => response.data);
    },

    createFolder(folderName, currentFolder) {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/actions/create-folder', {
                folder: folderName,
                current: currentFolder,
            })
            .then(response => response.data);
    },

    removeDirectory(currentFolder) {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/actions/delete-folder', {
                current: currentFolder,
            })
            .then(response => response.data);
    },

    getInfo(file) {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/actions/get-info', { file: file })
            .then(response => response.data);
    },

    removeFile(file) {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/actions/remove-file', { file: file })
            .then(response => response.data);
    },

    renameFile(file, name) {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/actions/rename-file', {
                file: file,
                name: name,
            })
            .then(response => response.data);
    },

    rename(path, name) {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/actions/rename', {
                path: path,
                name: name,
            })
            .then(response => response.data);
    },

    eventFolderUploaded(path) {
        return window.axios
            .post('/nova-vendor/codicastudio/file-manager/events/folder', { path: path })
            .then(response => response.data);
    },
};
