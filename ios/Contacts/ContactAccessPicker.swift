//
//  ContactAccessPicker.swift
//  Permission-Contacts
//

import ContactsUI
import SwiftUI
import UIKit

@available(iOS 18.0, *) public class ContactAccessPicker: NSObject {
  private var handler: (([String]) -> Void)?

  @objc public init(handler: @escaping ([String]) -> Void) {
    super.init()
    self.handler = { contacts in
      DispatchQueue.main.async {
        self.viewController.dismiss(animated: false)
      }
      handler(contacts)
    }
  }

  @objc public lazy var viewController: UIViewController = {
    guard let handler else { return UIViewController() }
    let swiftUIView = ContactAccessPickerHostingView(handler)
    return UIHostingController(rootView: swiftUIView)
  }()
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
