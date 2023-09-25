import newMailStore from "../../../store/newMailStore";
import {FC} from "react";
import {observer} from "mobx-react-lite";
import {MailType} from "../../../mocks/types";
import mailsStore from "../../../store/mailsStore";
import alertStore from "../../../store/alertStore";

/*setCustomFoldersToLocalStorage({
    id: Date.now(),
    title: folderTitle
}).then(() => {
    setFolderTitle("")
    setIsNewMailOpen(false)
    console.log('Папка добавлена')
})*/
const ButtonsGroup:FC = () => {
    const {isNewMailOpen, mailText, title, sender} = newMailStore
    const handleSubmit = () => {
        if(isNewMailOpen && mailText && title && sender){
            getPayload()
            clearFields()
        }else{
            console.log('Мало данных')
        }
    }

    const getPayload = () => {
        const payload: MailType = {
            id: Date.now(),
            title: title,
            sender: 'simeon02@mail.com',
            isMarked: false,
            recipient: sender,
            mailMessage: mailText,
            sendingTime: Date.now(),
            optionalFolders: [],
            folder: {id: 0, title: 'Входящие'}
        }
        console.log(payload)
        mailsStore.addMail(payload)
            .then(() => alertStore.setAlertMessage(`Письмо отправлено`, 'OK'))
            .catch()
    }

    const clearFields = () => {
        newMailStore.setMailText("")
        newMailStore.setTitle("")
        newMailStore.setSender("")
        newMailStore.setIsNewMailOpen(false)
    }


    return(
        <div className='flex gap-3'>
            <button
                onClick={handleSubmit}
                className='rounded-full bg-blue-300 hover:bg-blue-400 px-3 py-2'
            >Отправить письмо
            </button>
            <button
                className='rounded-full px-3 py-2'
                onClick={() => newMailStore.setIsNewMailOpen(false)}>Отмена
            </button>

        </div>
    )
}

export default observer(ButtonsGroup)