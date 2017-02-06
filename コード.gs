function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('▶チャート表示')
      .addItem('ピラミッドグラフ', 'chartman')
      .addToUi();
}

function datamanrev(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var ss = sheet.getSheetByName("pyramid");
  var dataman = ss.getRange("A1:C").getValues();
  return dataman;
}

function datamanrev2(){
  var gasheet = "1Ro-TvVaVnxL_Jhs_1567XN8o_-kyrdSJNBAfNVAMhLo";
  var sheet = SpreadsheetApp.openById(gasheet);
  var ss = sheet.getSheetByName("pyramid");
  var dataman = ss.getRange("A1:C").getValues();
  return dataman;
}
 
function doGet(e){
  var html = HtmlService.createHtmlOutputFromFile('pyramid2')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setWidth(750)
    .setHeight(520);

 return html;  
  
}

function chartman() {
  var html = HtmlService.createHtmlOutputFromFile('pyramid')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setWidth(750)
    .setHeight(520);
 
 SpreadsheetApp.getUi() 
    .showModalDialog(html, 'ピラミッドグラフのテスト');
}