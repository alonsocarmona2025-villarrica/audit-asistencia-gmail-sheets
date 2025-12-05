function macroparaborrar() {
  var hoja1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("hoja1");
  //var hoja2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("traedora2");
  hoja1.getRange("A2:D299").clearContent();
  //hoja2.getRange("A2:D99").clearContent();
};
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Adicionales')
    .addItem('1.-limpiar', 'macroparaborrar')
    .addItem('2.-RegistrosGeo', 'importLabel1')
    //.addItem('3.-importarcorreos1recib', 'importLabel2')
    //.addItem('4.-importaregistrofull', 'importLabel3')
    .addToUi();
}

const SPREADSHEET_ID = 'TU_ID_DE_HOJA_AQUI';
const LABEL_NAME = 'RegistroTrabajoVTEC';
// Replace 'sheetName' with the name of the sheet in the spreadsheet where you want to import the emails
const SHEET_NAME = 'hoja1';
function importLabel1() { // Get the Gmail label
  const label = GmailApp.getUserLabelByName(LABEL_NAME); // Get the threads in the label
  const threads = label.getThreads(); // Get the sheet in the spreadsheet
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  // Iterate through the threads and add the messages to the sheet
  for (let i = 0; i < threads.length; i++) {
    const messages = threads[i].getMessages();
    for (let j = 0; j < messages.length; j++) {
      const message = messages[j];
      sheet.appendRow([message.getDate(), message.getFrom(), message.getSubject(), message.getPlainBody()]);
    }
  }
}
