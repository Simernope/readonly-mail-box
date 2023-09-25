import {FolderType, MailType} from "../mocks/types";
import mailsStore from "../store/mailsStore";
import {navigationStore} from "../store";
import alertStore from "../store/alertStore";

export const getMailsFromLocalStorage = async (): Promise<Array<MailType> | undefined> => {
    const response = await localStorage.getItem('mails')
    if (response) {
        return JSON.parse(response)
    }
}

export const getMailById = async (id: number): Promise<MailType | undefined> => {
    const mails = await getMailsFromLocalStorage()
    if (mails) {
        return mails.find(mail => mail.id === id)
    }
}

export const setMailsToLocalStorage = async (mails: Array<MailType>) => {
    await localStorage.setItem('mails', JSON.stringify(mails))
}

export const getFoldersFromLocalStorage = async (): Promise<Array<FolderType> | undefined> => {
    const response = await localStorage.getItem('folders')
    if (response) {
        return JSON.parse(response)
    }
}

export const setFoldersToLocalStorage = async (folders: Array<FolderType>) => {
    await localStorage.setItem('folders', JSON.stringify(folders))
}

export const getCustomFoldersFromLocalStorage = async (): Promise<Array<FolderType> | undefined> => {
    const response = await localStorage.getItem('customFolders')
    if (response) {
        return JSON.parse(response)
    }
}

export const setCustomFoldersToLocalStorage = async (folder: FolderType) => {
    const response = await getCustomFoldersFromLocalStorage()
    if (response) {
        response[response.length] = folder
        await localStorage.setItem('customFolders', JSON.stringify(response))
        await navigationStore.setCustomFolders(response)
    } else {
        await localStorage.setItem('customFolders', JSON.stringify([folder]))
        await navigationStore.setCustomFolders([folder])
    }
     alertStore.setAlertMessage(`Добавлена папка ${folder.title}`, 'OK')
}

export const handleMailToMarkedFolder = (mailId: number, value: boolean) => {
    const mailIndex = mailsStore.mails.map(item => item.id).indexOf(mailId)
    mailsStore.mails[mailIndex].isMarked = value
    setMailsToLocalStorage(mailsStore.mails)
        .then(() => console.log('Сообщение помечено'))
        .then(() => alertStore.setAlertMessage(`Письмо ${value ? 'добавлено в папку' : 'удалено из папки'} "Помеченные"`, 'OK'))
}

export const addMailToFolder = (mailId: number, folder: FolderType) => {
    const mailIndex = mailsStore.mails.map(item => item.id).indexOf(mailId)
    mailsStore.mails[mailIndex].folder = folder
    if (folder.title === 'Удаленные') {
        mailsStore.mails[mailIndex].optionalFolders = []
        mailsStore.mails[mailIndex].isMarked = false
    }
    setMailsToLocalStorage(mailsStore.mails)
        .then(() => console.log('Сообщение перемещено'))
        .then(() => alertStore.setAlertMessage(`Письмо отправлено в папку ${folder.title}`, 'OK'))
}

export const addMailToCustomFolder = (mailId: number, folder: FolderType) => {
    const mailIndex = mailsStore.mails.map(item => item.id).indexOf(mailId)
    mailsStore.mails[mailIndex].optionalFolders.push(folder)
    setMailsToLocalStorage(mailsStore.mails)
        .then(() => console.log('Сообщения записаны'))
        .then(() => alertStore.setAlertMessage(`Письмо добавлено в папку ${folder.title}`, 'OK'))
}

export const handleMailArrayToMarkedFolder = (items: Array<{ mailId: number }>) => {
    const mailsIndexes = mailsStore.mails.map(item => item.id)
    items.forEach(item => {
        const index = mailsIndexes.indexOf(item.mailId)
        mailsStore.mails[index].isMarked = true
    })
    setMailsToLocalStorage(mailsStore.mails)
        .then(() => console.log('Сообщения помечены'))
}

export const handleMailArrayToDeletedFolder = (items: Array<{ mailId: number, folderId: number }>) => {
    const mailsIndexes = mailsStore.mails.map(item => item.id)
    items.forEach(item => {
        const index = mailsIndexes.indexOf(item.mailId)
        mailsStore.mails[index].folder = {id: item.folderId, title: 'Удаленные'}
        mailsStore.mails[index].optionalFolders = []
        mailsStore.mails[index].isMarked = false
        mailsStore.clearSelectedMails()
    })
    setMailsToLocalStorage(mailsStore.mails)
        .then(() => console.log('Сообщения удалены'))
        .then(() => alertStore.setAlertMessage('Сообщения удалены', 'OK'))
}