/**
 * formatDate.
 *
 * @example
 * formatDate(new Date("Feburary 07, 2024 16:00:00"))
 * // Turns to
 * "Feburary 07, 2024 | 4:00PM"
 */
export function formatDate(date: Date, noTime = false) {
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
        date
    );
    const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    const time = new Intl.DateTimeFormat("en", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);

    if (noTime) {
        return `${month} ${day}, ${year}`;
    }

    return `${month} ${day}, ${year} | ${time}`;
}
