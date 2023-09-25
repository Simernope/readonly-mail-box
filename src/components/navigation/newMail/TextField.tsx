import newMailStore from "../../../store/newMailStore";
import {observer} from "mobx-react-lite";
const TextField = () => {
    const styles = `h-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-1 focus:border-blue-500 block w-full p-2.5`
    return(
        <textarea
            className={styles}
            value={newMailStore.mailText}
            onChange={(e) => newMailStore.setMailText(e.target.value)}
        />

    )
}

export default observer(TextField)