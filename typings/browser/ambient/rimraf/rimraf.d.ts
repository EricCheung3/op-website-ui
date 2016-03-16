// Compiled using typings@0.6.10
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/09f3d7a8dc79f448b538862c3ad5872f75112d60/rimraf/rimraf.d.ts
// Type definitions for rimraf
// Project: https://github.com/isaacs/rimraf
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/rimraf.d.ts

declare module "rimraf" {
	function rimraf(path: string, callback: (error: Error) => void): void;
	module rimraf {
		export function sync(path: string): void;
		export var EMFILE_MAX: number;
		export var BUSYTRIES_MAX: number;
	}
	export = rimraf;
}