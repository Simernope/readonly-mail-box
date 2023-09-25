import {observable} from "mobx";
import {MailType} from "../mocks/types";
import mailsStore from "./mailsStore";

const inputSearchStore = observable({
    searchInput: "",
    setSearchInput(value: string) {
        this.searchInput = value;
    },
    isSuggestionOpen: false,
    setIsSuggestionOpen(value: boolean) {
        this.isSuggestionOpen = value
    },
    getAvailableMails() {
        const filteredMails: Array<MailType> = mailsStore.mails.filter((mail) => {
            const arr = Object.values(mail)
            const coincidences = arr.filter(item =>
                (item.toString().toLowerCase().includes(this.searchInput.toLowerCase())))
            return coincidences.length > 0
        })
        return filteredMails
    }
})

export default inputSearchStore