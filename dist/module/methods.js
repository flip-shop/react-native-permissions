"use strict";

import { RESULTS } from './results';
import { checkLocationAccuracy, openPhotoPicker, requestLocationAccuracy } from './unsupportedMethods';
const openSettings = async () => {};
const check = async () => {
  return false;
};
const checkWithStatus = async () => {
  return RESULTS.BLOCKED;
};
const requestLimitedContactsModal = async () => {
  return []; //Not supported on web
};
const request = async () => {
  return RESULTS.BLOCKED;
};
const checkNotifications = async () => {
  return {
    granted: false,
    settings: {}
  };
};
const requestNotifications = async () => {
  return {
    status: RESULTS.BLOCKED,
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
    output[permission] = RESULTS.BLOCKED;
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
//# sourceMappingURL=methods.js.map