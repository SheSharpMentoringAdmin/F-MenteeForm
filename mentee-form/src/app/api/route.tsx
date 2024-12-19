import { database } from "@/firestore/firestore";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function POST() {
  try {
    // Query Firestore to find the document matching the name and participatingAs
    try {
      await addDoc(collection(database, "Mentees"), {
        assignedMentor: "",
        createdAt: serverTimestamp(),
        documentOf: "testing",
        status: "testing",
        pairedDuring: "",
      });
    } catch (error) {
      console.error("Error adding document:", error);
      throw error; // Propagate the error to stop Promise.all if any update fails
    }
    // Send a success response
    return Response.json({ message: "Successfully updated documents" });
  } catch (error) {
    throw error;
  }
}
