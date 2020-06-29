import { ClockDisplay } from "./clock-display";
import { InterfaceType } from "./interface-type";

export interface Setting {
    inferfaceType: InterfaceType;
    clockDisplay: ClockDisplay;
    ctrlEnter: string | 'on' | 'off';
    language: string;
}

export const defaultSetting: Setting = {
    clockDisplay: ClockDisplay.TwentyFour,
    inferfaceType: InterfaceType.Ligth,
    ctrlEnter: 'on',
    language: 'en'
}