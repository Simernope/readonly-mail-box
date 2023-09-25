import SearchIcon from "./SearchIcon";
import SuggestionTips from "./SuggestionTips";
import inputSearchStore from "../../store/inputSearchStore";
import {observer} from "mobx-react-lite";
import Input from "./Input";

const SearchInput = () => {
    return (
        <div className={`relative mb-2`}>
            <SearchIcon/>
            <Input/>
            {
                inputSearchStore.searchInput
                && inputSearchStore.isSuggestionOpen
                && inputSearchStore.getAvailableMails().length > 0
                && <SuggestionTips/>
            }
        </div>
    )
}

export default observer(SearchInput)