"use strict";

// Q4: Custom Form Builder (Forms + Classes)
// Run in a browser. Field objects may use type, label, name, and required.
class FormBuilder {
  constructor(fields, mount = document.body) {
    this.fields = fields;
    this.form = document.createElement("form");
    this.form.innerHTML = `<h2>Dynamic Form</h2>`;
    this.form.style.display = "grid";
    this.form.style.gap = "8px";

    for (const field of this.fields) {
      const label = document.createElement("label");
      label.textContent = field.label;
      const input = document.createElement("input");
      input.type = field.type || "text";
      input.name = field.name || field.label.toLowerCase().replace(/\s+/g, "_");
      input.required = Boolean(field.required);
      label.appendChild(input);
      this.form.appendChild(label);
    }

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Submit";
    this.form.appendChild(submit);

    this.output = document.createElement("pre");
    this.form.addEventListener("submit", event => {
      event.preventDefault();
      const data = this.getFormData();
      this.output.textContent = JSON.stringify(data, null, 2);
      console.log("Form data:", data);
    });

    mount.append(this.form, this.output);
  }

  getFormData() {
    return Object.fromEntries(new FormData(this.form).entries());
  }
}

new FormBuilder([
  { type: "text", label: "Username", name: "username", required: true },
  { type: "email", label: "Email", name: "email", required: true },
  { type: "password", label: "Password", name: "password", required: true }
]);
