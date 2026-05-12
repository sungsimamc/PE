// js/api.js
const WORKER_URL = 'https://pesungsim.sungsimamc.workers.dev/';

/**
 * Cloudflare Worker를 통해 Slack으로 데이터를 전송합니다.
 * @param {string} moduleType - 'exam' (신체검사), 'rx' (처방전) 등 라우팅을 위한 모듈 타입
 * @param {string} formattedText - 슬랙에 전송될 실제 텍스트 메시지
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

  if (!response.ok) {
    throw new Error('HTTP ' + response.status);
  }
  
  return response;
}