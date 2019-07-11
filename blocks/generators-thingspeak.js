Blockly.JavaScript["thing_speak_core"] = function(block) {
  var text_api_key = block.getFieldValue("API_KEY");
  var variable_input_field1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
    "INPUT_FIELD1"), Blockly.Variables.NAME_TYPE);
  var value_field1 = Blockly.JavaScript.valueToCode(block,
    "FIELD1",
    Blockly.JavaScript.ORDER_ATOMIC);
  var variable_input_field2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
    "INPUT_FIELD2"), Blockly.Variables.NAME_TYPE);
  var value_field2 = Blockly.JavaScript.valueToCode(block,
    "FIELD2",
    Blockly.JavaScript.ORDER_ATOMIC);
  var variable_input_field3 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
    "INPUT_FIELD3"), Blockly.Variables.NAME_TYPE);
  var value_field3 = Blockly.JavaScript.valueToCode(block,
    "FIELD3",
    Blockly.JavaScript.ORDER_ATOMIC);
  var variable_input_field4 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
    "INPUT_FIELD4"), Blockly.Variables.NAME_TYPE);
  var value_field4 = Blockly.JavaScript.valueToCode(block,
    "FIELD4",
    Blockly.JavaScript.ORDER_ATOMIC);
  var variable_input_field5 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
    "INPUT_FIELD5"), Blockly.Variables.NAME_TYPE);
  var value_field5 = Blockly.JavaScript.valueToCode(block,
    "FIELD5",
    Blockly.JavaScript.ORDER_ATOMIC);
  var variable_input_field6 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
    "INPUT_FIELD6"), Blockly.Variables.NAME_TYPE);
  var value_field6 = Blockly.JavaScript.valueToCode(block,
    "FIELD6",
    Blockly.JavaScript.ORDER_ATOMIC);
  var variable_input_field7 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
    "INPUT_FIELD7"), Blockly.Variables.NAME_TYPE);
  var value_field7 = Blockly.JavaScript.valueToCode(block,
    "FIELD7",
    Blockly.JavaScript.ORDER_ATOMIC);
  var variable_input_field8 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
    "INPUT_FIELD8"), Blockly.Variables.NAME_TYPE);
  var value_field8 = Blockly.JavaScript.valueToCode(block,
    "FIELD8",
    Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  #EXTINC #include <HTTPClient.h> #END\n
  HTTPClient http;\n
  http.begin("https://api.thingspeak.com/update?api_key=${text_api_key}\
  &field1=string(${variable_input_field1})\
  &field2=string(${variable_input_field2})\
  &field3=string(${variable_input_field3})\
  &field4=string(${variable_input_field4})\
  &field5=string(${variable_input_field5})\
  &field6=string(${variable_input_field6})\
  &field7=string(${variable_input_field7})\
  &field8=string(${variable_input_field8})");\n
  http.GET();\n
  http.end();`;

  return code;
};
