// Activate chat listeners defined in dice-wng.js
import {DiceWNG} from "../dice-wng";

Hooks.on('renderChatLog', (log, html, data) => DiceWNG.chatListeners(html));