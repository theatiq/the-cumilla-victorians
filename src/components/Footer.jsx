import logoFooter from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t py-4 place-content-center">
        <img src={logoFooter} alt="" />
      </footer>
      <footer className="footer bg-base-200 text-base-content p-10 flex justify-between">
        <nav className="w-1/3 ml-10">
          <h6 className="footer-title">About Us</h6>
          <p>
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav className="h-1/3">
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="w-1/3">
          <h6 className="footer-title">Subscribe</h6>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </nav>
      </footer>
      <hr />

      <footer className="footer bg-base-200 text-base-content border-base-300 border-t py-4 place-content-center">
        <p>@2024 Your Company All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
