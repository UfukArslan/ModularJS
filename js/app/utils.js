/**
 * Returns the current time in a HH:MM formatted string
 */
export function getCurrentTime() {
    const date = new Date();
    return date.toLocaleTimeString("fr-CH", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  
  export function getTemplate(name) {
    return $.get(`templates/${name}.html`).then($);
  }