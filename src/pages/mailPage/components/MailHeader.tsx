import {ReactComponent as StarChecked} from '../../../components/table/assets/starChecked.svg'
import {ReactComponent as Star} from '../../../components/table/assets/star.svg'
import {MailType} from "../../../mocks/types";
import {FC, useEffect, useState} from "react";
import {handleMailToMarkedFolder} from "../../../api/localstorage";

type MailHeaderProps = {
    mail: MailType
}
const MailHeader:FC<MailHeaderProps> = ({mail}) => {
    const [isMailMarked, setIsMarked] = useState<boolean>()
    const handleMarkMessage = () => {
        if(mail && mail.id){
            if (!isMailMarked) {
                handleMailToMarkedFolder(mail.id, true)
                setIsMarked(true)
            } else {
                handleMailToMarkedFolder(mail.id, false)
                setIsMarked(false)
            }
        }
    }

    useEffect(() => {
        setIsMarked(mail.isMarked)
    }, [mail])

    return(
        <>
            <div className='flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <div className='font-medium text-xl'>{mail.title}</div>
                    <div className='text-sm p-1 bg-gray-400 text-white rounded'>{mail.folder.title}</div>
                </div>
                <div className={`flex items-center gap-2 p-3`}>
                    {
                        isMailMarked
                            ? <span
                                onClick={() => handleMarkMessage()}
                                className='cursor-pointer'><StarChecked/>
                                </span>
                            : <span
                                onClick={() => handleMarkMessage()}
                                className='cursor-pointer'>
                                        <Star/>
                                    </span>
                    }
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div
                    className='text-white font-medium rounded-full w-10 h-10 bg-gray-400 flex items-center justify-center'>
                    {mail.sender[0].toUpperCase()}
                </div>
                <div className='flex flex-col '>
                    <div className='font-medium'>{mail.sender}</div>
                    <div className='text-sm text-gray-700'>Кому: мне</div>
                </div>

            </div>
        </>
    )
}

export default MailHeader