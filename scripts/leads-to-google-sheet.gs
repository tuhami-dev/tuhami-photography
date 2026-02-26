/**
 * Tuhami Photography — Lead capture to Google Sheet
 *
 * Setup:
 * 1. Create or open a Google Sheet.
 * 2. Extensions → Apps Script. Delete any sample code and paste this entire file.
 * 3. (Optional) Project Settings → Script Properties → Add "LEADS_SECRET" = a random string.
 *    Your Next.js app will send this in the request body; if you don't set it, the script skips the check.
 * 4. Deploy → New deployment → Type: Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone (so your server can POST without Google login)
 * 5. Copy the Web app URL and add it to .env as LEADS_SHEET_URL.
 *    If you set LEADS_SECRET, add LEADS_SHEET_SECRET to .env with the same value.
 *
 * The script appends one row per POST with: Timestamp, Full Name, Email, Phone,
 * Session Type, Preferred Location, Preferred Date, Message.
 */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return response(400, { error: 'Missing body' });
    }

    var data = JSON.parse(e.postData.contents);

    // Optional: require secret (set Script Property LEADS_SECRET)
    var props = PropertiesService.getScriptProperties();
    var expectedSecret = props.getProperty('LEADS_SECRET');
    if (expectedSecret && expectedSecret.length > 0) {
      if (!data.secret || data.secret !== expectedSecret) {
        return response(403, { error: 'Invalid or missing secret' });
      }
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var headers = ['Timestamp', 'Full Name', 'Email', 'Phone', 'Session Type', 'Preferred Location', 'Preferred Date', 'Message'];

    // If sheet is empty, write headers in row 1
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    }

    var row = [
      new Date(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.sessionType || '',
      data.preferredLocation || '',
      data.preferredDate || '',
      data.message || ''
    ];

    sheet.appendRow(row);

    return response(200, { success: true });
  } catch (err) {
    return response(500, { error: err.toString() });
  }
}

function response(code, body) {
  var output = ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
