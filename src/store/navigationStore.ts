import {observable} from "mobx";
import {FolderType, mainFolders} from "../mocks/types";
import {customFolders, folders} from "../mocks/folders";

const navigationStore = observable({
    folders: folders,
    customFolders: customFolders,
    currentFolder: "",
    setCurrentFolder(value: mainFolders | string){
        this.currentFolder = value;
    },
    isMenuOpen: true,
    setIsMenuOpen() {
        this.isMenuOpen = !this.isMenuOpen
    },
    setCustomFolders(folders: Array<FolderType>){
        this.customFolders = folders
    },
    setFolders(folders: Array<FolderType>){
        this.folders = folders
    },
})

export default navigationStore