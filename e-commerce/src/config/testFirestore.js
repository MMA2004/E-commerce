import { db } from "./firebaseConfig"; // Si está en la misma carpeta
import { collection, getDocs } from "firebase/firestore";

async function testDB() {
    try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
        });
        console.log("✅ Conexión con Firestore exitosa.");
    } catch (error) {
        console.error("❌ Error conectando a Firestore:", error);
    }
}

testDB();
