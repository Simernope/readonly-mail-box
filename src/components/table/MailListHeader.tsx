import mailsStore from "../../store/mailsStore";
import {observer} from "mobx-react-lite";
import GoogleIcon from "../GoogleIcon";
import {handleMailArrayToDeletedFolder} from "../../api/localstorage";
const MailListHeader = () => {
    return  (
        <div className={` p-3 border-b h-[55px]`}>
            {
                mailsStore.selectedMails.length > 0 &&
                <div className='flex gap-3'>
                    <div className='cursor-pointer' onClick={() => handleMailArrayToDeletedFolder(mailsStore.selectedMails)}>
                        <GoogleIcon icon='delete' fontSize='text-xl'/>
                    </div>
                </div>
            }
        </div>
    )
}

export default observer(MailListHeader)