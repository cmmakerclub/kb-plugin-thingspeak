Blockly.Blocks["thing_speak_core"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("THING SPEAK");
    this.appendValueInput("API KEY")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/179/179543.svg",
        20,
        20,
        "*"))
      .appendField("API KEY");
    this.appendValueInput("FIELD1")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 1");
    this.appendValueInput("FIELD2")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 2");
    this.appendValueInput("FIELD3")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 3");
    this.appendValueInput("FIELD4")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 4");
    this.appendValueInput("FIELD5")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 5");
    this.appendValueInput("FIELD6")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 6");
    this.appendValueInput("FIELD7")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 7");
    this.appendValueInput("FIELD8")
    //.setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldImage(
        "https://image.flaticon.com/icons/svg/148/148953.svg",
        20,
        20,
        "*"))
      .appendField("FIELD 8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
