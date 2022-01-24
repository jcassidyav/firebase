import { DemoSharedBase } from '../utils';
import {} from '@nativescript/firebase-messaging';
import { Button, Http, ShowModalOptions } from '@nativescript/core';

export class DemoSharedFirebaseMessaging extends DemoSharedBase {
	testIt(args) {
		console.log('test firebase-messaging!');

		this.openModal(args);

		Http.getString('https://httpbin.org/get').then(
			(result: string) => {
				console.log('got result');
			},
			(e) => {
				console.log('got error');
			}
		);
	}

	openModal(args) {
		console.log(args);
		const mainView: Button = <Button>args.object;
		const option: ShowModalOptions = {
			context: { username: 'test_username', password: 'test' },
			closeCallback: (username, password) => {
				// Receive data from the modal view. e.g. username & password
				alert(`Username: ${username} : Password: ${password}`);
			},
			fullscreen: false,
		};
		const modalViewModulets = 'plugin-demos/firebase-messaging';
		mainView.showModal(modalViewModulets, option);
	}
}
