import React from "react";

const ValidationContext = React.createContext({
   getMessagesForField: (field) => []
});

export default ValidationContext;
