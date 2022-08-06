'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var alarmmanager = /** @class */ (function (_super) {
    tslib.__extends(alarmmanager, _super);
    function alarmmanager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    alarmmanager.prototype.coolMethod = function (arg0, success, error) { return core.cordova(this, "coolMethod", {}, arguments); };
    alarmmanager.pluginName = "com.agrollyIndia.alarmmanager";
    alarmmanager.plugin = "com.agrollyIndia.alarmmanager";
    alarmmanager.pluginRef = "alarmmanager";
    alarmmanager.repo = "https://github.com/ajinkyadatalkar1/alarmmanager.git";
    alarmmanager.install = "";
    alarmmanager.installVariables = [];
    alarmmanager.platforms = ["Android"];
    alarmmanager.decorators = [
        { type: core$1.Injectable }
    ];
    return alarmmanager;
}(core.AwesomeCordovaNativePlugin));

exports.alarmmanager = alarmmanager;
