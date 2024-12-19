import { PersonalDetails } from "@/data/interface/personalDetails/personalDetails";
import { ProfessionalBackground } from "@/data/interface/professionalBackground/professionalBackground";
import { database } from "@/firestore/firestore";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const data: [PersonalDetails, ProfessionalBackground] = await req.json();
    // Query Firestore to find the document matching the name and participatingAs
    try {
      const menteeQuery = query(
        collection(database, "Mentees"),
        where("documentOf", "==", data[0]?.fullName)
      );

      // Execute the query
      const menteeQuerySnapshot = await getDocs(menteeQuery);

      if (!menteeQuerySnapshot.empty) {
        const menteeDocRef = menteeQuerySnapshot.docs[0].ref;

        const backgroundDetailsCollectionRef = collection(
          menteeDocRef,
          "Professional Background"
        );
        await addDoc(backgroundDetailsCollectionRef, {
          graduateProgram: data[1]?.graduateProgram,
          currentRole: data[1]?.currentRole,
          previousRoles: data[1]?.previousRoles,
          bu_division_specialty: data[1]?.bu_division_specialty,
        });
      }
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
