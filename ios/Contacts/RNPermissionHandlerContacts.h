#import "RNPermissions.h"

@interface RNPermissionHandlerContacts : NSObject<RNPermissionHandler>

- (void)requestLimitedContactsModal:(void (^ _Nonnull)(NSArray<NSString *> * _Nonnull))resolve
                           rejecter:(void (__unused ^ _Nonnull)(NSError * _Nonnull))reject;

@end
