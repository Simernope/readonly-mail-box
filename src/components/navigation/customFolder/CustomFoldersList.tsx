import {navigationStore} from "../../../store";
import CustomFolder from "./CustomFolder";
import {observer} from "mobx-react-lite";

const CustomFoldersList = () => {
    return (
        <div className='flex flex-col'>
            {
                navigationStore.customFolders && navigationStore.customFolders.map(customFolder =>
                    <CustomFolder key={customFolder.id} folder={{id: customFolder.id, title: customFolder.title}}/>)
            }
        </div>

    )
}

export default observer(CustomFoldersList)