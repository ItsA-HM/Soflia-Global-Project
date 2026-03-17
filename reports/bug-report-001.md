# Bug Report

**Título:** El sistema de login permite procesar campos vacíos.

**Severidad:** Media

**Pasos para reproducir:**
1. Abrir el formulario de login.
2. Dejar los campos de usuario y/o contraseña vacíos.
3. Dar click en el botón "Entrar".

**Resultado esperado:**  
El sistema debe mostrar un mensaje de error indicando que los campos son obligatorios, por ejemplo: "*Campos obligatorios*".

**Resultado obtenido:**  
El sistema muestra un mensaje genérico: "*Credenciales inválidas*".

**Notas adicionales:**  
El sistema no diferencia entre credenciales incorrectas y campos vacíos, lo que puede confundir al usuario ya que no sabe si ha olvidado completar un campo o ha ingresado mal sus datos.

---

## Estado

**Parcheado:** Sí (2026-03-16)

**Detalle del parche:**  
Se agregó validación para campos vacíos en `login`. Si el usuario o la contraseña vienen vacíos (o solo con espacios), ahora devuelve el mensaje: "*Campos obligatorios*".

**Verificación:**  
Se actualizaron/ejecutaron pruebas en `tests/login.test.js` para cubrir los casos de usuario vacío y password vacío.