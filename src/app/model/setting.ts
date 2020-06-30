import { ClockDisplay } from "./clock-display";
import { InterfaceType } from "./interface-type";

export interface Setting {
    userName: string,
    inferfaceType: InterfaceType;
    clockDisplay: ClockDisplay;
    ctrlEnter: string | 'on' | 'off';
    language: string;
}

export const defaultSetting: Setting = {
    userName: 'default user name',
    clockDisplay: ClockDisplay.TwentyFour,
    inferfaceType: InterfaceType.Ligth,
    ctrlEnter: 'on',
    language: 'en'
}