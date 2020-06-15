import {getAlignmentClass} from './alignment.js';
import {getCurrentTime} from './utils.js';

export function renderTemplate($template, content) {
    const $message = $("#message");
    // Get the correct alignment
    const alignment = getAlignmentClass($message);
  
    // Insert the value in the tempalte
    $("div.msg-content", $template).text(content);
    $("small.text-info", $template).text(getCurrentTime());
    if (alignment) $template.addClass(alignment);
  
    // Add the template to the page
    $("#dialog").find("div.row").append($template);
    $message.val("");
  }

