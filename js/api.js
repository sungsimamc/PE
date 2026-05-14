/**
 * js/api.js: 외부 통신 전용 함수 모음
 */
const WORKER_URL = 'https://pesungsim.sungsimamc.workers.dev/';

/**
 * Cloudflare Worker를 통해 Slack으로 데이터를 전송합니다.
 */
async function sendToSlackAPI(moduleType, formattedText) {
  const payload = {
    type: moduleType,
    text: formattedText
  };

  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error('Slack HTTP ' + response.status);
  return response;
}

/**
 * Cloudflare Worker를 통해 Google Sheets에 처방 데이터를 저장합니다.
 */
async function sendToSheetsAPI(sheetsPayload) {
  const payload = { 
    type: 'rx_sheets', 
    data: sheetsPayload 
  };

  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error('Sheets HTTP ' + response.status);
  return response;
}
