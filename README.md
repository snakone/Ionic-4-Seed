# Ionic 4 Seed
Starter App with Ionic 4

This is all You actually need to start a fresh professional Ionic 4 App, following best practices and scaffolded with the most and useful modules and services including:

# Core Module

CoreModule is a conventional name for an NgModule with providers for the singleton services you load when the application starts. Includes LanguageService and ErrorHandlerService.

# Shared Module

SharedModule is a conventional name for an NgModule with the components, directives, and pipes that you use everywhere in your app.

# Http Service

Get data from any API with the public get() method. Accepts HttpHeader and HttpParams as arguments.

# Translation Service

Translate your App easy way by just creating a json file at 'assets/i18n/' following other languages pathern's.

* Here is how a JSON should lools like

{"home.welcome": "Welcome!"}

* On the HTML you can call this simply

{{'home.welcome' | translate}}, make sure the parameter it's an string

# Error Handler Service

Customize your Error messages with this Service.

# Storage Service

* Set a value on storage:

this.storage.set('key: string', value: any);

* Load value from storage:

await this.storage.get('key: string');

Used to storage the selected Language.

# Components Module

Used to combine all shared components within your application such cards, inputs, footers, headers, etc...

# Custom SplashScreen Loader

Change splashscreen, replace splash.png from /resources

* Splash: 2732px x 2732px
* Icon: 1024px x 1024px

On the CLI run the following command:

* ionic cordova resources

# PWA Support

Progressive Web App Support, simply run the following command:

* ionic build --prod --service-worker

Then upload the /www directory to your favorite hosting.

# Pipes, Interfaces Modules

This modules are prepared so you just need to create your Pipes and Interfaces and you are ready to go.

# Build the Application

* Android

Run on the CLI - npm run android:dev

* IOS

Run on the CLI - npm run ios:dev

* Ionic DevApp

Run on the CLI - ionic serve --devapp