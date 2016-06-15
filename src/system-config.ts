/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/router-deprecated',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/default-change-detection',
  'app/default-change-detection/component-one',
  'app/default-change-detection/component-two',
  'app/default-change-detection/component-three',
  'app/default-change-detection/component-four',
  'app/default-change-detection/component-five',
  'app/default-change-detection/component-six',
  'app/default-change-detection/component-seven',
  'app/on-push-change-detection',
  'app/on-push-change-detection/component-one',
  'app/on-push-change-detection/component-two',
  'app/on-push-change-detection/component-three',
  'app/on-push-change-detection/component-four',
  'app/on-push-change-detection/component-five',
  'app/on-push-change-detection/component-six',
  'app/on-push-change-detection/component-seven',
  'app/on-push-change-detection/component-eight',
  'app/on-push-change-detection/component-nine',
  'app/on-push-change-detection/component-ten',
  'app/on-push-change-detection/component-eleven',
  'app/on-push-change-detection/component-twelve',
  'app/on-push-change-detection/component-thirteen',
  'app/on-push-change-detection/component-fourteen',
  'app/on-push-change-detection/component-fiveteen',
  'app/on-push-change-detection/component-sixteen',
  'app/on-push-change-detection/component-seventeen',
  'app/on-push-change-detection-observables',
  'app/on-push-change-detection-observables/component-one',
  'app/on-push-change-detection-observables/component-two',
  'app/on-push-change-detection-observables/component-three',
  'app/on-push-change-detection-observables/component-four',
  'app/on-push-change-detection-observables/component-five',
  'app/on-push-change-detection-observables/component-six',
  'app/on-push-change-detection-observables/component-seven',
  'app/on-push-change-detection-observables/component-eight',
  'app/on-push-change-detection-observables/component-nine',
  'app/on-push-change-detection-observables/component-ten',
  'app/on-push-change-detection-observables/component-eleven',
  'app/on-push-change-detection-observables/component-twelve',
  'app/on-push-change-detection-observables/component-thirteen',
  'app/on-push-change-detection-observables/component-fourteen',
  'app/on-push-change-detection-observables/component-fiveteen',
  'app/on-push-change-detection-observables/component-sixteen',
  'app/on-push-change-detection-observables/component-seventeen',
  'app/manual-change-detection',
  'app/manual-change-detection/component-one',
  'app/manual-change-detection/component-two',
  'app/manual-change-detection/component-three',
  'app/manual-change-detection/component-four',
  'app/manual-change-detection/component-five',
  'app/manual-change-detection/component-six',
  'app/manual-change-detection/component-seven',
  'app/manual-change-detection/component-eight',
  'app/manual-change-detection/component-nine',
  'app/manual-change-detection/component-ten',
  'app/manual-change-detection/component-eleven',
  'app/manual-change-detection/component-twelve',
  'app/manual-change-detection/component-thirteen',
  'app/manual-change-detection/component-fourteen',
  'app/manual-change-detection/component-fiveteen',
  'app/manual-change-detection/component-sixteen',
  'app/manual-change-detection/component-seventeen',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
