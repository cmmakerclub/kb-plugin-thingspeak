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
  var code = `
  #EXTINC #include <HTTPClient.h> #END\n
  HTTPClient http;\n
  http.begin("https://api.thingspeak.com/update?api_key=${value_api_key}\
  &field1=string(${value_field1})\
  &field3=string(${value_field2})\
  &field4=string(${value_field3})\
  &field5=string(${value_field4})\
  &field6=string(${value_field5})\
  &field2=string(${value_field6})\
  &field7=string(${value_field7})\
  &field8=string(${value_field8})");\n
  http.GET();\n
  http.end();`;

  return code;
};
