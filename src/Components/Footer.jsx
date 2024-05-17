import React from "react";

function Footer() {
  return (
    <>
      <div className="contact bg-dark">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <a href="https://github.com/jishnu-reji" target="_blank">
                <button className="btn bbb">
                  <i class="fa-brands fa-linkedin fa-beat"></i>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/jishnu-r-066a7a1a0/"
                target="_blank"
              >
                <button className="btn bbb">
                  <i class="fa-brands fa-github fa-beat"></i>
                </button>
              </a>
              <a href="https://www.instagram.com/jishnu_reji_/" target="_blank">
                <button className="btn bbb">
                  <i class="fa-brands fa-square-instagram fa-beat"></i>
                </button>
              </a>
            </div>
            <div className="text-white">
              <h6>COPYRIGHT@PORTFOLIO WEBSITE. ALL RIGHTS RECERVED BY JISHNU REJI</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
