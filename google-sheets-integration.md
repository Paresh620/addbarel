# Google Sheets Lead Capture Integration

To automatically capture leads from the Addword contact form into a Google Sheet, follow these steps:

## 1. Create a Google Sheet
1. Create a new Google Sheet.
2. Name the columns in the first row: `Timestamp`, `Name`, `Email`, `Phone`, `Company`, `Service`, `Budget`, `Message`.

## 2. Create the Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**.
2. Replace the default code with the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.company,
    data.service,
    data.budget,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy as Web App
1. Click **Deploy > New deployment**.
2. Select **Web app**.
3. Set "Execute as" to **Me**.
4. Set "Who has access" to **Anyone**.
5. Click **Deploy** and copy the **Web App URL**.

## 4. Update the Frontend
In `src/pages/Contact.tsx`, update the `handleSubmit` function to POST to your Web App URL:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('YOUR_WEB_APP_URL', {
      method: 'POST',
      body: JSON.stringify(formState),
    });
    
    if (response.ok) {
      setStatus('success');
      // ... reset form
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
```
