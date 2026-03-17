const assert = require("node:assert/strict");
const login = require("../src/app.js");

function runTest(nombre, user, password, esperado) {
  const resultado = login(user, password);
  console.log(nombre);
  console.log(`user=${JSON.stringify(user)} password=${JSON.stringify(password)}`);
  console.log(resultado);
  console.log("—");
  assert.equal(resultado, esperado);
}

runTest("1) Admin correcto", "admin", "1234", "✅ Bienvenido Administrador");
runTest("2) Angel correcto", "angel", "soflia2026", "✅ Bienvenido Angel");
runTest("3) Usuario vacío", "", "1234", "Campos obligatorios");
runTest("4) Password vacío", "admin", "", "Campos obligatorios");
