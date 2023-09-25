import Button from "./newMail/NewMailButton";
import Folder from "./Folder";
import NavHeader from "./NavHeader";
import AddFolder from "./addFolder/AddFolder";
import {navigationStore} from "../../store";
import CustomFoldersList from "./customFolder/CustomFoldersList";

const NavSection = () => {
    return (
        <nav className='flex flex-col gap-6'>
            <NavHeader/>
            <Button/>
            <div className='flex flex-col'>
                {navigationStore.folders.map(folder => (
                    <Folder key={folder.id} folder={folder}/>
                ))}
            </div>
            <AddFolder/>
            <CustomFoldersList />
        </nav>
    )
}

export default NavSection