import {useParams} from "react-router-dom";
import Table from "../components/table";
import mailsStore from "../store/mailsStore";
import {folders} from "../mocks/folders";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {navigationStore} from "../store";
const MailListPage = () => {
    const {listType} = useParams()
    const getCurrentMailList = () => {
        switch (listType) {
            case 'Вся почта':
                return mailsStore.mails
            case 'Помеченные':
                return mailsStore.mails.filter((mail) => mail.isMarked)
            default:
                const values = Object.values(folders.map(folder => folder.title))
                if (listType && values.includes(listType)) {
                    return mailsStore.mails.filter((mail =>
                            mail.folder.title === listType
                    ))
                }
                if (listType && !values.includes(listType)) {
                    return mailsStore.mails.filter((mail => {
                            const customFolders = mail.optionalFolders?.map(folder => folder?.title)
                            return customFolders?.includes(listType)
                        }
                    ))
                }
                return []
        }
    }

    useEffect(() => {
        if (listType) {
            navigationStore.setCurrentFolder(listType)
        }
    },[listType])

    return (
        <div className=''>
            <Table mails={getCurrentMailList()}/>
        </div>
    )
}

export default observer(MailListPage)