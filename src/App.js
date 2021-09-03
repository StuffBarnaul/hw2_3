import React from 'react';
import './App.css';
import Lorem from 'react-lorem-component';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

function App() {

    const data = [
        {
            topic: 'Зубы',
            title: 'Зубы',
            content: <Lorem count={1}/>
        },
        {
            topic: 'Глаза',
            title: 'Глаза',
            content: <Lorem count={1}/>
        },
        {
            topic: 'Нос',
            title: 'Нос',
            content: <Lorem count={1}/>
        },
        {
            topic: 'Рот',
            title: 'Рот',
            content: <Lorem count={1}/>
        },
    ]

    const Card = ({topic, title, content}, currentTopic) => {
        const isVisible = (topic === currentTopic);
        return (
            <>
                {isVisible &&
                <div className="App-card">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                }
            </>
        )
    }

    const [currentTopic, setCurrentTopic] = React.useState('');

    const handleChange = (event) => {
        setCurrentTopic(event.target.value);
    };

    return (
        <div className="App">
            <h1>Choose topic:</h1>
            <FormControl className="App-formControl">
                <Select
                    displayEmpty={true}
                    value={currentTopic}
                    onChange={handleChange}
                >
                    <MenuItem value={'Зубы'}>Зубы</MenuItem>
                    <MenuItem value={'Глаза'}>Глаза</MenuItem>
                    <MenuItem value={'Нос'}>Нос</MenuItem>
                    <MenuItem value={'Рот'}>Рот</MenuItem>
                </Select>
            </FormControl>
            {data.map(props => Card(props, currentTopic))}
        </div>
    );
}

export default App;