import { createContext } from 'react';
import { MessageService, } from '../service/message-service';
import { SettingService, } from '../service/setting-service';
import { UserService } from '../service/user-service';


export interface ServiceContextProps {
  messageService: MessageService
  settingService: SettingService
  userService: UserService
}

const ServiceContext = createContext<Partial<ServiceContextProps>>({});

export { ServiceContext }
