import {createNewMessage} from './messages.js';

// import {renderTemplate} from './templates.js';

import {changeAlignment} from './alignment.js';
import {switchListItem} from './dialog.js';
import {removeMessage} from './messages.js';
// import {getAlignmentClass} from './alignment.js';
// import {getCurrentTime} from './utils.js';








/* --- EVENTS DECLARATION --- */

// Feature : "Remove message"
$("#dialog").on("click", "button", removeMessage);

// Feature : "Add new message"
$("#send-btn").click(createNewMessage);

// Feature : "Change message alignment"
$("button", $("#align-btns")).click(changeAlignment);

// Feature : "Select discussion item"
$("a.list-group-item").click(switchListItem);



export {createNewMessage};

// export {renderTemplate};

export {changeAlignment};
export {switchListItem};

export {removeMessage};

// export {getAlignmentClass};
// export {getCurrentTime};
// export {getTemplate};