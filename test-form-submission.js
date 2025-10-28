// Test script for Google Sheets form submission
// Run with: node test-form-submission.js

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzawCPj6HOYWfYkW6I8I7PTyNh9Cm-8HcPXh3j3WvYSC4UKtFsqSDKdsm0btwEt-fKd/exec';

console.log('🧪 Testing Google Sheets Integration...\n');

// Test 1: Consultation Form
const testConsultation = async () => {
  console.log('📝 Test 1: Consultation Form');
  console.log('Sending data to Google Sheets...');
  
  const data = {
    formType: 'consultation',
    name: 'Test User - Consultation',
    email: 'test@example.com',
    phone: '+919999999999',
    company: 'Test Company Ltd',
    description: 'This is a test submission from Node.js script',
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    });

    console.log('✅ Status:', response.status);
    console.log('✅ Request completed!');
    console.log('📋 Check your Google Sheet "Consultation Bookings" tab');
    console.log('📧 Check email: aditimehra0298@gmail.com\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

// Test 2: Event Registration Form
const testEventRegistration = async () => {
  console.log('📅 Test 2: Event Registration Form');
  console.log('Sending data to Google Sheets...');
  
  const data = {
    formType: 'event',
    name: 'Test User - Event',
    email: 'event@example.com',
    phone: '+918888888888',
    company: 'Event Test Corp',
    selectedDate: 'December 5, 2025',
    selectedTime: '10:00 AM',
    selectedRole: 'Quality Manager',
    message: 'This is a test event registration from Node.js script',
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    });

    console.log('✅ Status:', response.status);
    console.log('✅ Request completed!');
    console.log('📋 Check your Google Sheet "Event Registrations" tab');
    console.log('📧 Check email: aditimehra0298@gmail.com\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

// Run tests
const runTests = async () => {
  console.log('═══════════════════════════════════════════════════\n');
  
  await testConsultation();
  
  // Wait 2 seconds between tests
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await testEventRegistration();
  
  console.log('═══════════════════════════════════════════════════');
  console.log('\n🎯 Tests completed!');
  console.log('\n📊 What to check now:');
  console.log('1. Open your Google Sheet: "EUROCERT Form Submissions"');
  console.log('2. Check "Consultation Bookings" tab for Test User - Consultation');
  console.log('3. Check "Event Registrations" tab for Test User - Event');
  console.log('4. Check email inbox: aditimehra0298@gmail.com (2 emails expected)');
  console.log('\n⏱️  Wait 5-10 seconds for data to appear in sheets and emails to arrive.\n');
};

runTests();

