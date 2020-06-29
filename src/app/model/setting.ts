import { ClockDisplay } from "./clock-display";
import { IntefaceType } from "./inteface-type";

export interface Setting {
    inferfaceType: IntefaceType | undefined;
    clockDisplay: ClockDisplay | undefined;
    ctrlEnter: boolean;
    language: string;
}

export const defaultSetting: Setting = {
    clockDisplay: ClockDisplay.Twelve,
    inferfaceType: IntefaceType.Ligth,
    ctrlEnter: false,
    language: 'en'
}