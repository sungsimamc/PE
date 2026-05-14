/**
 * js/api.js: 외부 통신 전용 함수 모음
 */
const WORKER_URL = 'https://pesungsim.sungsimamc.workers.dev/';

/**
 * Cloudflare Worker를 통해 Slack으로 메시지 전송
 */
async function sendToSlackAPI(moduleType, formattedText) {
  const payload = { type: moduleType, text: formattedText };
  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error('Slack 전송 실패 (HTTP ' + response.status + ')');
  return response;
}

/**
 * Cloudflare Worker를 통해 Google Sheets에 데이터 저장
 */
async function sendToSheetsAPI(sheetsPayload) {
  const payload = { type: 'rx_sheets', data: sheetsPayload };
  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error('Sheets 저장 실패 (HTTP ' + response.status + ')');
  return response;
}
