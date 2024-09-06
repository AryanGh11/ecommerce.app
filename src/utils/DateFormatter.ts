export class DateFormatter {
  public static format(date: Date): string {
    // get day, month, and year
    const day = date.getDate().toString().padStart(2, "0"); // ensure 2-digit format with leading zero
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // months are zero-based, so add 1
    const year = date.getFullYear();

    // format date as "DAY.MONTH.YEAR"
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  }

  public static timeAgo(date: Date): string {
    const now = new Date();

    // Calculate the difference in years and months
    const yearDifference = now.getFullYear() - date.getFullYear();
    const monthDifference = now.getMonth() - date.getMonth();

    // Convert the difference to total months
    let totalMonths = yearDifference * 12 + monthDifference;

    if (totalMonths < 0) {
      return "In the future"; // If the date is in the future
    }

    if (totalMonths === 0) {
      return "This month";
    } else if (totalMonths === 1) {
      return "1 month ago";
    } else if (totalMonths < 12) {
      return `${totalMonths} months ago`;
    } else {
      const yearsAgo = Math.floor(totalMonths / 12);
      const remainingMonths = totalMonths % 12;

      return remainingMonths === 0
        ? `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`
        : `${yearsAgo} year${
            yearsAgo > 1 ? "s" : ""
          } and ${remainingMonths} month${remainingMonths > 1 ? "s" : ""} ago`;
    }
  }
}
