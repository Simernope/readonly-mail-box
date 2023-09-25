import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout";
import {NotFoundPage} from "../pages";
import MailListPage from "../pages/MailListPage";
import MailPage from "../pages/mailPage/MailPage";
import React from "react";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path=":listType" element={<MailListPage/>}/>
                <Route path=":listType/:mailId" element={<MailPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}
export default Router