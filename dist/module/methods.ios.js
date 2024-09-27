"use strict";

import NativeModule from './NativeRNPermissions';
import { uniq } from './utils';
const openPhotoPicker = async () => {
  await NativeModule.openPhotoPicker();
};
const openSettings = async () => {
  await NativeModule.openSettings();
};
const check = permission => {
  return NativeModule.check(permission);
};
const checkWithStatus = permission => {
  return NativeModule.checkWithStatus(permission);
};
const requestLimitedContactsModal = async () => {
  return NativeModule.requestLimitedContactsModal();
};
const request = async permission => {
  return NativeModule.request(permission);
};
const checkLocationAccuracy = async () => {
  return NativeModule.checkLocationAccuracy();
};
const requestLocationAccuracy = ({
  purposeKey
}) => {
  return NativeModule.requestLocationAccuracy(purposeKey);
};
const checkNotifications = async () => {
  return NativeModule.checkNotifications();
};
const requestNotifications = options => {
  return NativeModule.requestNotifications(options);
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
//# sourceMappingURL=methods.ios.js.map