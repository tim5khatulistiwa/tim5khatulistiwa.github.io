// function hapus(id){
//     id.remove();
// }
let todoCounter = 0; // untuk nandain todo-item yang udah ada, tp gajadi dipake soale mau kosongan

  // function buat "add +"
  function addTodo() {
    // ngambil data dari form input 
    const textInput = document.getElementById('text-todo');
    const dateInput = document.getElementById('date-todo');
    const timeInput = document.getElementById('time-todo');

    // ngambil value dari data yang udah diambil
    const todoText = textInput.value;
    const todoDate = dateInput.value;
    const todoTime = timeInput.value;

    // pemberian alert apabila nama todolist kosong
    if (todoText.trim() === '') {
      alert('Please enter a valid to-do task.');
      return;
    }

    // deklarasi untuk mendapatkan id todolist
    const newTodoId = 'todo' + (++todoCounter);
    // membuat element baru untuk isi list
    const newTodoItem = document.createElement('li');
    newTodoItem.id = newTodoId;
    newTodoItem.className = 'list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2';

    // membuat struktur html dengan memasukkan variabel yang sudah dideklarasikan sebelumnya
    newTodoItem.innerHTML = `
        <div class="d-flex justify-content-start">
        <input class="form-check-input" type="checkbox" value="" aria-label="..." onchange="toggleCompleted(this, '${newTodoId}')"/>
        <div>
        <div class="d-flex justify-content-start">
            <p id="${newTodoId}-text">${todoText}</p>
        </div>
        <div class="d-flex justify-content-start">
            <span class="tanggal mx-2">${todoDate}</span>
            <span class="jam">${todoTime}</span>
        </div>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-end">
        <button class="btn btn-dark mx-2" onclick="edit('${newTodoId}')"><i class="bi bi-pencil-square"></i></button>
        <button class="btn btn-dark" onclick="hapus('${newTodoId}')"><i class="bi bi-trash"></i></button>
    </div>
    `;

    // menambahkan elemen "li" yang sudah dibuat diatas kedalam element "ul" yang sudah ada dengan menggunakan id sebagai alat identifikasi
    const todoList = document.getElementById('list-todo');
    todoList.appendChild(newTodoItem);

    // membersihkan input pada form add
    textInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
  }

  // function untuk menghapus todolist yang sudah dibuat
  function hapus(todoId) {
    // mengambil elemen todolist berdasarkan id yang sudah dibuat
    const todoItem = document.getElementById(todoId);
    todoItem.remove();
  }
  // function untuk memberikan garis pada todolist ketika checkbox diisi
  function toggleCompleted(checkbox, todoId) {
    // mengambil elemen text yang ada pada todolist
    const todoText = document.getElementById(`${todoId}-text`);

    if (checkbox.checked) {
      // kalo sudah dichecklist maka tulisan akan di strike menggunakan garis
      todoText.style.textDecoration = 'line-through';
    } else {
      todoText.style.textDecoration = 'none';
    }
  }
  // function buat edit
  function edit(todoId) {
    // mengambil elemen text yang ada pada todolist
    const todoText = document.getElementById(`${todoId}-text`);

    // menggunakan prompt kepada pengguna untuk mengedit, dan memasukkan hasil edit kedalam variabel
    const updatedText = prompt('Edit to-do item:', todoText.textContent);
    if (updatedText === null || updatedText.trim() === '') {
      return;
    }

    // Update pada text asli dengan text yang udah diedit
    todoText.textContent = updatedText;
  }

  // Event Listener
  const addButton = document.getElementById('send');
  addButton.addEventListener('click', addTodo);

