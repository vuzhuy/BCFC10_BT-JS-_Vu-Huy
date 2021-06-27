var service = new NguoiDungServices();
var validation = new Validation();

function getEle(id) {
    return document.getElementById(id);
}

function getData() {
    service
        .getListUserManagementApi()
        .then(function (result) {
            renderListUserManagement(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
getData();

function renderListUserManagement(list) {
    var contentHTML = "";

    list.forEach(function (user, index) {
        contentHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.taiKhoan}</td>
                <td>${user.hoTen}</td>
                <td>${user.matKhau}</td>
                <td>${user.email}</td>
                <td>${user.loaiND}</td>
                <td>${user.ngonNgu}</td>
                <td>${user.moTa}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="suaNguoiDung(${
                        user.id
                    })">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaNguoiDung(${
                        user.id
                    })">Xóa</button>
                </td>
                <td>
                    <img src="./../../assets/img/${
                        user.hinhAnh
                    }" width="50" />
                </td>
            <tr>
        `;
    });

    document.getElementById("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

getEle("btnThemNguoiDung").addEventListener("click", function () {
    document.getElementsByClassName("modal-title")[0].innerHTML =
        "Thêm Người Dùng";

    var footer =
        '<button class="btn btn-success" onclick="addProduct()">Thêm ND</button>';
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
});
// thêm người dùng
function addUserManagement() {
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;
    var hinhAnh = getEle("HinhAnh").files[0].name;

    var nguoiDung = new NguoiDung("", taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);

    service
        .addUserManagementApi(nguoiDung)
        .then(function (result) {
            console.log(result);
            document.getElementsByClassName("close")[0].click();
            getData();
        })
        .catch(function (error) {
        console.log(error);
        });
}


// xóa người dùng
function xoaNguoiDung(id) {
    console.log(id);
    service
        .deleteUserManagementApi(id)
        .then(function () {
            getData();
            alert("xóa thành công!");
        })
        .catch(function (error) {
            console.log(error);
        });
}

// sửa người dùng
function suaNguoiDung(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa ND";

    var footer = `<button class="btn btn-success" onclick="capNhatND(${id})">Cập nhật</button>`;

    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

    service
        .getUserManagementByIdApi(id)
        .then(function (result) {
            getEle("TaiKhoan").value = result.data.taiKhoan;
            getEle("HoTen").value = result.data.hoTen;
            getEle("MatKhau").value = result.data.matKhau;
            getEle("Email").value = result.data.email;
            getEle("loaiNguoiDung").value = result.data.loaiND;
            getEle("loaiNgonNgu").value = result.data.ngonNgu;
            getEle("MoTa").value = result.data.moTa;
            getEle("HinhAnh").value = result.data.hinhAnh;
        })
        .catch(function (error) {
            console.log(error);
        });
}
// cập nhật người dùng
function capNhatND(id) {

    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var loaiND = getEle("loaiNguoidung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;
    var hinhAnh = getEle("HinhAnh").files[0].name;

    var nguoiDung = new NguoiDung("", taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);

    service
        .updateUserManagementApi(nguoiDung)
        .then(function () {
            alert("Cập nhật thành công");
            document.getElementsByClassName("close")[0].click();
            getData();
        })
        .catch(function (error) {
            console.log(error);
        });
}
