# 🔧 Troubleshooting: Google Sheets Not Receiving Data

## Quick Checklist

### ✅ Step 1: Verify Google Sheet Setup

1. **Check Sheet Name** (Must be EXACTLY):
   - Sheet name: `EUROCERT Form Submissions`
   
2. **Check Tab Names** (Must be EXACTLY these names):
   - Tab 1: `Consultation Bookings`
   - Tab 2: `Event Registrations`

3. **Check Column Headers in Row 1**:

**Consultation Bookings tab:**
```
Timestamp | Name | Email | Phone | Company | Description
```

**Event Registrations tab:**
```
Timestamp | Name | Email | Phone | Company | Date | Time | Role | Message
```

### ✅ Step 2: Verify Apps Script Deployment

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Check if the code is there (should be ~100 lines)
4. Click **Deploy** → **Manage deployments**
5. Check settings:
   - ✅ Type: **Web app**
   - ✅ Execute as: **Me (your email)**
   - ✅ Who has access: **Anyone**

**If "Anyone" is NOT selected:**
1. Click the pencil icon ✏️
2. Change "Who has access" to **Anyone**
3. Click **Deploy**
4. Copy the NEW URL and update `src/config.js`

### ✅ Step 3: Test the Apps Script Directly

1. In Apps Script editor, find the `testSubmission()` function
2. Click **Run** → Select `testSubmission`
3. **Authorize** if prompted
4. Check:
   - ✅ Does a test row appear in your sheet?
   - ✅ Did you receive a test email?

**If NO:**
- Check **Executions** tab for errors
- Make sure you authorized the script

**If YES:**
- The script works! Problem is in the website code.

### ✅ Step 4: Test the Form on Website

1. Open your website (localhost or deployed)
2. Open Browser Console (Press F12)
3. Go to **Console** tab
4. Fill out a form and submit
5. Look for errors or messages

**What to look for:**
- ✅ "Form submitted successfully" message
- ❌ Any red error messages
- ❌ CORS errors
- ❌ Network errors

### ✅ Step 5: Check Network Request

1. Browser Console (F12) → **Network** tab
2. Submit a form
3. Look for request to: `script.google.com/macros/s/.../exec`
4. Click on it
5. Check:
   - Status: Should be 200 or show completed
   - Preview: Check if there's a response

**Common Issues:**

#### Issue 1: CORS Error
```
Access to fetch at 'https://script.google.com/...' has been blocked by CORS
```
**Fix:** This is NORMAL! The script uses `mode: 'no-cors'` and still works.

#### Issue 2: 404 Not Found
**Fix:** Your Apps Script URL is wrong or deployment failed.
- Redeploy the script
- Get NEW URL
- Update `src/config.js`

#### Issue 3: 403 Forbidden
**Fix:** Script permissions issue
- Redeploy with "Who has access: Anyone"

#### Issue 4: No network request at all
**Fix:** Config URL might be wrong
- Check `src/config.js`
- Make sure URL is not still `YOUR_SCRIPT_URL_HERE`

### ✅ Step 6: Verify Config File

Open `src/config.js` and verify:

```javascript
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_LONG_ID_HERE/exec';
```

**Should NOT be:**
- ❌ `YOUR_SCRIPT_URL_HERE`
- ❌ Missing `/exec` at the end
- ❌ Has `/dev` instead of `/exec`

### ✅ Step 7: Check Apps Script Logs

1. Open Apps Script editor
2. Click **Executions** (left sidebar)
3. Look for recent executions
4. If there are errors, click to see details

**Common Script Errors:**

**Error: Cannot find sheet "Consultation Bookings"**
- Fix: Check sheet tab names (must match exactly)

**Error: Cannot send email**
- Fix: Make sure you authorized Gmail permissions

**Error: ReferenceError**
- Fix: Might be missing code, re-paste the script

### 🔍 Debug Mode Test

Try this simplified test:

1. Open Browser Console on your website
2. Paste this code and press Enter:

```javascript
fetch('https://script.google.com/macros/s/AKfycbzawCPj6HOYWfYkW6I8I7PTyNh9Cm-8HcPXh3j3WvYSC4UKtFsqSDKdsm0btwEt-fKd/exec', {
  method: 'POST',
  mode: 'no-cors',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    formType: 'consultation',
    name: 'Test User',
    email: 'test@example.com',
    phone: '+919999999999',
    company: 'Test Co',
    description: 'Debug test',
    timestamp: new Date().toISOString()
  })
}).then(() => console.log('Request sent!')).catch(err => console.error('Error:', err));
```

3. Check your Google Sheet for a new row
4. Check your email

**If this works:** Your script is fine, problem is in form submission code
**If this doesn't work:** Problem is with the script or permissions

## Still Not Working?

### Option A: Re-deploy from Scratch

1. **Delete old deployment:**
   - Apps Script → Deploy → Manage deployments → Archive

2. **Create new deployment:**
   - Deploy → New deployment → Web app
   - Execute as: Me
   - Who has access: Anyone
   - Deploy

3. **Update config with NEW URL:**
   - Copy the new URL
   - Update `src/config.js`
   - Commit and push

### Option B: Check the Complete Apps Script Code

Make sure your Apps Script has this exact structure:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // ... rest of code
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Need More Help?

1. Share screenshot of:
   - Browser console errors
   - Apps Script Executions tab
   - Your Google Sheet tabs

2. Test the `testSubmission()` function first

3. Verify sheet names match EXACTLY (case-sensitive!)

