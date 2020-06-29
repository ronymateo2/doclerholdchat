import { InterfaceType } from "./interface-type";
import { ClockDisplay } from "./clock-display";

export interface UpdateSettingRequest {
    userName: string
    inferfaceType: InterfaceType | undefined;
    clockDisplay: ClockDisplay | undefined;
    ctrlEnter: boolean;
    language: string;
}

export interface UserSettingResponse {
    inferfaceType: InterfaceType | undefined;
    clockDisplay: ClockDisplay | undefined;
    ctrlEnter: boolean;
    language: string;
}