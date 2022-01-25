import { runNativeScriptAngularApp, platformNativeScript, NativeScriptNgZone } from '@nativescript/angular';
import { AppModule } from './app.module';

import { firebase } from '@nativescript/firebase-core';

console.log('*********Atempt to init firebase************');

firebase().initializeApp();
const messaging = firebase().messaging();

messaging.onToken((token) => {
	console.log('[Firebase] onPushTokenReceivedCallback:', { token });
});

messaging.onMessage((message) => {
	console.log('Firebase onMessage', JSON.stringify(message));
});

messaging.onNotificationTap((message) => {
	console.log('Firebase onNotificationTap', message);
});

messaging
	.requestPermission({
		ios: {
			alert: true,
			announcement: undefined,
			badge: true,
			carPlay: undefined,
			criticalAlert: undefined,
			provisional: undefined,
			sound: true,
		},
	})
	.then((authStatus) => {
		console.log('NotificationPermission', 'done', authStatus);
		messaging
			.registerDeviceForRemoteMessages()
			.then(() => {
				console.log('Firebase Device Registered');

				messaging
					.getToken()
					.then((token) => {
						console.log('[Firebase] Got the token:', { token });
					})
					.catch((e) => {
						console.error('FirebaseGetTokenError', e);
					});
				//messaging.showNotificationsWhenInForeground = true;
			})
			.catch((e) => {
				console.error('registerDeviceForRemoteMessages', e);
			});
	})
	.catch((e) => {
		console.error('requestPermission', e);
	});

runNativeScriptAngularApp({
	appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule, { ngZone: new NativeScriptNgZone() }),
});
