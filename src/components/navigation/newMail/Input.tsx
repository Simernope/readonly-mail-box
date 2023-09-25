import {FC, ChangeEvent} from "react";
import newMailStore from "../../../store/newMailStore";
import {observer} from "mobx-react-lite";

type InputProps = {
    placeholder: string
    inputType: 'sender' | 'title'
    label: string
}
const Input: FC<InputProps> = ({placeholder, inputType, label}) => {
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (inputType === 'sender') {
            newMailStore.setSender(e.target.value)
        }
        if (inputType === 'title') {
            newMailStore.setTitle(e.target.value)
        }
    }

    return (
        <>
            <label className='text-sm'>{label}</label>
            <input
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-1 focus:border-blue-500 block w-full p-2.5'
                type='text'
                placeholder={placeholder}
                value={newMailStore[inputType]}
                onChange={(e) => handleInput(e)}/>
        </>

    )
}

export default observer(Input)