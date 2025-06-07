export function formatTimeAgo(dateInput) {
  const date = new Date(dateInput); // Ensure the input is a Date object
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000); // Calculate difference in seconds

  // Handle various time intervals
  if (seconds < 60) {
    return seconds <= 1 ? " för en sekund sedan" : ` för ${seconds} sekunder sedan`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return minutes <= 1 ? " för en minut sedan" : ` för ${minutes} minuter sedan`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return hours <= 1 ? " för en timme sedan" : ` för ${hours} timmar sedan`;
  }

  const days = Math.floor(hours / 24);
  if (days < 7) {
    return days <= 1 ? " för en dag sedag" : ` för ${days} dagar sedan`;
  }

  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return weeks <= 1 ? " för en vecka sedan" : ` för ${weeks} veckor sedan`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return months <= 1 ? " för en månad sedan" : ` för ${months} månader sedan`;
  }

  const years = Math.floor(days / 365);
  return years <= 1 ? " för ett år sedan" : ` för ${years} år sedan`;
}

// Function to format the exact date and time (Swedish locale)
export function formatExactDateTime(dateInput) {
  const date = new Date(dateInput); // Ensure the input is a Date object
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour format
  };
  // Format according to Swedish locale (sv-SE)
  return date.toLocaleString('sv-SE', options);
}