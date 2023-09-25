import {FC} from "react";
import GoogleIcon from "../../GoogleIcon";
import Input from "./Input";
import TextField from "./TextField";
import ButtonsGroup from "./ButtonsGroup";
import newMailStore from "../../../store/newMailStore";
import {observer} from "mobx-react-lite";

const AddNewMailWindow: FC = () => {
    return (
        <>
            {
                newMailStore.isNewMailOpen &&
                <div className='absolute w-full h-[95vh] z-50 flex justify-end items-end '>
                    <div className='p-5 bg-white rounded-xl w-[600px] h-2/3 mr-5 shadow-2xl border flex flex-col gap-4'>
                        <div className='flex justify-between items-center'>
                            Новое письмо
                            <div className='cursor-pointer' onClick={() => newMailStore.setIsNewMailOpen(false)}>
                                <GoogleIcon icon='close'/>
                            </div>
                        </div>
                        <Input placeholder='Кому' inputType='sender' label='Получатель письма'/>
                        <Input placeholder='Тема' inputType='title' label='Тема письма'/>
                        <TextField />
                        <ButtonsGroup />
                    </div>
                </div>
            }
        </>


    )
}

export default observer(AddNewMailWindow)