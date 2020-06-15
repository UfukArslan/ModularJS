import {getTemplate} from './utils.js';
import {renderTemplate} from './templates.js';


/**
 * Creates a new message on the page, when the "send" button is clicked
 * @param {Event} event The event that triggers the call
 */
export function createNewMessage(event) {
  const $message = $("#message");
  // Getting the "New message" value
  const msgValue = $message.val();
  if (msgValue === "") {
    $message.addClass("is-invalid");
  } else {
    getTemplate("new-message")
      .then($)
      .then(($template) => renderTemplate($template, msgValue));
  }
  event.preventDefault();
}

/**
 * Removes a message from the page, if a "trash" button is clicked
 */
export function removeMessage() {
    // 'this' still represent the clicked button
    // So we can reuse the same code as before.
    $(this).closest("div.col-8").remove();
  }
