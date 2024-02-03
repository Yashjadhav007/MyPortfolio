import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="vg-page page-contact" id="contact">
        <div class="container-fluid">
          <div class="text-center wow fadeInUp">
            <div class="badge badge-subhead">Contact</div>
          </div>
          <h1 class="text-center fw-normal wow fadeInUp">Get in touch</h1>
          <div class="row py-5">
            <div class="col-lg-7 px-0 pr-lg-3 wow zoomIn">
              <div class="vg-maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60650.760503601006!2d74.54919214070942!3d18.178993107640455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a03bdb59287f%3A0x36e4fb47fb8d8a9d!2sBaramati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1706940480699!5m2!1sen!2sin" width="1000" height="450" style={{border:'0',marginLeft:"100px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div class="col-lg-5">
              <form class="vg-contact-form">
                <div class="form-row">
                  <div class="col-12 mt-3 wow fadeInUp">
                    <input
                      class="form-control"
                      type="text"
                      name="Name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="col-6 mt-3 wow fadeInUp">
                    <input
                      class="form-control"
                      type="text"
                      name="Email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="col-6 mt-3 wow fadeInUp">
                    <input
                      class="form-control"
                      type="text"
                      name="Subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="col-12 mt-3 wow fadeInUp">
                    <textarea
                      class="form-control"
                      name="Message"
                      rows="6"
                      placeholder="Enter message here.."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-theme mt-3 wow fadeInUp ml-1"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Contact;
