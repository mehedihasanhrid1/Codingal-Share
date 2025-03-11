async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); 
        const data = await response.json();

        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = ''; 

        data.forEach(todo => { 
            const row = document.createElement('tr');
            row.className = todo.completed ? 'completed' : '';

            row.innerHTML = `
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed ? '✅ Completed' : '❌ Not Completed'}</td>
            `;

            todoList.appendChild(row);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchTodos();

