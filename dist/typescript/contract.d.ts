import type { LocationAccuracy, LocationAccuracyOptions, NotificationOption, NotificationSettings, Permission, PermissionStatus, Rationale } from './types';
export type Contract = {
    check(permission: Permission): Promise<boolean>;
    checkWithStatus(permission: Permission): Promise<PermissionStatus>;
    requestLimitedContactsModal(): Promise<string[]>;
    checkLocationAccuracy(): Promise<LocationAccuracy>;
    checkMultiple<P extends Permission[]>(permissions: P): Promise<Record<P[number], boolean>>;
    checkNotifications(): Promise<{
        granted: boolean;
        settings: NotificationSettings;
    }>;
    openPhotoPicker(): Promise<void>;
    openSettings(): Promise<void>;
    request(permission: Permission, rationale?: Rationale): Promise<PermissionStatus>;
    requestLocationAccuracy(options: LocationAccuracyOptions): Promise<LocationAccuracy>;
    requestMultiple<P extends Permission[]>(permissions: P): Promise<Record<P[number], PermissionStatus>>;
    requestNotifications(options: NotificationOption[], rationale?: Rationale): Promise<{
        status: PermissionStatus;
        settings: NotificationSettings;
    }>;
};
//# sourceMappingURL=contract.d.ts.map