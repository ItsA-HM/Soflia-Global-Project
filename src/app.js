function login(user, password) {
    const u = typeof user === "string" ? user.trim() : user;
    const p = typeof password === "string" ? password.trim() : password;

    if (!u || !p) {
        return "Campos obligatorios";
    }
    if (user === "admin" && password === "1234") {
        return "✅ Bienvenido Administrador";
    } else if (user === "angel" && password === "soflia2026") {
        return "✅ Bienvenido Angel";
    }
    // El bug: No estamos validando si los campos vienen vacíos
    return "❌ Credenciales Inválidas";
}

module.exports = login;