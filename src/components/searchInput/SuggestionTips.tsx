import {FC} from "react";
import {observer} from "mobx-react-lite";
import inputSearchStore from "../../store/inputSearchStore";
import GoogleIcon from "../GoogleIcon";
import {useNavigate} from "react-router-dom";

const SuggestionTips: FC = () => {
    const navigate = useNavigate()
    const handleClick = (mailId: number, folder: string) => {
        navigate(`/${folder}/${mailId}`)
        inputSearchStore.setIsSuggestionOpen(false)
    }

    return (
        <div
            className='border-t bg-white rounded-b-2xl divide-y absolute z-10 shadow-2xl w-[600px] max-h-[90vh] overflow-y-scroll'>
            {
                inputSearchStore.getAvailableMails()?.map((mail, index) => (
                    <div id='suggestionTips' tabIndex={0} key={index}
                         className='py-2 px-3 flex items-center gap-5 cursor-pointer'
                         onClick={() => {
                             handleClick(mail.id, mail.folder.title)
                         }}>
                        <GoogleIcon icon='mail' fontSize='text-xl'/>
                        <div className='w-full flex justify-between'>
                            <div className='flex flex-col w-full'>
                                <div className='font-medium'> {mail.title}</div>
                                <div className='flex gap-3'>
                                    <div className='flex flex-wrap items-end text-xs text-gray-500 w-1/3 '>
                                        <div>from: {mail.sender} to: {mail.recipient}</div>
                                    </div>
                                    <div className='w-2/3'>
                                        {mail.mailMessage.length > 50
                                            ? mail.mailMessage.substring(0, 50) + '...'
                                            : mail.mailMessage}
                                    </div>
                                </div>
                            </div>
                            <div className='text-sm ml-2 text-gray-800'>
                                {new Date(mail.sendingTime ).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default observer(SuggestionTips)