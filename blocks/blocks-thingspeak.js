Blockly.Blocks["thing_speak_core"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("THING SPEAK");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/179/179543.svg",
        20,
        20,
        "*"))
      .appendField("API KEY")
      .appendField(new Blockly.FieldTextInput("                              "),
        "API_KEY");
    this.appendValueInput("FIELD1")
      .setCheck("String")
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 1 : DATA IS")
      .appendField(new Blockly.FieldVariable(null),
        "INPUT_FIELD1");
    this.appendValueInput("FIELD2")
      .setCheck("String")
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 2 : DATA IS")
      .appendField(new Blockly.FieldVariable(null),
        "INPUT_FIELD2");
    this.appendValueInput("FIELD3")
      .setCheck("String")
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 3 : DATA IS")
      .appendField(new Blockly.FieldVariable(null),
        "INPUT_FIELD3");
    this.appendValueInput("FIELD4")
      .setCheck("String")
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 4 : DATA IS")
      .appendField(new Blockly.FieldVariable(null),
        "INPUT_FIELD4");
    this.appendValueInput("FIELD5")
      .setCheck("String")
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 5 : DATA IS")
      .appendField(new Blockly.FieldVariable(null),
        "INPUT_FIELD5");
    this.appendValueInput("FIELD6")
      .setCheck("String")
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 6 : DATA IS")
      .appendField(new Blockly.FieldVariable(null),
        "INPUT_FIELD6");
    this.appendValueInput("FIELD7")
      .setCheck("String")
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 7 : DATA IS")
      .appendField(new Blockly.FieldVariable(null),
        "INPUT_FIELD7");
    this.appendValueInput("FIELD8")
      .setCheck("String")
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 8 : DATA IS")
      .appendField(new Blockly.FieldVariable(null),
        "INPUT_FIELD8");
    this.setConnectionsHidden(true);
    this.setNextStatement(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
