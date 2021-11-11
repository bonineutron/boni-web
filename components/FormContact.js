import React from "react";

function FormContact() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <p>
        <label htmlFor="name">name</label>
        <input type="text" name="name" />
      </p>
      <p>
        <label htmlFor="email">email</label>
        <input type="email" name="email" />
      </p>
      <p>
        <label htmlFor="message">message</label>
        <input type="message" name="message" />
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default FormContact;
