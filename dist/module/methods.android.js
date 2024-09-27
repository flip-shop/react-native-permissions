"use strict";

import { Alert, Platform } from 'react-native';
import NativeModule from './NativeRNPermissions';
import { RESULTS } from './results';
import { checkLocationAccuracy, openPhotoPicker, requestLocationAccuracy } from './unsupportedMethods';
import { uniq } from './utils';
const POST_NOTIFICATIONS = 'android.permission.POST_NOTIFICATIONS';
const USES_LEGACY_NOTIFICATIONS = (Platform.OS === 'android' ? Platform.Version : 0) < 33;
const shouldRequestPermission = async (permission, rationale) => {
  if (rationale == null || !(await NativeModule.shouldShowRequestRationale(permission))) {
    return true;
  }
  if (typeof rationale === 'function') {
    return rationale();
  }
  return new Promise(resolve => {
    const {
      buttonNegative
    } = rationale;
    Alert.alert(rationale.title, rationale.message, [...(buttonNegative ? [{
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
  await NativeModule.openSettings();
};
const check = permission => {
  return NativeModule.check(permission);
};
const checkWithStatus = permission => {
  return NativeModule.checkWithStatus(permission);
};
const requestLimitedContactsModal = async () => []; //Not supported on Android

const request = async (permission, rationale) => {
  const performRequest = await shouldRequestPermission(permission, rationale);
  if (!performRequest) {
    const granted = await check(permission);
    return granted ? RESULTS.GRANTED : RESULTS.DENIED;
  }
  const status = await NativeModule.request(permission);
  return status;
};
const checkNotifications = async () => {
  return USES_LEGACY_NOTIFICATIONS ? NativeModule.checkNotifications() : {
    granted: await check(POST_NOTIFICATIONS),
    settings: {}
  };
};
const requestNotifications = async (options, rationale) => {
  if (USES_LEGACY_NOTIFICATIONS) {
    return NativeModule.requestNotifications(options);
  }
  const performRequest = await shouldRequestPermission(POST_NOTIFICATIONS, rationale);
  if (!performRequest) {
    const granted = await check(POST_NOTIFICATIONS);
    return {
      status: granted ? RESULTS.GRANTED : RESULTS.DENIED,
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
  return NativeModule.checkMultiple(uniq(permissions));
};
const requestMultiple = permissions => {
  return NativeModule.requestMultiple(uniq(permissions));
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
//# sourceMappingURL=methods.android.js.map