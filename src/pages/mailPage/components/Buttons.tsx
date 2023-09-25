import {addMailToFolder} from "../../../api/localstorage";
import newMailStore from "../../../store/newMailStore";
import {useNavigate} from "react-router-dom";
import {FC} from "react";
import {MailType} from "../../../mocks/types";

type ButtonsProps = {
    mail: MailType
}
const Buttons:FC<ButtonsProps> = ({mail}) => {
    const navigate = useNavigate()

    const handleReply = () => {
        if (mail) {
            newMailStore.setIsNewMailOpen(true)
            newMailStore.setTitle(`Ответ на ${mail?.title}`)
            newMailStore.setSender(mail?.recipient)
        }
    }
    return(
        <div className='h-full flex items-end gap-5'>
            <button
                onClick={handleReply}
                className='w-fit rounded-full bg-blue-300 hover:bg-blue-400 px-3 py-2'>
                Ответить
            </button>
            <button
                onClick={() => {
                    addMailToFolder(mail?.id, {id: 3, title: 'Удаленные'})
                    navigate(-1)
                }}
                className='w-fit rounded-full px-3 py-2'>
                Удалить
            </button>
        </div>
    )
}

export default Buttons