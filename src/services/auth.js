const KEY = "campuspulse_user";

export function getStoredUser() {
  try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch { return null; }
}

export function saveUser(user) {
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function clearUser() {
  localStorage.removeItem(KEY);
}

export function buildDemoProfile(role, email = "") {
  if (role === "student") return { name: "Student", email, department: "Computer Science", year: "3rd Year", role };
  if (role === "counselor") return { name: "Counselor", email, role };
  return { name: "Campus Admin", email, role: "admin" };
}
