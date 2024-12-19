import { PersonalDetails } from "@/data/interface/personalDetails/personalDetails";
import { database } from "@/firestore/firestore";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const data: PersonalDetails = await req.json();
    // Query Firestore to find the document matching the name and participatingAs
    try {
      const mainDocRef = await addDoc(collection(database, "Mentees"), {
        assignedMentor: "",
        createdAt: serverTimestamp(),
        documentOf: data?.fullName,
        status: "testing",
        pairedDuring: "",
      });

      const personalDetailsCollectionRef = collection(
        mainDocRef,
        "Personal Details"
      );
      await addDoc(personalDetailsCollectionRef, {
        fullName: data?.fullName,
        dob: data?.dob,
        emailAddress: data?.emailAddress,
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
