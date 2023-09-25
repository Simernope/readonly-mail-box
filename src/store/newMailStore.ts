import {observable} from "mobx";

const newMailStore = observable({
    title: "",
    sender: "",
    mailText: "",
    isNewMailOpen: false,
    setIsNewMailOpen(value: boolean){
        this.isNewMailOpen = value
    },
    setTitle(value: string) {
        this.title = value
    },
    setSender(value: string) {
        this.sender = value
    },
    setMailText(value: string) {
        this.mailText = value
    },
})

export default newMailStore