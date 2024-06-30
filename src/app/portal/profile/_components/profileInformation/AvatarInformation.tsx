import { Mail, Phone } from "lucide-react"
import WhatsApp from '@/icons/WhatsApp';
import Facebook from '@/icons/Facebook';
import Telegram from '@/icons/Telegram';
import AvatarInformationField from "./AvatarInformationField";

type AvatarProfile = {
    name: string;
    phone: string;
    email: string;
    status: string;
    integration_whatsapp: boolean;
    integration_facebook: boolean;
    integration_telegram: boolean;
    created_at: string;
    last_edit: string;
    last_activity: string;
    is_admin: boolean;
}

type PropsAvatarProfile = {
    user: AvatarProfile
}

const AvatarInformation = ({ user }: PropsAvatarProfile) => {
    return (
        <div className="flex flex-col p-4 gap-4 w-full">
            <h2>{user.name}</h2>
            <AvatarInformationField
                icon={<Mail className="w-5 h-5 mr-2" />}
                field={user.email}
            />
            <AvatarInformationField
                icon={<Phone className="w-5 h-5 mr-2" />}
                field={user.phone}
            />
            
            {user.integration_whatsapp && (
                <AvatarInformationField
                icon={<WhatsApp className="w-5 h-5 mr-2" />}
                field={"WhatsApp Connected"}
            />
            )}
            {user.integration_facebook && (
                <AvatarInformationField
                icon={<Facebook className="w-5 h-5 mr-2" />}
                field={"Facebook Connected"}
            />
            )}
            {user.integration_telegram && (
                <AvatarInformationField
                icon={<Telegram className="w-5 h-5 mr-2" />}
                field={"Telegram Connected"}
            />
            )}
        </div>
    )
}

export default AvatarInformation