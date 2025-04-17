document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // impede envio automático
    
    Swal.fire({
        icon: 'success',
        title: '',
        confirmButtonText: 'OK',
        showConfirmButton: true,
        timer: 2000,
        allowOutsideClick: false
    }).then(() => {
        this.submit(); // agora envia de verdade depois do "OK"
    });
});