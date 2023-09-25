import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {navigationStore} from "../../store";
import {getMailById} from "../../api/localstorage";
import {MailType} from "../../mocks/types";
import {observer} from "mobx-react-lite";
import Buttons from "./components/Buttons";
import MailHeader from "./components/MailHeader";

const MailPage = () => {
    const [mail, setMail] = useState<MailType>()
    const {listType, mailId} = useParams()

    useEffect(() => {
        if (listType) {
            navigationStore.setCurrentFolder(listType)
        }
    }, [listType])

    useEffect(() => {
        if (mailId) {
            getMailById(Number(mailId))
                .then((response) => setMail(response))
        }
    }, [mailId])
    return (
        <div className='my-5 p-5 bg-white rounded-xl h-1/2'>
            {
                mail &&
                <div className='flex flex-col gap-5 h-full'>
                    <MailHeader mail={mail}/>
                    <div className='ml-10 px-5'>
                        {mail.mailMessage}
                    </div>
                    <Buttons mail={mail}/>
                </div>
            }
        </div>
    )
}

export default observer(MailPage)