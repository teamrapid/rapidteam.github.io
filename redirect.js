// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "W10="; // empty array base64 encoded

list = JSON.parse(window.atob(list));

const baseurl = "";
const from = window.location.pathname
  .toLowerCase()
  .replace(new RegExp(`^/*${baseurl}`), "")
  .replace(/^(\/+)/, "");

const to = list.find((entry) => entry?.from === from)?.to;

console.info({ from, to });

if (to)
  window.location.href = to;
