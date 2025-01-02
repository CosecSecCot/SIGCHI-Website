/**
 * formatDate.
 *
 * @example
 * formatDate(new Date("Feburary 07, 2024 16:00:00"))
 * // Turns to
 * "Feburary 07, 2024 | 4:00PM"
 *
 * @param {Date} date - Date which needs to be modified.
 * @returns {string} - Formatted date (see example).
 */
export function formatDate(date) {
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    let time = new Intl.DateTimeFormat("en", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);

    return `${month} ${day}, ${year} | ${time}`;
}
