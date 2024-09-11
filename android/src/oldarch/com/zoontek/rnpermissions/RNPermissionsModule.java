package com.zoontek.rnpermissions;

import android.util.SparseArray;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.PermissionListener;

@ReactModule(name = RNPermissionsModuleImpl.NAME)
public class RNPermissionsModule extends ReactContextBaseJavaModule implements PermissionListener {

  private final SparseArray<Callback> mCallbacks;

  public RNPermissionsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    mCallbacks = new SparseArray<Callback>();
  }

  @NonNull
  @Override
  public String getName() {
    return RNPermissionsModuleImpl.NAME;
  }

  @ReactMethod
  public void openSettings(Promise promise) {
    RNPermissionsModuleImpl.openSettings(getReactApplicationContext(), promise);
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  public boolean check(String permission) {
    return RNPermissionsModuleImpl.check(getReactApplicationContext(), permission);
  }

  @ReactMethod
  public void checkNotifications(Promise promise) {
    RNPermissionsModuleImpl.checkNotifications(getReactApplicationContext(), promise);
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  public WritableMap checkMultiple(ReadableArray permissions) {
    return RNPermissionsModuleImpl.checkMultiple(getReactApplicationContext(), permissions);
  }

  @ReactMethod
  public void request(String permission, Promise promise) {
    RNPermissionsModuleImpl.request(getReactApplicationContext(), this, mCallbacks, permission, promise);
  }

  @ReactMethod
  public void requestNotifications(ReadableArray options, Promise promise) {
    RNPermissionsModuleImpl.requestNotifications(getReactApplicationContext(), promise);
  }

  @ReactMethod
  public void requestMultiple(ReadableArray permissions, Promise promise) {
    RNPermissionsModuleImpl.requestMultiple(getReactApplicationContext(), this, mCallbacks, permissions, promise);
  }

  @ReactMethod
  public void shouldShowRequestRationale(String permission, Promise promise) {
    RNPermissionsModuleImpl.shouldShowRequestRationale(getReactApplicationContext(), permission, promise);
  }

  @ReactMethod
  public void checkLocationAccuracy(Promise promise) {
    RNPermissionsModuleImpl.checkLocationAccuracy(promise);
  }

  @ReactMethod
  public void requestLocationAccuracy(String purposeKey, Promise promise) {
    RNPermissionsModuleImpl.requestLocationAccuracy(promise);
  }

  @ReactMethod
  public void openPhotoPicker(Promise promise) {
    RNPermissionsModuleImpl.openPhotoPicker(promise);
  }

  @Override
  public boolean onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    return RNPermissionsModuleImpl.onRequestPermissionsResult(getReactApplicationContext(), mCallbacks, requestCode, grantResults);
  }
}
