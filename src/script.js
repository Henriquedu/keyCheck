const layouts = {
  br: [
    [key("Esc", "Escape"), empty(), key("F1", "F1"), key("F2", "F2"), key("F3", "F3"), key("F4", "F4"), empty(), key("F5", "F5"), key("F6", "F6"), key("F7", "F7"), key("F8", "F8"), empty(), key("F9", "F9"), key("F10", "F10"), key("F11", "F11"), key("F12", "F12"), empty(), key("Prnt\nScrn", "PrintScreen"), key("Scroll\nLock", "ScrollLock"), key("Pause\nBreak", "Pause"), empty(4)],
    [key("\"\n'", "Backquote"), key("!\n1", "Digit1"), key("@\n2", "Digit2"), key("#\n3", "Digit3"), key("$\n4", "Digit4"), key("%\n5", "Digit5"), key("^\n6", "Digit6"), key("&\n7", "Digit7"), key("*\n8", "Digit8"), key("(\n9", "Digit9"), key(")\n0", "Digit0"), key("_\n-", "Minus"), key("+\n=", "Equal"), key("Backspace", "Backspace", 2), empty(), key("Insert", "Insert"), key("Home", "Home"), key("Page\nUp", "PageUp"), key("Num\nLock", "NumLock"), key("/", "NumpadDivide"), key("*", "NumpadMultiply"), key("-", "NumpadSubtract")],
    [key("Tab", "Tab", 2), key("Q", "KeyQ"), key("W", "KeyW"), key("E", "KeyE"), key("R", "KeyR"), key("T", "KeyT"), key("Y", "KeyY"), key("U", "KeyU"), key("I", "KeyI"), key("O", "KeyO"), key("P", "KeyP"), key("`\n´", "BracketLeft"), key("{\n[", "BracketRight"), key("Enter", "Enter", 2), empty(), key("Del", "Delete"), key("End", "End"), key("Page\nDown", "PageDown"), key("7\nHome", "Numpad7"), key("8\n▲", "Numpad8"), key("9\nPg Up", "Numpad9"), key("+", "NumpadAdd")],
    [key("Caps\nLock", "CapsLock", 2), key("A", "KeyA"), key("S", "KeyS"), key("D", "KeyD"), key("F", "KeyF"), key("G", "KeyG"), key("H", "KeyH"), key("J", "KeyJ"), key("K", "KeyK"), key("L", "KeyL"), key("Ç", "Semicolon"), key("^\n~", "Quote"), key("}\n]", "Backslash"), key("Enter", "Enter", 2), empty(4), key("4\n◄", "Numpad4"), key("5", "Numpad5"), key("6\n►", "Numpad6"), key(".", "NumpadDecimal")],
    [key("Shift", "ShiftLeft", 2), key("|\n\\", "IntlBackslash"), key("Z", "KeyZ"), key("X", "KeyX"), key("C", "KeyC"), key("V", "KeyV"), key("B", "KeyB"), key("N", "KeyN"), key("M", "KeyM"), key("<\n,", "Comma"), key(">\n.", "Period"), key(":\n;", "Slash"), key("?\n/", "IntlRo"), key("Shift", "ShiftRight", 2), empty(2), key("↑", "ArrowUp"), empty(), key("1\nEnd", "Numpad1"), key("2\n▼", "Numpad2"), key("3\nPg Dn", "Numpad3"), key("Enter", "NumpadEnter")],
    [key("Ctrl", "ControlLeft", 2), key("Win", "MetaLeft"), key("Alt", "AltLeft"), key("Espaço", "Space", 7), key("AltGr", "AltRight"), key("Win", "MetaRight"), key("Prnt", "ContextMenu"), key("Ctrl", "ControlRight"), empty(), key("←", "ArrowLeft"), key("↓", "ArrowDown"), key("→", "ArrowRight"), empty(), key("0\nIns", "Numpad0", 2), key(",\nDel", "NumpadDecimal"), key("Enter", "NumpadEnter")]
  ],
  us: [
    [key("Esc", "Escape"), empty(), key("F1", "F1"), key("F2", "F2"), key("F3", "F3"), key("F4", "F4"), empty(), key("F5", "F5"), key("F6", "F6"), key("F7", "F7"), key("F8", "F8"), empty(), key("F9", "F9"), key("F10", "F10"), key("F11", "F11"), key("F12", "F12"), empty(), key("Prnt\nScrn", "PrintScreen"), key("Scroll\nLock", "ScrollLock"), key("Pause\nBreak", "Pause"), empty(4)],
    [key("~\n`", "Backquote"), key("!\n1", "Digit1"), key("@\n2", "Digit2"), key("#\n3", "Digit3"), key("$\n4", "Digit4"), key("%\n5", "Digit5"), key("^\n6", "Digit6"), key("&\n7", "Digit7"), key("*\n8", "Digit8"), key("(\n9", "Digit9"), key(")\n0", "Digit0"), key("_\n-", "Minus"), key("+\n=", "Equal"), key("Backspace", "Backspace", 2), empty(), key("Insert", "Insert"), key("Home", "Home"), key("Page\nUp", "PageUp"), key("Num\nLock", "NumLock"), key("/", "NumpadDivide"), key("*", "NumpadMultiply"), key("-", "NumpadSubtract")],
    [key("Tab", "Tab", 2), key("Q", "KeyQ"), key("W", "KeyW"), key("E", "KeyE"), key("R", "KeyR"), key("T", "KeyT"), key("Y", "KeyY"), key("U", "KeyU"), key("I", "KeyI"), key("O", "KeyO"), key("P", "KeyP"), key("{\n[", "BracketLeft"), key("}\n]", "BracketRight"), key("|\n\\", "Backslash"), key("Del", "Delete"), key("End", "End"), key("Page\nDown", "PageDown"), key("7\nHome", "Numpad7"), key("8\n▲", "Numpad8"), key("9\nPg Up", "Numpad9"), key("+", "NumpadAdd")],
    [key("Caps\nLock", "CapsLock", 2), key("A", "KeyA"), key("S", "KeyS"), key("D", "KeyD"), key("F", "KeyF"), key("G", "KeyG"), key("H", "KeyH"), key("J", "KeyJ"), key("K", "KeyK"), key("L", "KeyL"), key(":\n;", "Semicolon"), key("\"\n'", "Quote"), key("Enter", "Enter", 2), empty(5), key("4\n◄", "Numpad4"), key("5", "Numpad5"), key("6\n►", "Numpad6"), key(".", "NumpadDecimal")],
    [key("Shift", "ShiftLeft", 3), key("Z", "KeyZ"), key("X", "KeyX"), key("C", "KeyC"), key("V", "KeyV"), key("B", "KeyB"), key("N", "KeyN"), key("M", "KeyM"), key("<\n,", "Comma"), key(">\n.", "Period"), key("?\n/", "Slash"), key("Shift", "ShiftRight", 3), empty(2), key("↑", "ArrowUp"), empty(), key("1\nEnd", "Numpad1"), key("2\n▼", "Numpad2"), key("3\nPg Dn", "Numpad3"), key("Enter", "NumpadEnter")],
    [key("Ctrl", "ControlLeft", 2), key("Win", "MetaLeft"), key("Alt", "AltLeft"), key("Espaço", "Space", 7), key("Alt", "AltRight"), key("Ctrl", "ControlRight"), empty(2), key("←", "ArrowLeft"), key("↓", "ArrowDown"), key("→", "ArrowRight"), empty(), key("0\nIns", "Numpad0", 2), key(".\nDel", "NumpadDecimal"), key("Enter", "NumpadEnter")]
  ]
};

