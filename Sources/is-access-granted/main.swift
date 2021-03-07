/* Executable that will return a JSON with the granted permissions:
 *  {
 * 		"all": boolean
 * 		"screen": boolean,
      "accessibility": boolean,
      "browserURL": boolean
 *	}
 *  
 */

import AppKit

var dictionary: [String: Any] = [
  "isAccessibilityGranted": AXIsProcessTrustedWithOptions(
    ["AXTrustedCheckOptionPrompt": false] as CFDictionary),
  "isScreenRecordingGranted": isScreenRecordingGrantedNoDialog()
]

print(try! toJson(dictionary))

exit(0)
