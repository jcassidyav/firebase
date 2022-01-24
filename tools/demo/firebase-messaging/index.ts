import { DemoSharedBase } from '../utils';
import {} from '@nativescript/firebase-messaging';
import { BiometricAuth, BiometricIDAvailableResult } from '@nativescript/biometrics';
import { Http } from '@nativescript/core';
export class DemoSharedFirebaseMessaging extends DemoSharedBase {
	fingerprint = new BiometricAuth();
	testIt() {
		console.log('test firebase-messaging!');
		this.bioAvailable().then((result) => {
			this.fingerprint
				.didBiometricDatabaseChange()
				.then((changed) => {
					if (changed) {
						return false;
					} else {
						return this.fingerprint
							.verifyBiometric({
								title: 'Biometric login',
								message: 'To make logging in easier for you',
								pinFallback: true,
							})
							.then((bioResult) => {
								console.log(JSON.stringify(bioResult));

								return Http.getString('https://httpbin.org/get')
									.then((value) => {
										console.log(value);
										alert('got http result');
										return true;
									})
									.catch((ex) => console.log('catch', ex))
									.finally(() => console.log('finally'));
							})
							.catch((err) => {
								console.log(JSON.stringify(err));
								return false;
							});
					}
				})
				.catch((ex) => {
					return false;
				});
		});
	}

	async bioAvailable(): Promise<BiometricIDAvailableResult> {
		if (!(await this.fingerprint.didBiometricDatabaseChange())) {
			return this.fingerprint.available();
		}
	}
}
