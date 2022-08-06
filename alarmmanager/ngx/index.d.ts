import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name alarmmanager
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { alarmmanager } from '@awesome-cordova-plugins/alarmmanager';
 *
 *
 * constructor(private alarmmanager: alarmmanager) { }
 *
 * ...
 *
 *
 * this.alarmmanager.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class alarmmanager extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    coolMethod(arg0: any, success: any, error: any): Promise<any>;
}
