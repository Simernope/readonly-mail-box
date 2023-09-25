import {FC, useState} from "react";
import GoogleIcon from "../../GoogleIcon";
import {setCustomFoldersToLocalStorage} from "../../../api/localstorage";
type AddCustomFolderModalProps = {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
}

const AddCustomFolderModal: FC<AddCustomFolderModalProps> = ({setIsModalOpen, isModalOpen}) => {
    const [folderTitle, setFolderTitle] = useState("")
    const handleSubmit = () => {
        if(folderTitle){
            setCustomFoldersToLocalStorage({
                id: Date.now(),
                title: folderTitle
            }).then(() => {
                setFolderTitle("")
                setIsModalOpen(false)
                console.log('Папка добавлена')
            })
        }else{
            console.log('Вы не ввели название')
        }
    }

    return (
        <>
            {
                isModalOpen &&
                <div className='absolute w-full h-[100vh] bg-[rgba(0,0,0,0.2)] z-50 flex justify-center items-center'
                     onClick={() => setIsModalOpen(false)}>
                    <div className='p-5 bg-white rounded-xl w-[350px]' onClick={(e) => e.stopPropagation()}>
                        <div className='flex justify-between items-center'>
                            Новая папка
                            <div className='cursor-pointer' onClick={() => setIsModalOpen(false)}>
                                <GoogleIcon icon='close'/>
                            </div>
                        </div>
                        <input
                            className='my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-1 focus:border-blue-500 block w-full p-2.5'
                            type='text'
                            placeholder='Название папки'
                            value={folderTitle}
                            onChange={(e) => setFolderTitle(e.target.value)}/>
                        <div className='flex justify-end gap-3'>
                            <button
                                className='rounded-full px-3 py-2'
                                onClick={() => setIsModalOpen(false)}>Отмена
                            </button>
                            <button
                                onClick={handleSubmit}
                                className='rounded-full bg-blue-300 hover:bg-blue-400 px-3 py-2'
                            >Создать папку
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>


    )
}

export default AddCustomFolderModal