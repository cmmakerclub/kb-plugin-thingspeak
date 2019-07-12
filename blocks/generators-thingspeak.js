Blockly.JavaScript["thing_speak_core"] = function(block) {
  var value_api_key = Blockly.JavaScript.valueToCode(block,
    "API KEY",
    Blockly.JavaScript.ORDER_ATOMIC);
  var value_field1 = Blockly.JavaScript.valueToCode(block,
    "FIELD1",
    Blockly.JavaScript.ORDER_ATOMIC);
  var value_field2 = Blockly.JavaScript.valueToCode(block,
    "FIELD2",
    Blockly.JavaScript.ORDER_ATOMIC);
  var value_field3 = Blockly.JavaScript.valueToCode(block,
    "FIELD3",
    Blockly.JavaScript.ORDER_ATOMIC);
  var value_field4 = Blockly.JavaScript.valueToCode(block,
    "FIELD4",
    Blockly.JavaScript.ORDER_ATOMIC);
  var value_field5 = Blockly.JavaScript.valueToCode(block,
    "FIELD5",
    Blockly.JavaScript.ORDER_ATOMIC);
  var value_field6 = Blockly.JavaScript.valueToCode(block,
    "FIELD6",
    Blockly.JavaScript.ORDER_ATOMIC);
  var value_field7 = Blockly.JavaScript.valueToCode(block,
    "FIELD7",
    Blockly.JavaScript.ORDER_ATOMIC);
  var value_field8 = Blockly.JavaScript.valueToCode(block,
    "FIELD8",
    Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var fields = ``;

  if (value_field1.length !== 0) {
    fields += `"&field1=" + String(${value_field1}) +`;
  }

  if (value_field2.length !== 0) {
    fields += `"&field2=" + String(${value_field2}) +`;
  }

  if (value_field3.length !== 0) {
    fields += `"&field3=" + String(${value_field3}) +`;
  }

  if (value_field4.length !== 0) {
    fields += `"&field4=" + String(${value_field4}) +`;
  }

  if (value_field5.length !== 0) {
    fields += `"&field5=" + String(${value_field5}) +`;
  }

  if (value_field6.length !== 0) {
    fields += `"&field6=" + String(${value_field6}) +`;
  }

  if (value_field7.length !== 0) {
    fields += `"&field7=" + String(${value_field7}) +`;
  }

  if (value_field8.length !== 0) {
    fields += `"&field8=" + String(${value_field8}) +`;
  }

  if (fields.length > 0) {
    console.log("process substring");
    fields = fields.substring(0, fields.length - 1);
  } else {
    fields = `""`;
  }

  var code = `
    #EXTINC #include <HTTPClient.h> #END\n
    HTTPClient http;\n
    http.begin("https://api.thingspeak.com/update?api_key=" + ${value_api_key} + ${fields});\n
    http.GET();\n
    http.end();
    `;

  return code;
};
