export default {
  entry: 'dist/src/index.js',
  dest: 'dist/src/bundles/ng-selector.module.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.ng-selector',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}