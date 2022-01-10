function toats({ title = "", type = '', message = "", duration = 3000 }) {
    const main = document.getElementById('toats');
    const delay = (duration / 1000).toFixed(2);

    if (main) {
        const toats = document.createElement('div');
        //Auto remove 
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toats);
        }, duration + 1000);
        //Remove  when click
        toats.onclick = function (e) {
            if (e.target.closest('.toats__close')) {
                main.removeChild(toats);
                clearTimeout(autoRemoveId);
            }
        }
        toats.style.animation = `slideInLeft ease .4s, fadeOut linear 1s ${delay}s forwards`;
        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info',
            warning: 'fas fa-exclamation',
            error: 'fas fa-exclamation-circle'
        };
        const icon = icons[type];
        toats.classList.add('toats', `toats--${type}`);
        toats.innerHTML = `
                <div class="toats__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toats__body">
                    <div class="toats__title">${title}</div>
                    <div class="toats__msg">${message}</div>
                </div>
                <div class="toats__close">
                    <i class="fas fa-times"></i>
                </div> `;
        main.appendChild(toats);

    }
}

function showSuccess() {
    toats({
        title: 'Success',
        type: 'success',
        message: 'Đăng ký thành công',
        duration: 5000

    });
}
function showInfo() {
    toats({
        title: 'Info',
        type: 'info',
        message: 'Thông tin đến bạn',
        duration: 5000

    });
}
function showWarning() {
    toats({
        title: 'Warning',
        type: 'warning',
        message: 'Thử lại',
        duration: 5000

    });
}
function showError() {
    toats({
        title: 'Error',
        type: 'error',
        message: 'Lỗi. Vui lòng liên hệ với quản trị viên',
        duration: 5000
    });
}