import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import Form from './components/Form';

// export intraface so it can be used in other files
export interface InitState {
    person: {
        name: string
        age: number
        url: string
        note?: string
    }[]
}

function App() {

    const [people, setPeople] = useState<InitState['person']>([{
        name: 'Lebron James',
        age: 36,
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NdRUJe3bj7vG1_bks0DeNgHaEc%26pid%3DApi&f=1",
        note: "Like pizza"

    }])



  return (
    <div className="App">
      <h1>People invited to my party:</h1>
        <List person={people}/>
        <Form person={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