const keyboardLayout = document.querySelector("#keyboardLayout");
const lastKey = document.querySelector("#lastKey");
const lastCode = document.querySelector("#lastCode");
const testedCount = document.querySelector("#testedCount");
const clearButton = document.querySelector("#clearButton");
const eventList = document.querySelector("#eventList");
const mouseArea = document.querySelector("#mouseArea");
const mouseStatus = document.querySelector("#mouseStatus");
const mouseMessage = document.querySelector("#mouseMessage");
const brLayoutButton = document.querySelector("#brLayoutButton");
const usLayoutButton = document.querySelector("#usLayoutButton");

const testedKeys = new Set();
const keyElements = new Map();

let currentLayout = "br";

function key(label, code, span = 1) {
  return {
    label,
    code,
    span,
    empty: false
  };
}

function empty(span = 1) {
  return {
    label: "",
    code: "",
    span,
    empty: true
  };
}

function createKeyboard(layout) {
  keyboardLayout.innerHTML = "";
  keyElements.clear();

  layouts[layout].forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "key-row";

    row.forEach((item) => {
      const button = document.createElement("button");
      button.className = `key span-${item.span}`;
      button.type = "button";
      button.textContent = item.label;

      if (item.empty) {
        button.classList.add("empty");
      } else {
        button.dataset.code = item.code;
        keyElements.set(item.code, button);

        if (testedKeys.has(item.code)) {
          button.classList.add("released");
        }
      }

      rowElement.appendChild(button);
    });

    keyboardLayout.appendChild(rowElement);
  });
}

