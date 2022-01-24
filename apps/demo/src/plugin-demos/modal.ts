import { EventData, fromObject, Page } from '@nativescript/core';

let closeCallback;

export function onShownModally(args) {
	closeCallback = args.closeCallback;
}

export function onLoginButtonTap(args) {
	closeCallback();
}
