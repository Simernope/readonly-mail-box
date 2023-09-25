import Row from "./Row";
import MailListHeader from "./MailListHeader";
import MailListFooter from "./MailListFooter";
import {observer} from "mobx-react-lite";
import {MailType} from "../../mocks/types";
import {FC} from "react";

type TableProps = {
    mails: Array<MailType> | []
}
const Table:FC<TableProps> = ({mails}) => {

    return (
        <div className='rounded-2xl border border-gray-200 bg-white max-h-[85vh] overflow-y-scroll'>
            <MailListHeader/>
            {(mails && mails.length > 0) ?
                <table className='table-auto w-full '>
                    <tbody className='divide-y rounded-2xl'>
                    {
                        mails.map(mail => (
                            <Row key={mail.id} mail={mail}/>
                        ))
                    }
                    </tbody>
                </table>
                : <div className='p-5 h-[20vh]'>No mails</div>
            }
            <MailListFooter/>
        </div>

    )
}

export default observer(Table)