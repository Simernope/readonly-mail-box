import {Outlet, useNavigate, useParams} from "react-router-dom";
import NavSection from "./navigation";
import {observer} from "mobx-react-lite";
import SearchInput from "./searchInput";
import {useEffect} from "react";
import {navigationStore} from "../store";
import {folders} from "../mocks/folders";
import {
    getCustomFoldersFromLocalStorage,
    getFoldersFromLocalStorage,
    getMailsFromLocalStorage,
    setFoldersToLocalStorage,
    setMailsToLocalStorage
} from "../api/localstorage";
import mailsStore from "../store/mailsStore";
import {mails} from "../mocks/mails";
import Alert from "./Alert";
import alertStore from "../store/alertStore";


const Layout = () => {
    const {listType} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!listType) {
            navigationStore.setCurrentFolder('Входящие')
            navigate('/Входящие')
        } else {
            if (folders.map(folder => folder.title).includes(listType)) {
                navigationStore.setCurrentFolder(listType)
            } else {
                navigationStore.setCurrentFolder(listType)
                navigate(`/${listType}`)
            }
        } //eslint-disable-next-line
    }, [])


    useEffect(() => {
        getMailsFromLocalStorage()
            .then(response => response ? mailsStore.setMails(response) : setMailsToLocalStorage(mails))
        getFoldersFromLocalStorage()
            .then(response => response ? navigationStore.setFolders(response) : setFoldersToLocalStorage(folders))
        getCustomFoldersFromLocalStorage()
            .then(response => response && navigationStore.setCustomFolders(response))
    }, [])

    return (
        <main className='bg-gray-50 w-full min-h-screen py-5'>
            {alertStore.alertMessage.length > 0 && <Alert alertMessage={alertStore.alertMessage}/>}
            <div className='flex gap-10'>
                <NavSection/>
                <div className='w-full h-[85vh] mr-10'>
                    <SearchInput/>
                    <Outlet/>
                </div>
            </div>
        </main>
    )
}

export default observer(Layout)