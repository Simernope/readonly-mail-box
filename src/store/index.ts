import {injectStores} from "@mobx-devtools/tools";
import navigationStore from "./navigationStore";
import inputSearchStore from "./inputSearchStore";
import mailsStore from "./mailsStore";
import newMailStore from "./newMailStore";
import alertStore from "./alertStore";


injectStores({
    navigationStore,
    inputSearchStore,
    mailsStore,
    newMailStore,
    alertStore
})

export {navigationStore}