function changeLayout(layout) {
  currentLayout = layout;
  brLayoutButton.classList.toggle("active", layout === "br");
  usLayoutButton.classList.toggle("active", layout === "us");
  createKeyboard(layout);
  addEvent(`Layout alterado para ${layout.toUpperCase()}`);
}

function registerKeyDown(event) {
  event.preventDefault();

  const keyElement = keyElements.get(event.code);
  const readableKey = event.key === " " ? "Espaço" : event.key;

  lastKey.textContent = readableKey;
  lastCode.textContent = event.code;

  if (keyElement) {
    keyElement.classList.remove("released");
    keyElement.classList.add("pressed");
  }

  testedKeys.add(event.code);
  testedCount.textContent = testedKeys.size;
  addEvent(`Tecla acionada: ${readableKey} (${event.code})`);
}

function registerKeyUp(event) {
  const keyElement = keyElements.get(event.code);

  if (keyElement) {
    keyElement.classList.remove("pressed");
    keyElement.classList.add("released");
  }
}

function addEvent(text) {
  if (eventList.children[0]?.textContent === "Nenhum evento registrado.") {
    eventList.innerHTML = "";
  }

  const item = document.createElement("li");
  const time = new Date().toLocaleTimeString("pt-BR");

  item.textContent = `[${time}] ${text}`;
  eventList.prepend(item);

  if (eventList.children.length > 12) {
    eventList.lastElementChild.remove();
  }
}

function clearTests() {
  testedKeys.clear();
  testedCount.textContent = "0";
  lastKey.textContent = "Nenhuma";
  lastCode.textContent = "-";
  mouseStatus.textContent = "Aguardando";
  mouseMessage.textContent = "Nenhum clique detectado.";

  document.querySelectorAll(".pressed, .released").forEach((element) => {
    element.classList.remove("pressed", "released");
  });

  eventList.innerHTML = "<li>Nenhum evento registrado.</li>";
}

function getMouseButtonName(button) {
  const buttons = {
    0: "Botão esquerdo",
    1: "Botão do meio",
    2: "Botão direito"
  };

  return buttons[button] || "Botão desconhecido";
}

function highlightMouseButton(button) {
  const selector = {
    0: "#leftButton",
    1: "#middleButton",
    2: "#rightButton"
  }[button];

  if (!selector) {
    return;
  }

  const element = document.querySelector(selector);
  element.classList.add("active");

  setTimeout(() => {
    element.classList.remove("active");
  }, 250);
}

mouseArea.addEventListener("contextmenu", (event) => event.preventDefault());

mouseArea.addEventListener("mousedown", (event) => {
  const buttonName = getMouseButtonName(event.button);

  mouseStatus.textContent = buttonName;
  mouseMessage.textContent = `${buttonName} funcionando.`;
  highlightMouseButton(event.button);
  addEvent(`Mouse detectado: ${buttonName}`);
});

window.addEventListener("keydown", registerKeyDown);
window.addEventListener("keyup", registerKeyUp);
clearButton.addEventListener("click", clearTests);
brLayoutButton.addEventListener("click", () => changeLayout("br"));
usLayoutButton.addEventListener("click", () => changeLayout("us"));

createKeyboard(currentLayout);
