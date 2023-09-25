import {ReactComponent as Star} from './assets/star.svg'
import {ReactComponent as StarChecked} from './assets/starChecked.svg'
import {FC, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {handleMailToMarkedFolder} from "../../api/localstorage";
import mailsStore from "../../store/mailsStore";
import {useParams} from "react-router-dom";

type IconsGroupProps = {
    mailId: number
    folderId: number
    isMailMarked: boolean
}

const IconsGroup: FC<IconsGroupProps> = ({mailId, isMailMarked, folderId}) => {
    const [checked, setChecked] = useState(false)
    const {listType} = useParams()

    const handleMarkMessage = () => {
        if (!isMailMarked) {
            handleMailToMarkedFolder(mailId, true)
        } else {
            handleMailToMarkedFolder(mailId, false)
        }
    }

    const handleChecked = () => {
        if (checked) {
            setChecked(false)
            mailsStore.removeSelectedMail({folderId, mailId})
        } else {
            setChecked(true)
            mailsStore.setSelectedMails({folderId, mailId})
        }
    }

    useEffect(() => {
        mailsStore.clearSelectedMails()
        setChecked(false)
    }, [listType])

    return (
        <div className={`flex items-center gap-2 p-3 ${listType === 'Удаленные' && 'invisible'}`}>
            <input type='checkbox' checked={checked} onChange={handleChecked}/>
            {
                isMailMarked
                    ? <span onClick={() => handleMarkMessage()} className='cursor-pointer'><StarChecked/></span>
                    : <span onClick={() => handleMarkMessage()} className='cursor-pointer'><Star/></span>
            }
        </div>
    )
}

export default observer(IconsGroup)