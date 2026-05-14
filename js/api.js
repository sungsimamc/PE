// js/api.js 전체 내용

const WORKER_URL = 'https://pesungsim.sungsimamc.workers.dev/';

/**
 * Slack 전송 함수
 */
async function sendToSlackAPI(moduleType, formattedText) {
  const payload = { type: moduleType, text: formattedText };
  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error('Slack HTTP ' + response.status);
  return response;
}

/**
 * Google Sheets 전송 함수 (이 부분이 있는지 확인!)
 */
async function sendToSheetsAPI(sheetsPayload) {
  const payload = { type: 'rx_sheets', data: sheetsPayload };
  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error('Sheets HTTP ' + response.status);
  return response;
}
