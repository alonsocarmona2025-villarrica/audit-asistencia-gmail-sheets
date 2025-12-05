# audit-asistencia-gmail-sheets
Script de automatización para auditar registros de asistencia extrayendo datos de Gmail hacia Google Sheets

# Automatización de Auditoría de Asistencia (Gmail a Sheets) 📧 ➡️ 📊

Este proyecto es una herramienta desarrollada en **Google Apps Script** para resolver una discrepancia en el registro de horarios laborales.

## 💡 El Problema
Existían inconsistencias entre mis registros personales de entrada/salida y los reportados por la empresa, lo que resultaba en descuentos salariales erróneos. Necesitaba una forma de auditar mis propios registros basándome en los correos de confirmación automáticos ("comprobantes de marca").

## 🚀 La Solución
Desarrollé un script que automatiza la recolección de evidencia:
1. Conecta con la API de **Gmail**.
2. Filtra los correos bajo la etiqueta específica `RegistroTrabajoVTEC` (y otras configuradas).
3. Extrae la metadata clave: Fecha, Hora, Asunto y Cuerpo del mensaje.
4. Vuelca la información en una **Google Sheet** para su posterior análisis y conteo de horas.

## 🛠️ Tecnologías usadas
- **JavaScript** (Google Apps Script).
- **Gmail App Service**: Para iterar sobre hilos y mensajes.
- **Spreadsheet App Service**: Para manipular la hoja de cálculo.

## 📂 Estructura del Código
- `importLabel1()`: Función principal que busca la etiqueta y migra los datos.
- `onOpen()`: Crea un menú personalizado en la interfaz de Google Sheets para ejecutar el script con un clic ("Adicionales").
- `macroparaborrar()`: Limpia la hoja para realizar una nueva auditoría desde cero.

---
*Proyecto personal para gestión de productividad y nómina.*
