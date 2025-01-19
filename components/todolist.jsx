import { useState } from 'react';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Список дел</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите новое дело"
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
            <button
                onClick={handleAddTodo}
                style={{ width: '100%', padding: '10px' }}>
                Добавить новый пункт
            </button>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map((todo, index) => (
                    <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
