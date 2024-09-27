"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _results = require("./results");
var _unsupportedMethods = require("./unsupportedMethods");
const openSettings = async () => {};
const check = async () => {
  return false;
};
const checkWithStatus = async () => {
  return _results.RESULTS.BLOCKED;
};
const requestLimitedContactsModal = async () => {
  return []; //Not supported on web
};
const request = async () => {
  return _results.RESULTS.BLOCKED;
};
const checkNotifications = async () => {
  return {
    granted: false,
    settings: {}
  };
};
const requestNotifications = async () => {
  return {
    status: _results.RESULTS.BLOCKED,
    settings: {}
  };
};
const checkMultiple = async permissions => {
  const output = {};
  for (const permission of permissions) {
    output[permission] = false;
  }
  return output;
};
const requestMultiple = async permissions => {
  const output = {};
  for (const permission of permissions) {
    output[permission] = _results.RESULTS.BLOCKED;
  }
  return output;
};
const methods = exports.methods = {
  check,
  checkLocationAccuracy: _unsupportedMethods.checkLocationAccuracy,
  checkMultiple,
  checkNotifications,
  openPhotoPicker: _unsupportedMethods.openPhotoPicker,
  openSettings,
  request,
  requestLocationAccuracy: _unsupportedMethods.requestLocationAccuracy,
  requestMultiple,
  requestNotifications,
  checkWithStatus,
  requestLimitedContactsModal
};
//# sourceMappingURL=methods.js.map