//
//  ContactAccessPicker.swift
//  Permission-Contacts
//

import ContactsUI
import SwiftUI
import UIKit

public class ContactAccessPicker: NSObject {
  private let handler: ([String]) -> Void

  @objc public init(handler: @escaping ([String]) -> Void) {
    self.handler = handler
    super.init()
  }

  @available(iOS 18.0, *)
  @objc public func viewController() -> UIViewController {
    let swiftUIView = ContactAccessPickerHostingView(handler)
    return UIHostingController(rootView: swiftUIView)
  }
}

@available(iOS 18.0, *) private struct ContactAccessPickerHostingView: View {
  @State var presented = true
  let handler: ([String]) -> Void

  init(_ completionHandler: @escaping ([String]) -> Void) {
    handler = completionHandler
  }

  var body: some View {
    Spacer()
      .contactAccessPicker(isPresented: $presented, completionHandler: handler)
      .onChange(of: presented) { newValue in
        if newValue == false {
          handler([])
        }
      }
  }
}
