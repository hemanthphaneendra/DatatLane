import { MessagesContext } from "../context/MessageContext";
import { useContext } from "react";

export const useMessageContext = () => {
    const context = useContext(MessagesContext)

    if(!context) {
        throw Error('useMessagesContext must be inside an MessagesContextProvider')
    }

    return context
}