import { MentorPreferences } from "@/data/interface/mentorPreferences/mentorPreferences";
import { PersonalDetails } from "@/data/interface/personalDetails/personalDetails";
import { database } from "@/firestore/firestore";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const data: [PersonalDetails, MentorPreferences] = await req.json();
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

        const mentorPreferencesCollectionRef = collection(
          menteeDocRef,
          "Mentor Preferences"
        );
        await addDoc(mentorPreferencesCollectionRef, {
          gender: data[1]?.gender,
          field: data[1]?.field,
          personality: data[1]?.personality,
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
