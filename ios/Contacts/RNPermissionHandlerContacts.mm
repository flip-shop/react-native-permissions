#import "RNPermissionHandlerContacts.h"

#import <Contacts/Contacts.h>
#import <RNPermissions-Swift.h>
#import <React/RCTUtils.h>

@implementation RNPermissionHandlerContacts

+ (NSArray<NSString *> * _Nonnull)usageDescriptionKeys {
  return @[@"NSContactsUsageDescription"];
}

+ (NSString * _Nonnull)handlerUniqueId {
  return @"ios.permission.CONTACTS";
}

- (RNPermissionStatus)currentStatus {
  switch ([CNContactStore authorizationStatusForEntityType:CNEntityTypeContacts]) {
    case CNAuthorizationStatusNotDetermined:
      return RNPermissionStatusNotDetermined;
    case CNAuthorizationStatusRestricted:
      return RNPermissionStatusRestricted;
    case CNAuthorizationStatusDenied:
      return RNPermissionStatusDenied;
    case CNAuthorizationStatusLimited:
      return RNPermissionStatusLimited;
    case CNAuthorizationStatusAuthorized:
      return RNPermissionStatusAuthorized;
  }
}

- (void)requestWithResolver:(void (^ _Nonnull)(RNPermissionStatus))resolve
                   rejecter:(void (^ _Nonnull)(NSError * _Nonnull))reject {
  [[CNContactStore new] requestAccessForEntityType:CNEntityTypeContacts
                                 completionHandler:^(__unused BOOL granted, NSError * _Nullable error) {
    if (error != nil && error.code != 100) { // error code 100 is permission denied
      reject(error);
    } else {
      resolve([self currentStatus]);
    }
  }];
}

- (void)requestLimitedContactsModal:(void (^ _Nonnull)(NSArray<NSString *> * _Nonnull))resolve
                           rejecter:(void (^ _Nonnull)(NSError * _Nonnull))reject {
    if (@available(iOS 18.0, *)) {
      CNAuthorizationStatus entityType = [CNContactStore authorizationStatusForEntityType:CNEntityTypeContacts];
      if (entityType == CNAuthorizationStatusLimited) {
        __weak UIWindow *window = RCTKeyWindow();
        ContactAccessPicker *picker = [[ContactAccessPicker alloc] initWithHandler:^(NSArray<NSString *> *contacts) {
          dispatch_async(dispatch_get_main_queue(), ^{
            [window.rootViewController dismissViewControllerAnimated:NO completion:nil];
          });
          resolve(contacts);
        }];
        UIViewController *viewController = picker.viewController;
        viewController.view.hidden = NO;
        viewController.modalPresentationStyle = UIModalPresentationOverFullScreen;
        [window.rootViewController presentViewController:viewController animated:NO completion:nil];
      } else {
        NSError *error = [NSError errorWithDomain:@"com.zoontek.rnpermissions" code:CNAuthorizationStatusNotDetermined userInfo:nil];
        reject(error);
      }
    }
}

@end
