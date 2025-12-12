// api.js
const API_BASE = ""; // leave blank if frontend served by same origin as Flask (e.g. http://localhost:5000)
// Example: const API_BASE = "http://192.168.1.10:5000";

async function apiGet(path){
  const res = await fetch(API_BASE + path);
  return res.ok ? res.json() : Promise.reject(await res.json());
}

async function apiPost(path, body){
  const res = await fetch(API_BASE + path, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  });
  return res.ok ? res.json() : Promise.reject(await res.json());
}
