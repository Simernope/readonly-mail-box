import {MailType} from "../../mocks/types";
import {FC, DragEvent} from "react";
import IconsGroup from "./IconsGroup";
import {useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";

type RowProps = {
    mail: MailType
}

const Row: FC<RowProps> = ({mail}) => {
    const navigate = useNavigate()
    const {listType} = useParams()

    const navigateToMail = (id: number) => {
        console.log(`/${id}`)
        navigate(`/${listType}/${id}`)
    }

    const handleOndrag = (e: DragEvent<HTMLTableRowElement>, payload: MailType) => {
        console.log(payload)
        if (e.dataTransfer)
            e.dataTransfer.setData('mail', JSON.stringify(mail))
    }

    return (
        <tr className='bg-white hover:drop-shadow-lg hover:hover:border-gray-300 cursor-move ' draggable={true}
            tabIndex={10}
            onDragStart={(e) => handleOndrag(e, mail)}>
            <td><IconsGroup mailId={mail.id} isMailMarked={mail.isMarked} folderId={mail.folder.id}/></td>
            <td onClick={() => navigateToMail(mail.id)}
                className='text-sm text-gray-700'>from: {mail.sender}</td>
            <td onClick={() => navigateToMail(mail.id)} className='cursor-pointer w-[70%] p-5'>
                <span className='font-medium'>{mail.title}</span>
                <span className='text-gray-700 ml-3'>{mail.mailMessage}</span>
            </td>
            <td className='text-sm text-gray-500 w-[100px]'>
                <div className='p-5'>{new Date(mail.sendingTime).toLocaleDateString()}</div>
            </td>
        </tr>
    )
}

export default observer(Row)