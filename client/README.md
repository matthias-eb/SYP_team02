# Client

This is the web app client part of this [server](http://gerona.nt.fh-koeln.de/gitlab/syp18/team02/server).

An example is avalible [here](http://gerona.nt.fh-koeln.de/gitlab/fheinri2/frondend). If you do not have enough rigths to see the example, please do not hesitate to contact Florian Heinrich.


## What used what

The whole appearance is developed with the JavaScript-based open-source front-end web application framework AngularJS. AngularJS is working (here) with TypeScript and Scss. This is enough to get a normal browser based web application working.

To get this application also on your phone as an app (e.g. Android App) we use ionic. Ionic is based on cordova. For more information take a look on their web pages.

Last but not least, to get the normal computer feeling, a normal desktop application, we use electron. Electron can build your web application to a normal desktop application no matter if you prefere Windows, Apple or Linux.


## Installation

### Recommended

#### Global npm packages

If you want to develop more applications like this we would recommend to consider to install the following packages globally.

- ```npm install -g @angular/cli```
- ```npm install -g ionic@latest```
- ```npm install -g cordova```
- ```npm install -g electron```

If you have problems to install electron globally due to premissions you consider the following command. But please inform yourself first! _(This is **NOT** recommended!)_
```sudo npm install -g electron --unsafe-perm=true --allow-root```

#### VSCode extensions

If you want to develop in Visual Studio Code we would recommend to install the following extensions:

- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

### Installation
```bash
npm install
ionic cordova platform add android
```


## npm

Do not forget that npm brings many useful tools like e.g.
- ```npm list -g --depth=0```
- ```npm outdated```
- ```npm audit```


## Building and Running

### Ionic (Web Browser)

Ionic has some nice tools like the lab for first mobile testing.
```bash
ionic serve --help
ionic serve --lab --no-open
```

### Ionic / Cordova (Mobile App)

Also do not forget that ionic comes with cordova that has many benefits.
```bash
# Add android as a target platform.
# You only need to do this once!
ionic cordova platform add android
```

For running native mobile/desktop apps do not forget to build the application first.
```bash
npm run build
```

#### Run on Emulator / Mobile Device
Android Virtual Device (Android 7.1.1)

```bash
# If not already done.
ionic cordova platform add android

# Do not forget to build page to see changes.
npm run build

# If a realy mobile phone is connected and in debug mode this will start on the phone
# otherwise in an elmulator (if installed)
npm run android
```

#### Export APK (Examples)
```bash
ionic cordova build android
ionic cordova build android --release
ionic cordova build android --prod --release -- -- --minSdkVersion=21 # (optional)
ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias # (optional)
```

### Electron (Desktop App)

For running a desktop apps you also need to build the application first.
```bash
npm run build
npm run electron
```


## Development

Do also not forget that there are tools which do many things for you.

```bash
# create a new component/page
ng generate component <component-name>

# create a new serivce
ng generate service services/<service-name>
```
