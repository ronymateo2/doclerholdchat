import { Setting, defaultSetting } from "../model/setting";
import { settingServiceImp } from "./setting-service";
import LocalStorageFake from "../../__mock__/localstorage";
import { ClockDisplay } from "../model/clock-display";
import { InterfaceType } from "../model/interface-type";

describe('setting-service', () => {

    it('should get default values', async () => {
        const settingSrv = settingServiceImp(new LocalStorageFake(), defaultSetting)
        let value = await settingSrv.getDefault()
        expect(value).toStrictEqual(defaultSetting)
    })

    it('should get default value if there is none', async () => {
        const settingSrv = settingServiceImp(new LocalStorageFake(), defaultSetting);
        let value = await settingSrv.get('dummy_user_id')
        expect(value).toStrictEqual(defaultSetting)
    })

    it('should get insert value', async () => {
        const settingSrv = settingServiceImp(new LocalStorageFake(), defaultSetting);
        const sett: Setting = {
            userName: 'userName',
            clockDisplay: ClockDisplay.TwentyFour,
            inferfaceType: InterfaceType.Ligth,
            ctrlEnter: 'on',
            language: 'en'
        }
        await settingSrv.update(sett)
        let value = await settingSrv.get('dummy_user_id')
        expect(value).toStrictEqual(sett)
    })
})