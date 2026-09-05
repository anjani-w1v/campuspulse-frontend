import { api, apiConfig } from "./api";

export async function sendTextMessage(payload) {
  return api.post(apiConfig.mannmitraText, payload);
}

export async function sendVoiceMessage(formData) {
  return api.post(apiConfig.mannmitraVoice, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
}
