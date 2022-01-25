import { Component } from '@angular/core';
import { DemoSharedFirebaseMessaging } from '@demo/shared';
@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'firebase-admob',
		},
		{
			name: 'firebase-analytics',
		},
		{
			name: 'firebase-app-check',
		},
		{
			name: 'firebase-auth',
		},
		{
			name: 'firebase-core',
		},
		{
			name: 'firebase-crashlytics',
		},
		{
			name: 'firebase-database',
		},
		{
			name: 'firebase-dynamic-links',
		},
		{
			name: 'firebase-firestore',
		},
		{
			name: 'firebase-functions',
		},
		{
			name: 'firebase-in-app-messaging',
		},
		{
			name: 'firebase-installations',
		},
		{
			name: 'firebase-messaging',
		},
		{
			name: 'firebase-performance',
		},
		{
			name: 'firebase-remote-config',
		},
		{
			name: 'firebase-storage',
		},
	];
	demo: DemoSharedFirebaseMessaging;
	ngOnInit(): void {
		/* ***********************************************************
		 * Use the "ngOnInit" handler to initialize data for this component.
		 *************************************************************/

		console.info('ngOnInit');
		this.demo = new DemoSharedFirebaseMessaging();
		this.demo.testIt();
	}
}
