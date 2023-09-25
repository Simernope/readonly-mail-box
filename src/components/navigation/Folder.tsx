import GoogleIcon from "../GoogleIcon";
import {FolderIcons, FolderType, MailType} from "../../mocks/types";
import {FC, DragEvent, useState} from "react";
import {observer} from "mobx-react-lite";
import {navigationStore} from "../../store";
import {Link} from "react-router-dom";
import {handleMailToMarkedFolder, addMailToFolder} from "../../api/localstorage";

type FolderProps = {
    folder: FolderType
}

const Folder: FC<FolderProps> = ({folder}) => {
    const [isDropping, setIsDropping] = useState(false)
    const folderStyles = navigationStore.isMenuOpen
        ? `flex items-center px-1  gap-3  w-[230px] rounded-r-full pl-5 pr-1' ${navigationStore.currentFolder === folder.title ? 'bg-blue-200 font-medium' : 'hover:bg-gray-200'}`
        : `ml-2 rounded-full p-3 w-fit  flex items-center justify-center ${navigationStore.currentFolder === folder.title ? 'bg-blue-200' : 'hover:bg-gray-200'}`

    const handleOnDrop = (e: DragEvent<HTMLAnchorElement>) => {
        const response = e.dataTransfer.getData('mail')
        if (response) {
            const mail:MailType = JSON.parse(response)
            if (folder.title === 'Помеченные') {
                handleMailToMarkedFolder(mail.id, true)
            }
            if (folder.title === 'Удаленные') {
                addMailToFolder(mail.id, folder)
            }
            if (folder.title === 'Спам') {
                addMailToFolder(mail.id, folder)
            }
            e.dataTransfer.setData('mail', '')
        }

        setIsDropping(false)
    }

    return (
        <Link
            onDragEnter={() => setIsDropping(true)}
            onDragLeave={() => setIsDropping(false)}
            onDrop={(e) => handleOnDrop(e)}
            onDragOver={(e) => e.preventDefault()}
            to={folder.title}
            onClick={() => navigationStore.setCurrentFolder(folder.title)}
            className={`${folderStyles} cursor-pointer h-[44px] ${isDropping && 'bg-yellow-200'}`}>
            <GoogleIcon icon={FolderIcons[folder.title as keyof typeof FolderIcons]} fontSize='text-xl'/>
            {
                navigationStore.isMenuOpen && folder.title
            }
        </Link>
    )
}

export default observer(Folder)