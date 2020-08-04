'use strict';

const addContent = document.getElementById('output');
const addText = document.getElementById('text_input');
const addButton =document.getElementById('trigger');
const tasks = [];
//追加ボタンをクリックした時の挙動 テキストデータもリセット
addButton.addEventListener('click', () => {
  const addTextValue = addText.value;
  const task = {
    text: addTextValue,
    status: '作業中'
    };
  tasks.push(task);
  addText.value = '';
  taskProcessing();
  });
//tasksの中身をhtml上に表示
const taskProcessing = () => {
  while(addContent.firstChild){
    addContent.removeChild(addContent.firstChild);
  }

  tasks.forEach((todo,number) => {
    const addTr = document.createElement('tr');
    //それぞれのtdを作成
    const addTdId = document.createElement('td');
    const addTdText = document.createElement('td');
    const addTdDelete = document.createElement('td');
    const addTdWorking = document.createElement('td');
    //id 表示
    addTdId.textContent = number;
    addTr.appendChild(addTdId);
    //テキスト表示
    addTdText.textContent = todo.text;
    addTdText.setAttribute('align','center');
    addTr.appendChild(addTdText);
    //削除ボタン作成
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    //削除ボタンを押した時の挙動
    deleteButton.addEventListener('click', () =>{
      deleteProcess(number)
    });
    //削除ボタンhtml表示
    addTdDelete.appendChild(deleteButton);
    addTr.appendChild(addTdDelete);
    
    const workingButton = document.createElement('button');
    workingButton.textContent = todo.status;
    addTdWorking.appendChild(workingButton);
    addTr.appendChild(addTdWorking);

    addContent.appendChild(addTr);
  }); 
};
//削除ボタンの処理
const deleteProcess = (number) => {
  tasks.splice(number, 1);
  taskProcessing();
};
