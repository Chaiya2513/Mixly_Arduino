'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');


Blockly.Blocks.loops.HUE = 120;

Blockly.Blocks.controls_hw_timer = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ESP32_HW_TIMER)
    .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"],["2", "2"], ["3", "3"]]), "TIMER_NUM");
    this.appendValueInput('TIME')
    .setCheck(Number)
    .appendField(Blockly.MIXLY_MSTIMER2_EVERY);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_MILLIS)
    .appendField(Blockly.MIXLY_MODE)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_PYTHON_ONE_SHOT, "false"], [Blockly.MIXLY_PYTHON_PERIODIC, "true"]]), "mode");

    this.appendStatementInput('DO')
    .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_CONTROL_MSTIMER2);
}
};

Blockly.Blocks.controls_runnig_core = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ESP32_RUNNING_CORE)
    .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"]]), "CORE_NUM")
    .appendField(Blockly.MIXLY_ESP32_RUNNING_CORE_PRIORITY)
    .appendField(new Blockly.FieldDropdown([["3", "3"], ["2", "2"],["1", "1"], ["0", "0"]]), "CORE_Priority");
    this.appendStatementInput('DO')
    .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_CONTROL_MSTIMER2);
}
};
Blockly.Blocks.control_core_delay = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_CONTROL_CORE_DELAY);
    this.appendValueInput("sleeplength", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_MILLIS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_SCOOP_SLEEP);
}
};
Blockly.Blocks.controls_hw_timer_start = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ESP32_HW_TIMER)
    .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"],["2", "2"], ["3", "3"]]), "TIMER_NUM")
    .appendField(Blockly.MIXLY_MSTIMER2_START);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_CONTROL_MSTIMER2_START);
}
};

Blockly.Blocks.controls_hw_timer_stop = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ESP32_HW_TIMER)
    .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"],["2", "2"], ["3", "3"]]), "TIMER_NUM")
    .appendField(Blockly.MIXLY_STOP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_CONTROL_MSTIMER2_STOP);
}
};
