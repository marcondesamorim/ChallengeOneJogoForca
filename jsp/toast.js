function messageUser(action) {
    switch (action) {
        case 'success':
            messageToast('success', 'Palavra cadastrada!');
            break;
        case 'error':
            messageToast('error', 'Não foi possível salvar a palavra!');
            break;
        case 'warning':
            messageToast('warning', 'Palavra repetida!');
            break;

    }
}

function messageToast(type, message) {
    const Toast = toastConfig()

    Toast.fire({
        icon: type,
        title: message
    })
}

function toastConfig() {
    return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
}

function messageHint() {
    const Toast = Swal.mixin({
        toast: true,
        width: '30%'
    });

    Toast.fire({
        title: 'Hint?',
        icon: 'question',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            giveHint();
        } else {
            noGiveHint();
        }
    })
}