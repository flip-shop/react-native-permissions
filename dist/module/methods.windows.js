"use strict";

import { NativeModules } from 'react-native';
import { RESULTS } from './results';
import { checkLocationAccuracy, openPhotoPicker, requestLocationAccuracy } from './unsupportedMethods';
import { uniq } from './utils';
const NativeModule = NativeModules.RNPermissions;
const openSettings = async () => {
  await NativeModule.OpenSettings();
};
const check = async permission => {
  const status = await NativeModule.Check(permission);
  return status === RESULTS.GRANTED;
};
const request = permission => {
  return NativeModule.Request(permission);
};
const checkWithStatus = async () => {
  return 'granted';
};
const requestLimitedContactsModal = async () => {
  return []; //Not supported on windows
};
const checkNotifications = async () => {
  const status = await NativeModule.CheckNotifications();
  return {
    granted: status === RESULTS.GRANTED,
    settings: {}
  };
};
const requestNotifications = async () => {
  const status = await NativeModule.CheckNotifications();
  return {
    status,
    settings: {}
  };
};
const checkMultiple = async permissions => {
  const output = {};
  for (const permission of uniq(permissions)) {
    output[permission] = await check(permission);
  }
  return output;
};
const requestMultiple = async permissions => {
  const output = {};
  for (const permission of uniq(permissions)) {
    output[permission] = await request(permission);
  }
  return output;
};
export const methods = {
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
//# sourceMappingURL=methods.windows.js.map