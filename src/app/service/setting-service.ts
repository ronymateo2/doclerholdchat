import { UpdateSettingRequest, UserSettingResponse } from "../model/update-setting-request";
import { LocalStorageRepository } from "./local-storage-repository";

export const settingService = (repository: LocalStorageRepository) => {
    return ({
        async update(request: UpdateSettingRequest): Promise<void> {
            return repository.setItem('user-settings', JSON.stringify(request))
        },

        async get(): Promise<UserSettingResponse | undefined> {
            const value = repository.getItem('user-settings')
            if (value) return JSON.parse(value) as UserSettingResponse
            return;
        }
    });
}