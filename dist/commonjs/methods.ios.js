"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _NativeRNPermissions = _interopRequireDefault(require("./NativeRNPermissions"));
var _utils = require("./utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const openPhotoPicker = async () => {
  await _NativeRNPermissions.default.openPhotoPicker();
};
const openSettings = async () => {
  await _NativeRNPermissions.default.openSettings();
};
const check = permission => {
  return _NativeRNPermissions.default.check(permission);
};
const checkWithStatus = permission => {
  return _NativeRNPermissions.default.checkWithStatus(permission);
};
const requestLimitedContactsModal = async () => {
  return _NativeRNPermissions.default.requestLimitedContactsModal();
};
const request = async permission => {
  return _NativeRNPermissions.default.request(permission);
};
const checkLocationAccuracy = async () => {
  return _NativeRNPermissions.default.checkLocationAccuracy();
};
const requestLocationAccuracy = ({
  purposeKey
}) => {
  return _NativeRNPermissions.default.requestLocationAccuracy(purposeKey);
};
const checkNotifications = async () => {
  return _NativeRNPermissions.default.checkNotifications();
};
const requestNotifications = options => {
  return _NativeRNPermissions.default.requestNotifications(options);
};
const checkMultiple = async permissions => {
  const output = {};
  for (const permission of (0, _utils.uniq)(permissions)) {
    output[permission] = await check(permission);
  }
  return output;
};
const requestMultiple = async permissions => {
  const output = {};
  for (const permission of (0, _utils.uniq)(permissions)) {
    output[permission] = await request(permission);
  }
  return output;
};
const methods = exports.methods = {
  check,
  checkLocationAccuracy,
  checkMultiple,
  checkNotifications,
  openPhotoPicker,
  openSettings,
  request,
  requestLocationAccuracy,
  requestMultiple,
  requestNotifications,
  checkWithStatus,
  requestLimitedContactsModal
};
//# sourceMappingURL=methods.ios.js.map