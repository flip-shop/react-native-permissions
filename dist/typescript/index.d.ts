export { PERMISSIONS } from './permissions';
export { RESULTS } from './results';
export * from './types';
export declare const check: (permission: import("./types").Permission) => Promise<boolean>;
export declare const checkWithStatus: (permission: import("./types").Permission) => Promise<import("./types").PermissionStatus>;
export declare const requestLimitedContactsModal: () => Promise<string[]>;
export declare const checkLocationAccuracy: () => Promise<import("./types").LocationAccuracy>;
export declare const checkMultiple: <P extends import("./types").Permission[]>(permissions: P) => Promise<Record<P[number], boolean>>;
export declare const checkNotifications: () => Promise<{
    granted: boolean;
    settings: import("./types").NotificationSettings;
}>;
export declare const openPhotoPicker: () => Promise<void>;
export declare const openSettings: () => Promise<void>;
export declare const request: (permission: import("./types").Permission, rationale?: import("./types").Rationale) => Promise<import("./types").PermissionStatus>;
export declare const requestLocationAccuracy: (options: import("./types").LocationAccuracyOptions) => Promise<import("./types").LocationAccuracy>;
export declare const requestMultiple: <P extends import("./types").Permission[]>(permissions: P) => Promise<Record<P[number], import("./types").PermissionStatus>>;
export declare const requestNotifications: (options: import("./types").NotificationOption[], rationale?: import("./types").Rationale) => Promise<{
    status: import("./types").PermissionStatus;
    settings: import("./types").NotificationSettings;
}>;
declare const _default: {
    PERMISSIONS: Readonly<{
        readonly ANDROID: import("./permissions.android").AndroidPermissionMap;
        readonly IOS: import("./permissions.ios").IOSPermissionMap;
        readonly WINDOWS: import("./permissions.windows").WindowsPermissionMap;
    }>;
    RESULTS: Readonly<{
        readonly BLOCKED: "blocked";
        readonly DENIED: "denied";
        readonly GRANTED: "granted";
        readonly LIMITED: "limited";
    }>;
    check: (permission: import("./types").Permission) => Promise<boolean>;
    checkWithStatus: (permission: import("./types").Permission) => Promise<import("./types").PermissionStatus>;
    requestLimitedContactsModal: () => Promise<string[]>;
    checkLocationAccuracy: () => Promise<import("./types").LocationAccuracy>;
    checkMultiple: <P extends import("./types").Permission[]>(permissions: P) => Promise<Record<P[number], boolean>>;
    checkNotifications: () => Promise<{
        granted: boolean;
        settings: import("./types").NotificationSettings;
    }>;
    openPhotoPicker: () => Promise<void>;
    openSettings: () => Promise<void>;
    request: (permission: import("./types").Permission, rationale?: import("./types").Rationale) => Promise<import("./types").PermissionStatus>;
    requestLocationAccuracy: (options: import("./types").LocationAccuracyOptions) => Promise<import("./types").LocationAccuracy>;
    requestMultiple: <P extends import("./types").Permission[]>(permissions: P) => Promise<Record<P[number], import("./types").PermissionStatus>>;
    requestNotifications: (options: import("./types").NotificationOption[], rationale?: import("./types").Rationale) => Promise<{
        status: import("./types").PermissionStatus;
        settings: import("./types").NotificationSettings;
    }>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map