import GoogleIcon from "../../GoogleIcon";
import {navigationStore} from "../../../store";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import AddCustomFolderModal from "./AddCustomFolderModal";

const AddFolder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <AddCustomFolderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <div className='ml-4 cursor-pointer flex items-center justify-between' onClick={() => setIsModalOpen(true)}>
                {navigationStore.isMenuOpen && 'Добавить папку'}
                <GoogleIcon icon='add'/>
            </div>
        </>

    )
}

export default observer(AddFolder)