import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTlMcOqOwvAHQC-4ZI555jQzWs-RQ99yU",
  authDomain: "nextauth-b42f5.firebaseapp.com",
  projectId: "nextauth-b42f5",
  storageBucket: "nextauth-b42f5.appspot.com",
  messagingSenderId: "517758156018",
  appId: "1:517758156018:web:b962f47fce750478f8646b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app