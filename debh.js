// app.js

// Hatırlatmalar
const reminderForm = document.getElementById("reminder-form");
const reminderList = document.getElementById("reminder-list");

reminderForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const task = document.getElementById("task").value;
  const time = document.getElementById("time").value;

  const reminderItem = document.createElement("li");
  
  // Checkbox ekleme
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  // Checkbox tıklandığında, görev tamamlandıysa işaretlensin
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      reminderItem.style.textDecoration = "line-through";  // Tamamlanmış görev üzerine çizgi
    } else {
      reminderItem.style.textDecoration = "none";  // Çizgi kaldırılır
    }
    
    // LocalStorage'da güncelleme
    updateRemindersInLocalStorage();
  });
  
  // Hatırlatma metnini oluşturma
  const taskText = document.createElement("span");
  taskText.textContent = `${task} - ${time}`;

  // Hatırlatmayı listeye ekleme
  reminderItem.appendChild(checkbox);
  reminderItem.appendChild(taskText);
  reminderList.appendChild(reminderItem);

  // Hatırlatmayı saklamak (localStorage)
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  reminders.push({ task, time, completed: false });  // Yeni görev ekleniyor
  localStorage.setItem("reminders", JSON.stringify(reminders));

  reminderForm.reset();
});

// LocalStorage'daki hatırlatmaları güncelleme
function updateRemindersInLocalStorage() {
  const reminders = [];
  const reminderItems = document.querySelectorAll("#reminder-list li");
  
  reminderItems.forEach(item => {
    const checkbox = item.querySelector("input[type='checkbox']");
    const taskText = item.querySelector("span").textContent;
    const time = taskText.split(" - ")[1]; // "Görev - Saat" şeklinde

    reminders.push({
      task: taskText.split(" - ")[0],
      time,
      completed: checkbox.checked
    });
  });

  localStorage.setItem("reminders", JSON.stringify(reminders));
}

// Sayfa yüklendiğinde hatırlatmaları geri yükleme
window.onload = function() {
  const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  reminders.forEach(reminder => {
    const reminderItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = reminder.completed;
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        reminderItem.style.textDecoration = "line-through"; 
      } else {
        reminderItem.style.textDecoration = "none";
      }
      updateRemindersInLocalStorage();
    });

    const taskText = document.createElement("span");
    taskText.textContent = `${reminder.task} - ${reminder.time}`;

    reminderItem.appendChild(checkbox);
    reminderItem.appendChild(taskText);
    reminderList.appendChild(reminderItem);

    if (checkbox.checked) {
      reminderItem.style.textDecoration = "line-through";  // Tamamlanmış görevde çizgi
    }
  });
};

// Sayfa yüklendiğinde verileri görüntüle
window.onload = function() {
    // Hatırlatmaları yükle ve ekranda göster
    const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    const displayArea = document.getElementById("display-area");
    displayArea.innerHTML = "";  // Önceki verileri temizle
  
    reminders.forEach(reminder => {
      const reminderDiv = document.createElement("div");
      reminderDiv.classList.add("reminder-entry");
  
      // Hatırlatmanın içeriğini oluştur
      const reminderText = document.createElement("p");
      reminderText.textContent = `Görev: ${reminder.task} - Saat: ${reminder.time}`;
      
      // Görev tamamsa, çizgi ekle
      if (reminder.completed) {
        reminderText.style.textDecoration = "line-through";
      }
      
      reminderDiv.appendChild(reminderText);
      displayArea.appendChild(reminderDiv);
    });
  };
  
  // Sayfa yüklendiğinde, kaydedilen ruh hali ve enerji verilerini göster
window.onload = function() {
    // Hatırlatmaları yükle ve ekranda göster
    const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    const displayArea = document.getElementById("display-area");
    displayArea.innerHTML = "";  // Önceki verileri temizle
  
    reminders.forEach(reminder => {
      const reminderDiv = document.createElement("div");
      reminderDiv.classList.add("reminder-entry");
  
      // Hatırlatmanın içeriğini oluştur
      const reminderText = document.createElement("p");
      reminderText.textContent = `Görev: ${reminder.task} - Saat: ${reminder.time}`;
      
      // Görev tamamsa, çizgi ekle
      if (reminder.completed) {
        reminderText.style.textDecoration = "line-through";
      }
      
      reminderDiv.appendChild(reminderText);
      displayArea.appendChild(reminderDiv);
    });
  
    // Durumları yükle ve göster
    const moods = JSON.parse(localStorage.getItem("moods")) || [];
    moods.forEach(mood => {
      const moodDiv = document.createElement("div");
      moodDiv.classList.add("mood-entry");
  
      const moodText = document.createElement("p");
      moodText.textContent = `Ruh Hali: ${mood.mood}, Enerji Seviyesi: ${mood.energy}`;
      
      moodDiv.appendChild(moodText);
      displayArea.appendChild(moodDiv);
    });
  };
  

  reminderForm.addEventListener("submit", function(e) {
    e.preventDefault();
  
    const task = document.getElementById("task").value;
    const time = document.getElementById("time").value;
  
    const reminderItem = document.createElement("li");
    
    // Checkbox ekleme
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        reminderItem.style.textDecoration = "line-through";  // Tamamlanmış görev üzerine çizgi
      } else {
        reminderItem.style.textDecoration = "none";  // Çizgi kaldırılır
      }
  
      // LocalStorage'da güncelleme
      updateRemindersInLocalStorage();
    });
  
    const taskText = document.createElement("span");
    taskText.textContent = `${task} - ${time}`;
  
    reminderItem.appendChild(checkbox);
    reminderItem.appendChild(taskText);
    reminderList.appendChild(reminderItem);
  
    // Hatırlatmayı saklamak (localStorage)
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    reminders.push({ task, time, completed: false });
    localStorage.setItem("reminders", JSON.stringify(reminders));
  
    // Veriyi ekranda hemen göster
    displayReminder(task, time);
  
    reminderForm.reset();
  });
  
  // Ekranda gösterme fonksiyonu
  function displayReminder(task, time) {
    const displayArea = document.getElementById("display-area");
    const reminderDiv = document.createElement("div");
    reminderDiv.classList.add("reminder-entry");
  
    const reminderText = document.createElement("p");
    reminderText.textContent = `Görev: ${task} - Saat: ${time}`;
  
    reminderDiv.appendChild(reminderText);
    displayArea.appendChild(reminderDiv);
  }
  