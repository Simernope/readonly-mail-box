import {observable} from "mobx";


const alertType: 'OK' | 'ERROR' = 'OK'

const alertStore = observable({
    alertMessage: '',
    alertType: alertType,
    setAlertMessage(message: string, type: typeof alertType) {
        this.alertMessage = message
        this.alertType = type
    },
    clearAlert() {
        this.alertMessage = ''
    }
})

export default alertStore