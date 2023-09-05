// swift-tools-version:5.6
import PackageDescription

let package = Package(
	name: "ActiveWin",
	products: [
		.executable(
			name: "active-win",
			targets: [
				"ActiveWinCLI"
			]
		),
		.executable(
			name: "is-access-granted",
			targets: [
				"IsAccessGrantedCLI"
			]
		)
	],
	targets: [
		.executableTarget(
			name: "ActiveWinCLI"
		),
		.executableTarget(
			name: "IsAccessGrantedCLI"
		)
	]
)
