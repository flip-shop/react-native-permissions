import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    check(permission: string): Promise<boolean>;
    checkWithStatus(permission: string): Promise<string>;
    requestLimitedContactsModal(): Promise<string[]>;
    checkLocationAccuracy(): Promise<string>;
    checkMultiple(permissions: string[]): Promise<Object>;
    checkNotifications(): Promise<{
        granted: boolean;
        settings: Object;
    }>;
    openPhotoPicker(): Promise<boolean>;
    openSettings(): Promise<void>;
    request(permission: string): Promise<string>;
    requestLocationAccuracy(purposeKey: string): Promise<string>;
    requestMultiple(permissions: string[]): Promise<Object>;
    requestNotifications(options: string[]): Promise<{
        status: string;
        settings: Object;
    }>;
    shouldShowRequestRationale(permission: string): Promise<boolean>;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeRNPermissions.d.ts.map