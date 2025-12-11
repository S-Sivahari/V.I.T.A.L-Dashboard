import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkFirestoreData() {
  try {
    console.log('=== Checking Users Collection ===\n');
    
    // Get all users with role 'farmer'
    const farmersQuery = query(collection(db, 'users'), where('role', '==', 'farmer'));
    const farmerSnapshot = await getDocs(farmersQuery);
    
    console.log(`Total farmers found: ${farmerSnapshot.size}\n`);
    
    farmerSnapshot.docs.forEach((doc, index) => {
      const data = doc.data();
      console.log(`--- Farmer ${index + 1} (ID: ${doc.id}) ---`);
      console.log(`Role: ${data.role}`);
      console.log(`Email: ${data.email}`);
      console.log(`Phone: ${data.phone}`);
      console.log(`Profile:`, data.profile);
      console.log(`ApprovalStatus: ${data.profile?.approvalStatus}`);
      console.log('');
    });
    
    // Check pending farmers
    console.log('\n=== Checking Pending Farmers ===\n');
    const pendingQuery = query(
      collection(db, 'users'),
      where('role', '==', 'farmer'),
      where('profile.approvalStatus', '==', 'pending')
    );
    const pendingSnapshot = await getDocs(pendingQuery);
    
    console.log(`Pending farmers found: ${pendingSnapshot.size}\n`);
    
    pendingSnapshot.docs.forEach((doc, index) => {
      const data = doc.data();
      console.log(`--- Pending Farmer ${index + 1} (ID: ${doc.id}) ---`);
      console.log(`Name: ${data.profile?.fullName}`);
      console.log(`Email: ${data.email}`);
      console.log(`Status: ${data.profile?.approvalStatus}`);
      console.log('');
    });
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkFirestoreData();
