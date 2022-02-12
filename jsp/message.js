// Monta as mensagens apresentadas usando a biblioteca sweetalert2 
//https://sweetalert2.github.io/

function messageToast(icon, title) {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
    })
}

function message(title, action) {
    Swal.fire(title)
        .then((result) => {
            if (result.isConfirmed) {
                if (action !== undefined) {
                    action();
                }
            }
        })
}

function messageQuestion(title, action) {
    Swal.fire({
        title: title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    }).then((result) => {
        if (result.isConfirmed) {
            action();
        }
    })
}