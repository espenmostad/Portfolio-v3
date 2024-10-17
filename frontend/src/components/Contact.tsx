import React from "react";

// Contact
type ContactProps = {
  email: string;
};

export default function Contact(data: ContactProps) {
  const { email } = data; // Destructure the `email` here
  console.log("Email in Contact:", email);  // Debug log
  
  return (
    // <React.Fragment>
    //   <form
    //     onSubmit={(e) => {
    //       e.preventDefault(); // Prevent the default form submission behavior
    //       alert(`Email: ${email}`);
    //     }}
    //   >
    //     <button type="submit">Contact me</button>
    //   </form>
      

    // </React.Fragment>
    <React.Fragment>
      <a
      href="#"
      onClick={(e) => {
        e.preventDefault(); // Prevent default link behavior (like navigating to the top of the page)
        alert(`Email: ${email}`);
      }}
    >
      Contact me
    </a>
  </React.Fragment>
  );
}