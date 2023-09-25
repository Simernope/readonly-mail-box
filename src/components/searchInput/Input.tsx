import {FC, ChangeEvent} from "react";
import inputSearchStore from "../../store/inputSearchStore";
import {observer} from "mobx-react-lite";

const Input: FC = () => {
    const {searchInput, isSuggestionOpen} = inputSearchStore
    const handleOpen = (value: boolean) => {
        inputSearchStore.setIsSuggestionOpen(value)
    }
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        inputSearchStore.setSearchInput(e.target.value)
    }

    const styles = `block w-[600px] p-3 pl-10 text-gray-900 outline-0 bg-blue-100  
                                ${isSuggestionOpen && 'bg-white shadow-2xl'} 
                                ${isSuggestionOpen && searchInput && inputSearchStore.getAvailableMails().length > 0
        ? 'bg-white rounded-t-2xl' : 'rounded-2xl'}`

    return (
        <input type="search"
               value={searchInput}
               onFocus={() => handleOpen(true)}
               onBlurCapture={(e) => {
                   console.log(e)
                   if (e.relatedTarget?.id !== 'suggestionTips') {
                       handleOpen(false)
                   }
               }}
               onChange={(e) => handleInput(e)}
               className={styles}
               placeholder="Поиск в почте"/>
    )
}

export default observer(Input)