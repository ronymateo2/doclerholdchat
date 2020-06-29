import { ClockDisplay } from "./clock-display";
import { InterfaceType } from "./interface-type";

export interface Setting {
    inferfaceType: InterfaceType | undefined;
    clockDisplay: ClockDisplay | undefined;
    ctrlEnter: boolean;
    language: string;
}

export const defaultSetting: Setting = {
    clockDisplay: ClockDisplay.Twelve,
    inferfaceType: InterfaceType.Ligth,
    ctrlEnter: false,
    language: 'en'
}