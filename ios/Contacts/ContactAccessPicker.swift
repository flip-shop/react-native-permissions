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
    self.handler = handler
  }

  @objc public lazy var viewController: UIViewController = {
    guard let handler else { return UIViewController() }
    let swiftUIView = ContactAccessPickerHostingView(handler)
    let controller = UIHostingController(rootView: swiftUIView)
    controller.view.backgroundColor = .clear
    return controller
  }()
}

@available(iOS 18.0, *) private struct ContactAccessPickerHostingView: View {
  let handler: ([String]) -> Void

  init(_ completionHandler: @escaping ([String]) -> Void) {
    handler = completionHandler
  }

  var body: some View {
    Color.clear
      .ignoresSafeArea(.all)
      .contactAccessPicker(isPresented: .constant(true), completionHandler: handler)
      .transaction { transaction in
        transaction.disablesAnimations = true
        transaction.animation = nil
      }
  }
}
