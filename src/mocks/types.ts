export enum FolderIcons {
    'Входящие' = 'inbox',
    'Исходящие' = 'send',
    'Удаленные' = 'delete',
    'Вся почта' = 'stacked_email',
    'Спам' = 'report',
    'Черновики' = 'note',
    'Помеченные' = 'star'
}

export type mainFolders = 'Входящие' | 'Исходящие' | 'Удаленные' | 'Помеченные' | 'Вся почта' | 'Спам' | 'Черновики'

export type FolderType = {
    id: number
    title: mainFolders | string
}

export type MailType = {
    id: number
    title: string
    mailMessage: string
    sendingTime: number
    sender: string
    recipient: string
    isMarked: boolean
    folder: FolderType
    optionalFolders: Array<FolderType | undefined>
    prevMail?: MailType
}

export type SelectedMail = {
    folderId: number
    mailId: number
}