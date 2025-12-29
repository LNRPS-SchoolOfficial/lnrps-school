const firebaseConfig = {
  apiKey: "AIzaSyCxxtNQXHBQwO4LhwOlvecIWfAY_AEa4W0",
  authDomain: "lnrps-school.firebaseapp.com",
  projectId: "lnrps-school",
  storageBucket: "lnrps-school.firebasestorage.app",
  messagingSenderId: "171557307648",
  appId: "1:171557307648:web:e91ce6c72aa400a42f1fe5",
  measurementId: "G-5V3J908J7R"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const noticeList = document.getElementById("noticeList");

db.collection("notices")
  .orderBy("date", "desc")
  .onSnapshot(snapshot => {
    noticeList.innerHTML = "";
    snapshot.forEach(doc => {
      const li = document.createElement("li");
      li.textContent = doc.data().text;
      noticeList.appendChild(li);
    });
  });
