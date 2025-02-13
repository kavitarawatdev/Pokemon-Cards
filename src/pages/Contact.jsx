import { Form } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
export const Contact = () => {
  return (
    <section className="section contact-section">
      <div className="container">
        <h2 className="common-heading">Contact</h2>
      </div>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55719.10411850238!2d78.9205988228666!3d29.210491781877714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x390a43c0c5694dd1%3A0xe193d5f15c9333a0!2sKashipur%2C%20Uttarakhand!3m2!1d29.210423199999997!2d78.9618845!4m0!5e0!3m2!1sen!2sin!4v1739365479266!5m2!1sen!2sin"
       allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="section-contact-main container">
        <Form action="/contact" method="POST" className="flex flex-col">
          <div className="grid grid-two-col">
            <div>
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject"></label>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              id="subject"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="textarea"></label>
            <textarea
              type="text"
              name="textarea"
              id="textarea"
              rows="10"
              cols="30"
              min="5"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="submit"></label>
            <input type="submit" name="submit" className="btn" id="submit" />
          </div>
        </Form>
      </div>
    </section>
  );
};

export const contactData = async ({ request }) => {
  try {
    const response = await request.formData();
    console.log(request);
    console.log(response);
    const data = Object.fromEntries(response);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
