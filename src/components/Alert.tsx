import {FC, useEffect} from "react";
import alertStore from "../store/alertStore";

type AlertProps = {
    alertMessage: string
}

const Alert: FC<AlertProps> = ({alertMessage}) => {

    useEffect(() => {
        console.log(alertMessage)
        const timerId = setTimeout(() => alertStore.clearAlert(), 3000)
        return () => clearTimeout(timerId)
    }, [alertMessage])

    return (
        <div className='absolute bottom-0'>
            <div className='p-3 rounded bg-gray-400 text-white font-medium z-50 m-5'>
                {alertMessage}
            </div>
        </div>
    )
}

export default Alert