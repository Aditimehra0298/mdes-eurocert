# Google Sheets Form Integration Setup Guide

## Overview
This guide will help you connect your website forms to Google Sheets with automatic email notifications to aditimehra0298@gmail.com

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "EUROCERT Form Submissions"
3. Create two sheets (tabs):
   - **Consultation Bookings** - for hero/CTA section forms
   - **Event Registrations** - for event calendar forms

### Sheet 1: Consultation Bookings
Add these headers in Row 1:
| Timestamp | Name | Email | Phone | Company | Description |
|-----------|------|-------|-------|---------|-------------|

### Sheet 2: Event Registrations
Add these headers in Row 1:
| Timestamp | Name | Email | Phone | Company | Date | Time | Role | Message |
|-----------|------|-------|-------|---------|------|------|------|---------|

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the following code:

```javascript
// Google Apps Script Code for Form Submissions
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Determine which sheet to use
    let sheet;
    let rowData = [];
    let emailSubject = '';
    let emailBody = '';
    
    if (formType === 'consultation') {
      sheet = ss.getSheetByName('Consultation Bookings');
      rowData = [
        new Date(),
        data.name,
        data.email,
        data.phone,
        data.company,
        data.description || 'N/A'
      ];
      
      emailSubject = '🔔 New Consultation Request - EUROCERT';
      emailBody = `
New consultation request received!

📋 Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🏢 Company: ${data.company}
💬 Description: ${data.description || 'N/A'}

⏰ Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View all submissions: ${ss.getUrl()}
      `;
      
    } else if (formType === 'event') {
      sheet = ss.getSheetByName('Event Registrations');
      rowData = [
        new Date(),
        data.name,
        data.email,
        data.phone,
        data.company,
        data.selectedDate,
        data.selectedTime,
        data.selectedRole,
        data.message || 'N/A'
      ];
      
      emailSubject = '🎉 New Event Registration - ENGIMACH 2025';
      emailBody = `
New event registration received!

📋 Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🏢 Company: ${data.company}
📅 Event Date: ${data.selectedDate}
🕐 Time Slot: ${data.selectedTime}
👔 Role: ${data.selectedRole}
💬 Message: ${data.message || 'N/A'}

⏰ Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View all registrations: ${ss.getUrl()}
      `;
    }
    
    // Append the data to the sheet
    if (sheet) {
      sheet.appendRow(rowData);
      
      // Send email notification
      MailApp.sendEmail({
        to: 'aditimehra0298@gmail.com',
        subject: emailSubject,
        body: emailBody
      });
    }
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Form submitted successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing)
function testSubmission() {
  const testData = {
    formType: 'consultation',
    name: 'Test User',
    email: 'test@example.com',
    phone: '+919999999999',
    company: 'Test Company',
    description: 'This is a test submission'
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  doPost(e);
}
```

## Step 3: Deploy the Apps Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: EUROCERT Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize** the script (it will ask for permissions)
7. **COPY THE WEB APP URL** - you'll need this! It looks like:
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

## Step 4: Update Your Website Code

Replace `YOUR_SCRIPT_URL_HERE` in the form submission code with the Web App URL you copied in Step 3.

Look for this line in:
- `src/HeroSection.jsx`
- `src/CTASection.jsx`
- `src/EventSection.jsx`

```javascript
const scriptURL = 'YOUR_SCRIPT_URL_HERE'; // Replace with your Google Apps Script URL
```

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet - a new row should appear
3. Check your email (aditimehra0298@gmail.com) - you should receive a notification

## Troubleshooting

### Form not submitting?
- Make sure you replaced `YOUR_SCRIPT_URL_HERE` with your actual script URL
- Check browser console for errors (F12)
- Verify the script is deployed as "Anyone" can access

### Not receiving emails?
- Check spam folder
- Verify email address in the script is correct
- Check Google Apps Script execution logs: Script Editor → Executions

### Data not appearing in sheet?
- Make sure sheet names match exactly: "Consultation Bookings" and "Event Registrations"
- Check Apps Script execution logs for errors

## Security Note

The current setup allows anyone to submit to your form. To add reCAPTCHA or other security measures, you can:
1. Add reCAPTCHA to your forms
2. Add rate limiting in Apps Script
3. Validate data server-side

## Support

If you encounter issues:
1. Check Apps Script execution logs
2. Test with the `testSubmission()` function in Apps Script
3. Verify all sheet names and column headers match exactly

