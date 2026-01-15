// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "W3siZnJvbSI6Im9uYm9hcmRpbmciLCJ0byI6Imh0dHBzOi8vZm9ybS5maWxsb3V0LmNvbS90LzF1MUNhMmFNZ2F1cz9pZD0ifSx7ImZyb20iOiJvZmZib2FyZGluZyIsInRvIjoiaHR0cHM6Ly9mb3JtLmZpbGxvdXQuY29tL3QvOUpnWjM1VXB2SnVzP2lkPSJ9LHsiZnJvbSI6InRyYWluaW5nIiwidG8iOiJodHRwczovL2Zvcm0uZmlsbG91dC5jb20vdC9mZDR5eWtCV1VRdXM/aWQ9In0seyJmcm9tIjoiYWxsLWhhbmRzIiwidG8iOiJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8wQUsyX0kyVkhFVW1SVWs5UFZBIn0seyJmcm9tIjoic2xhY2siLCJ0byI6Imh0dHBzOi8vam9pbi5zbGFjay5jb20vdC9yYXJlY29sbGFib3JhdGl2ZS9zaGFyZWRfaW52aXRlL3p0LTNtc2RqaHVwaC11dnBUUlEzTklQX3BHZEFxZWVNcXd3In1d"; // empty array base64 encoded

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
