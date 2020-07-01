import { LocalStorageRepository } from "./local-storage-repository";
import { Setting } from "../model/setting";

export const settingServiceImp = (repository: LocalStorageRepository, defaultSetting: Setting): SettingService => {
    return ({
        async update(request: Setting): Promise<void> {
            return repository.setItem('user-settings', JSON.stringify(request))
        },

        async get(userId: string): Promise<Setting> {
            const value = repository.getItem('user-settings')
            if (value) return JSON.parse(value) as Setting
            return { ...defaultSetting }
        },

        async getDefault(): Promise<Setting> {
            return { ...defaultSetting }
        }
    });
}

export interface SettingService {
    update(request: Setting): Promise<void>
    get(userId: string): Promise<Setting>
    getDefault(): Promise<Setting>
}