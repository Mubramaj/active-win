'use strict';

module.exports = options => {
	if (process.platform === 'darwin') {
		return require('./lib/macos.js')(options);
	}

	if (process.platform === 'linux') {
		return require('./lib/linux.js')(options);
	}

	if (process.platform === 'win32') {
		return require('./lib/windows.js')(options);
	}

	return Promise.reject(new Error('macOS, Linux, and Windows only'));
};

module.exports.sync = options => {
	if (process.platform === 'darwin') {
		return require('./lib/macos.js').sync(options);
	}

	if (process.platform === 'linux') {
		return require('./lib/linux.js').sync(options);
	}

	if (process.platform === 'win32') {
		return require('./lib/windows.js').sync(options);
	}

	throw new Error('macOS, Linux, and Windows only');
};

module.exports.getOpenWindows = options => {
	if (process.platform === 'darwin') {
		return require('./lib/macos.js').getOpenWindows(options);
	}

	if (process.platform === 'linux') {
		return require('./lib/linux.js').getOpenWindows(options);
	}

	if (process.platform === 'win32') {
		return require('./lib/windows.js').getOpenWindows(options);
	}

	return Promise.reject(new Error('macOS, Linux, and Windows only'));
};

module.exports.getOpenWindowsSync = options => {
	if (process.platform === 'darwin') {
		return require('./lib/macos.js').getOpenWindowsSync(options);
	}

	if (process.platform === 'linux') {
		return require('./lib/linux.js').getOpenWindowsSync(options);
	}

	if (process.platform === 'win32') {
		return require('./lib/windows.js').getOpenWindowsSync(options);
	}

	throw new Error('macOS, Linux, and Windows only');
};

module.exports.isAccessGranted = () => {
	switch (process.platform) {
		case 'darwin': {
			// MAC OS needs specific accesses to get the active window. These accesses are
			// resolved by the isAccessGranted method of the macos lib
			return require('./lib/macos.js').isAccessGranted();
		}

		case 'linux':
		case 'win32': {
			// Linux and Windows do not need specific access to get the active window, set all to true
			return {
				all: true,
				screen: true,
				accessibility: true
			};
		}

		default: {
			throw new Error('macOS, Linux, and Windows only');
		}
	}
};
