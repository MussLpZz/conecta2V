// Crear un objeto que gestiona la autenticación
const AuthManager = {
    async login(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario

        // Captura los valores del formulario
        const correo = document.getElementById('cro').value.trim();
        const contraseña = document.getElementById('psw').value.trim();

        // Validación básica
        if (!correo || !contraseña) {
            this.displayError("Por favor completa todos los campos.");
            return;
        }

        // Simula el envío al servidor
        try {
            const response = await this.simulateServerRequest({ cro: correo, psw: contraseña });

            if (response.status) {
                // Redirigir al usuario si las credenciales son correctas
                window.location.href = response.redirect;
            } else {
                // Mostrar mensaje de error si las credenciales son incorrectas
                this.displayError(response.mensaje);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            this.displayError("Hubo un error en la conexión.");
        }
    },

    // Simula la respuesta del servidor
    async simulateServerRequest(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const { cro, psw } = data;

                if (cro === "p1@gmail.com" && psw === "123") {
                    resolve({
                        mensaje: "Redirigiendo",
                        status: true,
                        redirect: "../src/panel_usuario.html",
                    });
                } else {
                    resolve({
                        mensaje: "Las credenciales son incorrectas",
                        status: false,
                    });
                }
            }, 1000); // Simulación de latencia (1 segundo)
        });
    },

    // Método para mostrar errores
    displayError(message) {
        document.getElementById('error').innerText = message;
    },
};

// Añadir el evento de envío al formulario
document.getElementById('frw').addEventListener('submit', (e) => AuthManager.login(e));