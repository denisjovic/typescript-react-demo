import React, {useState} from 'react'
import '../App.css'
import {InitState as Props} from '../App'

interface InitProps {
    person: Props["person"]
    setPeople:  React.Dispatch<React.SetStateAction<{name: string, age: number, url: string, note?: string | undefined}[]>>;

}

const Form: React.FC<InitProps> = ({ person, setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        image: "",
        age: "",
        note: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) :void => {
        const {name, value} = event.target
        setInput({...input,
            [name]: value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.image ) {
            return;
        }
        setPeople([
            ...person, {
            name: input.name,
            age: parseInt(input.age),
            url: input.image,
            note: input.note
        }])
        setInput({
            name: "",
            image: "",
            age: "",
            note: ""
        })
    }
    return (
        <div className={"add-to-list"}>
            <input name="name" type="text" className={"add-to-list-input"} placeholder={"name"} value={input.name} onChange={handleChange}/>
            <input name="image" type="text" className={"add-to-list-input"} placeholder={"image"} value={input.image} onChange={handleChange}/>
            <input name="age" type="text" className={"add-to-list-input"} placeholder={"age"} value={input.age} onChange={handleChange}/>
            <textarea name="note" className={"add-to-list-input"} placeholder={"note"} value={input.note} onChange={handleChange}/>
            <button onClick={handleClick} className="add-to-list-btn">Add to list</button>
        </div>
    )
}

export default Form