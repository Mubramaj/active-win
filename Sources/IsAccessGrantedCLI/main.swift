//
//  main.swift
//  activeWintest
//
//  Created by Ahmed on 3/7/21.
//  Copyright © 2021 Ahmed. All rights reserved.
//

import AppKit

var dictionary: [String: Any] = [
    "isAccessibilityGranted": AXIsProcessTrustedWithOptions(
        ["AXTrustedCheckOptionPrompt": false] as CFDictionary),
    "isScreenRecordingGranted": isScreenRecordingGrantedNoDialog()
]

print(try! toJson(dictionary))

exit(0)

