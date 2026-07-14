/**
 * Formats a Date object as:
 * YYYY. MM. DD. HH:mm
 *
 * Example:
 * 2026. 07. 14. 09:07
 */
export function formatDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new TypeError("Expected a valid Date object.");
  }

  const pad = (value) => String(value).padStart(2, "0");

  return `${date.getFullYear()}. ${pad(date.getMonth() + 1)}. ${pad(date.getDate())}. ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function formatTime(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new TypeError("Expected a valid Date object.");
  }

  const pad = (value) => String(value).padStart(2, "0");

  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}