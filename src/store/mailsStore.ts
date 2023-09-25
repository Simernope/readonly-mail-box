import {observable} from "mobx";
import {MailType, SelectedMail} from "../mocks/types";
import {mails} from "../mocks/mails";
import {setMailsToLocalStorage} from "../api/localstorage";

const selectedMocks: Array<SelectedMail> = []

const mailsStore = observable({
    mails: mails,
    selectedMails: selectedMocks,
    setSelectedMails(value: SelectedMail) {
        this.selectedMails.push({folderId: value.folderId, mailId: value.mailId})
    },
    removeSelectedMail(value: SelectedMail) {
        const index = this.selectedMails.map(item => item.mailId).indexOf(value.mailId)
        this.selectedMails.splice(index, 1)
    },
    clearSelectedMails() {
        this.selectedMails = []
    },
    setMails(mails: Array<MailType>) {
        this.mails = mails
    },
    async addMail(mail: MailType) {
        setMailsToLocalStorage([...this.mails, mail]).then(() =>
            this.mails = [...this.mails, mail]
        )
    }
})

export default mailsStore