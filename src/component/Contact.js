import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <address>
        <h3>Pune Office:</h3>
        <br />
        Brainworks Business Solutions
        <br />
        Vrundavan Vihar, 1st Floor,
        <br />
        Vetalbuwa Chowk,
        <br />
        Near Grampanchayat,
        <br />
        Narhegaon, Pune – 411041.
      </address>
      <br />
      <br />
      Phone: 020-1111111
      <br />
      Fax: 020-12121212
      <br />
      Email: abc@gmail.com
      <br />
      Email: info.kop@bwbsol.com
      <br />
      <br />
      <Link to="/">Go to Home Page</Link>
    </>
  );
}
export default Contact;
