import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000",
  timeout: 15000,
  headers: { "Content-Type": "application/json" }
});

export const apiConfig = {
  health: "/health",
  mannmitraText: "/api/mannmitra/chat",
  mannmitraVoice: "/api/mannmitra/voice",
  checkIn: "/api/wellbeing/check-in",
  insights: "/api/wellbeing/insights",
  counselorMessages: "/api/counselor/messages"
};
