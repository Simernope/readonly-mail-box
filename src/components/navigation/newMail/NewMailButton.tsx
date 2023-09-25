import GoogleIcon from "../../GoogleIcon";
import {navigationStore} from "../../../store";
import {observer} from "mobx-react-lite";
import AddNewMailWindow from "./AddNewMailWindow";
import newMailStore from "../../../store/newMailStore";

const NewMailButton = () => {
    return (
        <>
            <AddNewMailWindow />
            <button
                onClick={() => newMailStore.setIsNewMailOpen(true)}
                id='button'
                className='ml-2 py-3 px-5 bg-sky-200 hover:bg-sky-300 flex items-center gap-3 rounded-xl w-fit'>
                <GoogleIcon icon='ink_pen'/>
                {
                    navigationStore.isMenuOpen &&
                    'Написать'
                }
            </button>
        </>

    )
}

export default observer(NewMailButton)