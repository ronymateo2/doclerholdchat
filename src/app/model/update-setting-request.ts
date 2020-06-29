import { IntefaceType } from "./inteface-type";
import { ClockDisplay } from "./clock-display";

export interface UpdateSettingRequest {
    userName: string
    inferfaceType: IntefaceType | undefined;
    clockDisplay: ClockDisplay | undefined;
    ctrlEnter: boolean;
    language: string;
}

export interface UserSettingResponse {
    inferfaceType: IntefaceType | undefined;
    clockDisplay: ClockDisplay | undefined;
    ctrlEnter: boolean;
    language: string;
}