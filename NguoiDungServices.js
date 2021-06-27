function NguoiDungServices() {
    this.getListUserManagementApi = function() {
        return axios({
            url: "https://60ceefb54a030f0017f66e94.mockapi.io/UserManagement",
            method: "GET",
        });
    };

    this.addUserManagementApi = function (user) {
        return axios({
            url: "https://60ceefb54a030f0017f66e94.mockapi.io/UserManagement",
            method: "POST",
            data: user,
        });
    };

    this.deleteUserManagementApi = function (id) {
        return axios({
            url: `https://60ceefb54a030f0017f66e94.mockapi.io/UserManagement/${id}`,
            method: "DELETE",
        });
    };

    this.getUserManagementByIdApi = function (id) {
        return axios({
            url: `https://60ceefb54a030f0017f66e94.mockapi.io/UserManagement/${id}`,
            method: "GET",
        });
    };

    this.updateUserManagementApi = function (user) {
        return axios({
            url: `https://60ceefb54a030f0017f66e94.mockapi.io/UserManagement/${user.id}`,
            method: "PUT",
            data: user,
        });
    };
}