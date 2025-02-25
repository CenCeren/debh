henüz başarısız. Ciddi hatalar var ama tek tek tüm kodlar gözden geçirilirse ve datylar incelenirse biraz daha temiz sonuçlar çıkabilir


# debh

DEBH (Dizonomik Endokrin Bozukluklar Hipotiroidizmi) gibi sağlık sorunları yaşayan bireyler için hatırlatmalar ve günlük rutin iş akışlarını takip edebilecekleri bir JavaScript uygulaması oluşturmak oldukça faydalı bir fikir. Bu tür bir uygulama, kullanıcıların tedavi ve bakım süreçlerini düzenlemelerine yardımcı olabilir.

Ana hatlarıyla bir JavaScript uygulaması için nasıl bir yapı oluşturabileceğini aşağıda adım adım açıklayacağım:

1. Proje Yapısı:
Uygulamanızın temel bileşenleri şunlar olabilir:

HTML: Arayüzü oluşturacak ve kullanıcıya sunacak sayfalar.
CSS: Sayfa stilini ve görsel düzeni oluşturacak.
JavaScript: Uygulamanın işlevselliğini sağlayacak.
2. Temel Özellikler:
Bu uygulama, DEBH olan kullanıcıların hatırlatmalarını ve rutinlerini takip etmelerini kolaylaştırmak için şu özelliklere sahip olabilir:

Rutin Takibi: Günlük, haftalık veya aylık yapılması gereken işlemleri listeleme.
Hatırlatmalar: Kullanıcılara belirli bir saatte hatırlatmalar gönderme.
Günlük Durum Girişi: Kullanıcıların o günkü ruh halini, enerji seviyelerini ve sağlık durumlarını girmelerine imkan tanıma.
İlerleme İzleme: Zaman içinde yapılan işlemleri ve sağlık durumunu gösteren grafikler.
Veri Saklama: Kullanıcı bilgilerini geçici olarak depolama (örneğin, localStorage veya sessionStorage kullanarak).
3. Uygulamanın Adım Adım Taslağı:
HTML – Temel Yapı:
İlk olarak, kullanıcıların etkileşimde bulunacağı temel öğeleri oluşturalım.

html
Kopyala
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DEBH Rutin Takip Uygulaması</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>DEBH Günlük Takip Uygulaması</h1>
  </header>

  <section class="reminder-section">
    <h2>Hatırlatmalar</h2>
    <form id="reminder-form">
      <label for="task">Görev: </label>
      <input type="text" id="task" placeholder="Görev ekleyin" required>
      <label for="time">Saat: </label>
      <input type="time" id="time" required>
      <button type="submit">Görev Ekle</button>
    </form>
    <ul id="reminder-list"></ul>
  </section>

  <section class="mood-section">
    <h2>Günlük Durum Girişi</h2>
    <form id="mood-form">
      <label for="mood">Ruh Haliniz: </label>
      <select id="mood">
        <option value="good">İyi</option>
        <option value="ok">Ortalama</option>
        <option value="bad">Kötü</option>
      </select>
      <label for="energy">Enerji Seviyeniz: </label>
      <input type="number" id="energy" min="1" max="10" placeholder="1-10" required>
      <button type="submit">Durum Kaydet</button>
    </form>
  </section>

  <footer>
    <p>© 2025 DEBH Takip Uygulaması</p>
  </footer>

  <script src="app.js"></script>
</body>
</html>
CSS – Stil:
Uygulamanın görünümünü düzenlemek için basit bir stil ekleyelim.

css
Kopyala
/* styles.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
}

section {
  padding: 20px;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

input[type="text"], input[type="time"], select, input[type="number"] {
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
JavaScript – İşlevsellik:
Şimdi, hatırlatmalar ve günlük durum girişini işlemek için JavaScript kodu ekleyelim.

javascript
Kopyala
// app.js

// Hatırlatmalar
const reminderForm = document.getElementById("reminder-form");
const reminderList = document.getElementById("reminder-list");

reminderForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const task = document.getElementById("task").value;
  const time = document.getElementById("time").value;

  const reminderItem = document.createElement("li");
  reminderItem.textContent = `${task} - ${time}`;
  reminderList.appendChild(reminderItem);

  // Hatırlatmayı saklamak (localStorage veya sessionStorage kullanabilirsiniz)
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  reminders.push({ task, time });
  localStorage.setItem("reminders", JSON.stringify(reminders));

  reminderForm.reset();
});

// Durum Girişi
const moodForm = document.getElementById("mood-form");

moodForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const mood = document.getElementById("mood").value;
  const energy = document.getElementById("energy").value;

  const moodEntry = `Ruh Hali: ${mood}, Enerji: ${energy}`;
  alert(`Günlük durum kaydedildi: ${moodEntry}`);

  // Durum verisini saklamak (localStorage)
  let moods = JSON.parse(localStorage.getItem("moods")) || [];
  moods.push({ mood, energy });
  localStorage.setItem("moods", JSON.stringify(moods));

  moodForm.reset();
});
4. Özellikler ve Genişletme:
Veri Depolama: localStorage kullanarak veriler tarayıcıda saklanır. Uygulama her açıldığında, hatırlatmalar ve durum verileri kullanıcıya sunulabilir.
Bildirimler: Kullanıcıya belirli bir saatte hatırlatma göndermek için JavaScript'teki setTimeout() veya setInterval() fonksiyonlarını kullanabilirsiniz. Ayrıca, tarayıcı bildirimleriyle (Notification API) hatırlatmalar gönderebilirsiniz.
Grafikler: Kullanıcıların ilerlemesini izlemek için basit grafikler veya çubuklar oluşturabilirsiniz. Bu, sağlık verilerini görselleştirmek için faydalı olabilir.
5. Sonuç:
Bu ana hatlarla, DEBH olan bireyler için günlük rutinlerini takip edebilecekleri basit ama işlevsel bir uygulama oluşturabilirsiniz. Bu uygulama, zamanla daha fazla özellik eklenerek geliştirilebilir ve kişisel sağlık takibi konusunda faydalı bir araç olabilir.
