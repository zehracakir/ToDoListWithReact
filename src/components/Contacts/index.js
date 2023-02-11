import Header from "./Header/index"
import List from "./List/index"
import Footer from "./Footer";
import { useState } from "react";


function Contacts (){
    const [contacts, setContacts] = useState([]);
    const [situation, setSituation]=useState("All")
    
    console.log(contacts)
    return (
        
        <div>
           <Header  setContacts={setContacts} contacts={contacts}/>
           <List contacts={contacts} setContacts={setContacts} situation={situation}/>
           <Footer contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation}/>
        </div>
        
    )
}
export default Contacts;