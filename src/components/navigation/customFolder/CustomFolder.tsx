import {FolderType, MailType} from "../../../mocks/types";
import {DragEvent, FC, useState} from "react";
import {observer} from "mobx-react-lite";
import {navigationStore} from "../../../store";
import {Link} from "react-router-dom";
import {addMailToCustomFolder} from "../../../api/localstorage";

type FolderProps = {
    folder: FolderType
}

const CustomFolder: FC<FolderProps> = ({folder}) => {
    const [isDropping, setIsDropping] = useState(false)

    const folderStyles = navigationStore.isMenuOpen
        ? `flex items-center px-1  gap-3  w-[230px] rounded-r-full pl-5 pr-1' ${navigationStore.currentFolder === folder.title ? 'bg-blue-200 font-medium' : 'hover:bg-gray-200'}`
        : `ml-2 rounded-full p-3 w-[44px] flex items-center justify-center ${navigationStore.currentFolder === folder.title ? 'bg-blue-200': 'hover:bg-gray-200'}`
    const handleOnDrop = (e: DragEvent<HTMLAnchorElement>) => {
        const mail: MailType = JSON.parse(e.dataTransfer.getData('mail'))
        addMailToCustomFolder(mail.id, folder)
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
            <div className='font-medium'>{folder.title.toUpperCase()[0]}</div>
            {
                navigationStore.isMenuOpen && folder.title
            }
        </Link>
    )
}

export default observer(CustomFolder)