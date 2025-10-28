# 🚀 Quick Start: Google Sheets Integration

## What's Been Done ✅

Your website forms are now ready to connect with Google Sheets! When someone submits a form:
1. ✅ Data is automatically saved to Google Sheets
2. ✅ You receive an email notification at **aditimehra0298@gmail.com**
3. ✅ Form shows a success message to the user

## 3-Step Setup (Takes ~10 minutes)

### Step 1: Create Google Sheet 📊

1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet: **"EUROCERT Form Submissions"**
3. Create 2 tabs (sheets):

**Tab 1: "Consultation Bookings"**
```
Timestamp | Name | Email | Phone | Company | Description
```

**Tab 2: "Event Registrations"**
```
Timestamp | Name | Email | Phone | Company | Date | Time | Role | Message
```

### Step 2: Deploy Google Apps Script ⚙️

1. In your Google Sheet: **Extensions** → **Apps Script**
2. Delete default code
3. **Copy ALL the code** from `GOOGLE_SHEETS_SETUP.md` (lines 31-133)
4. Paste into Apps Script editor
5. Click **Deploy** → **New deployment**
6. Choose **Web app**
7. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy** → **Authorize**
9. **COPY THE URL** (looks like: `https://script.google.com/macros/s/...../exec`)

### Step 3: Add URL to Your Website 🔗

1. Open file: `src/config.js`
2. Replace this line:
```javascript
export const GOOGLE_SCRIPT_URL = 'YOUR_SCRIPT_URL_HERE';
```

With your URL:
```javascript
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec';
```

3. Save the file
4. Commit and push:
```bash
git add src/config.js
git commit -m "Configure Google Sheets URL"
git push origin main
```

## ✅ Test It!

1. Go to your website
2. Fill out any form (consultation or event registration)
3. Submit
4. Check:
   - ✅ Google Sheet has new row
   - ✅ Email sent to aditimehra0298@gmail.com

## 📧 Email Notifications

You'll receive emails like this:

**For Consultations:**
```
Subject: 🔔 New Consultation Request - EUROCERT

New consultation request received!

📋 Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +919999999999
🏢 Company: ABC Industries
💬 Description: Need ISO certification
⏰ Submitted at: 10/27/2025, 5:30:00 PM
```

**For Event Registrations:**
```
Subject: 🎉 New Event Registration - ENGIMACH 2025

New event registration received!

📋 Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: Jane Smith
📧 Email: jane@example.com
📱 Phone: +919888888888
🏢 Company: XYZ Corp
📅 Event Date: December 5, 2025
🕐 Time Slot: 10:00 AM
👔 Role: Quality Manager
```

## 🔧 Troubleshooting

### Forms not working?
- ✅ Check `src/config.js` has correct URL
- ✅ Rebuild: `npm run build`
- ✅ Check browser console for errors (F12)

### No email received?
- ✅ Check spam folder
- ✅ Verify Apps Script is deployed as "Anyone" can access
- ✅ Check Apps Script execution logs

### No data in sheet?
- ✅ Sheet names must be exact: "Consultation Bookings" and "Event Registrations"
- ✅ Check Apps Script logs: Script Editor → Executions

## 📁 Files Modified

- ✅ `src/HeroSection.jsx` - Consultation form
- ✅ `src/CTASection.jsx` - CTA consultation form
- ✅ `src/EventSection.jsx` - Event registration form
- ✅ `src/config.js` - Configuration file (UPDATE THIS!)
- ✅ `GOOGLE_SHEETS_SETUP.md` - Detailed setup guide

## Need Help?

Full setup instructions with screenshots: See `GOOGLE_SHEETS_SETUP.md`

---

**Last Updated:** October 27, 2025

