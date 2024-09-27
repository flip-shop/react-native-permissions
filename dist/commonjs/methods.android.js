"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _reactNative = require("react-native");
var _NativeRNPermissions = _interopRequireDefault(require("./NativeRNPermissions"));
var _results = require("./results");
var _unsupportedMethods = require("./unsupportedMethods");
var _utils = require("./utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const POST_NOTIFICATIONS = 'android.permission.POST_NOTIFICATIONS';
const USES_LEGACY_NOTIFICATIONS = (_reactNative.Platform.OS === 'android' ? _reactNative.Platform.Version : 0) < 33;
const shouldRequestPermission = async (permission, rationale) => {
  if (rationale == null || !(await _NativeRNPermissions.default.shouldShowRequestRationale(permission))) {
    return true;
  }
  if (typeof rationale === 'function') {
    return rationale();
  }
  return new Promise(resolve => {
    const {
      buttonNegative
    } = rationale;
    _reactNative.Alert.alert(rationale.title, rationale.message, [...(buttonNegative ? [{
      text: buttonNegative,
      onPress: () => resolve(false)
    }] : []), {
      text: rationale.buttonPositive,
      onPress: () => resolve(true)
    }], {
      cancelable: false
    });
  });
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
const requestLimitedContactsModal = async () => []; //Not supported on Android

const request = async (permission, rationale) => {
  const performRequest = await shouldRequestPermission(permission, rationale);
  if (!performRequest) {
    const granted = await check(permission);
    return granted ? _results.RESULTS.GRANTED : _results.RESULTS.DENIED;
  }
  const status = await _NativeRNPermissions.default.request(permission);
  return status;
};
const checkNotifications = async () => {
  return USES_LEGACY_NOTIFICATIONS ? _NativeRNPermissions.default.checkNotifications() : {
    granted: await check(POST_NOTIFICATIONS),
    settings: {}
  };
};
const requestNotifications = async (options, rationale) => {
  if (USES_LEGACY_NOTIFICATIONS) {
    return _NativeRNPermissions.default.requestNotifications(options);
  }
  const performRequest = await shouldRequestPermission(POST_NOTIFICATIONS, rationale);
  if (!performRequest) {
    const granted = await check(POST_NOTIFICATIONS);
    return {
      status: granted ? _results.RESULTS.GRANTED : _results.RESULTS.DENIED,
      settings: {}
    };
  }
  const status = await request(POST_NOTIFICATIONS);
  return {
    status,
    settings: {}
  };
};
const checkMultiple = permissions => {
  return _NativeRNPermissions.default.checkMultiple((0, _utils.uniq)(permissions));
};
const requestMultiple = permissions => {
  return _NativeRNPermissions.default.requestMultiple((0, _utils.uniq)(permissions));
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
//# sourceMappingURL=methods.android.js.map