package com.zoontek.rnpermissions;

import android.util.SparseArray;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.PermissionListener;

@ReactModule(name = RNPermissionsModuleImpl.NAME)
public class RNPermissionsModule extends NativeRNPermissionsSpec implements PermissionListener {

  private final SparseArray<Callback> mCallbacks;

  public RNPermissionsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    mCallbacks = new SparseArray<Callback>();
  }

  @Override
  @NonNull
  public String getName() {
    return RNPermissionsModuleImpl.NAME;
  }

  @Override
  public void openSettings(Promise promise) {
    RNPermissionsModuleImpl.openSettings(getReactApplicationContext(), promise);
  }

  @Override
  public boolean check(String permission) {
    return RNPermissionsModuleImpl.check(getReactApplicationContext(), permission);
  }

  @Override
  public void checkNotifications(Promise promise) {
    RNPermissionsModuleImpl.checkNotifications(getReactApplicationContext(), promise);
  }

  @Override
  public WritableMap checkMultiple(ReadableArray permissions) {
    return RNPermissionsModuleImpl.checkMultiple(getReactApplicationContext(), permissions);
  }

  @Override
  public void request(String permission, Promise promise) {
    RNPermissionsModuleImpl.request(getReactApplicationContext(), this, mCallbacks, permission, promise);
  }

  @Override
  public void requestNotifications(ReadableArray options, Promise promise) {
    RNPermissionsModuleImpl.requestNotifications(getReactApplicationContext(), promise);
  }

  @Override
  public void requestMultiple(ReadableArray permissions, Promise promise) {
    RNPermissionsModuleImpl.requestMultiple(getReactApplicationContext(), this, mCallbacks, permissions, promise);
  }

  @Override
  public void shouldShowRequestRationale(String permission, Promise promise) {
    RNPermissionsModuleImpl.shouldShowRequestRationale(getReactApplicationContext(), permission, promise);
  }

  @Override
  public void checkLocationAccuracy(Promise promise) {
    RNPermissionsModuleImpl.checkLocationAccuracy(promise);
  }

  @Override
  public void requestLocationAccuracy(String purposeKey, Promise promise) {
    RNPermissionsModuleImpl.requestLocationAccuracy(promise);
  }

  @Override
  public void openPhotoPicker(Promise promise) {
    RNPermissionsModuleImpl.openPhotoPicker(promise);
  }

  @Override
  public boolean onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    return RNPermissionsModuleImpl.onRequestPermissionsResult(getReactApplicationContext(), mCallbacks, requestCode, grantResults);
  }
}
