import React from "react";
import Header from "./Header";

const Home = () => {
  let banner_image1 =
    "https://e0.pxfuel.com/wallpapers/105/616/desktop-wallpaper-programming-background-funny-coding.jpg";
  return (
    <>
      <div className="banner_content">
        <img src={banner_image1} alt="" />

        <div className="text_overlay">
          <h1>I'm Yash Jadhav</h1>
          <p> Web developer</p>
        </div>
      </div>


      {/* Aboute */}
      <div class="vg-page page-about" id="about">
        <div>
          <h2 className="aboutText text-center">About Me</h2>
        </div>

        <div class="container py-4">
          <div class="row">
            <div class="col-lg-4 py-3">
              <div class="img-place wow fadeInUp">
                <img src="assets/img/YashPorfolioDp.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1 wow fadeInRight">
              <h1 class="fw-light">Yash Jadhav</h1>
              <h5 class="fg-theme mb-3">Web Designer</h5>
              <p class="text-muted">
                Seeking a challenging position in a reputed organization where I
                can learn new skills, expand my knowledge, and leverage my
                learnings.
              </p>
              <ul class="theme-list">
                <li>
                  <b>From:</b> Barmati, Maharashtra, India
                </li>
                <li>
                  <b>Lives In:</b> Pune, India
                </li>
                <li>
                  <b>Age:</b> 25
                </li>
                <li>
                  <b>Gender:</b> Male
                </li>
              </ul>
              <button class="btn btn-theme-outline">Download CV</button>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div>
            <h2 className="aboutText text-center">Skills</h2>
          </div>
          <div class="row py-4">
            <div class="col-md-6">
              <div class="px-lg-3">
                <h4 class="wow fadeInUp">Coding skills</h4>
                <div class="progress-wrapper wow fadeInUp">
                  <span class="caption">JavaScript</span>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      //   style="width: 86%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
                <div class="progress-wrapper wow fadeInUp">
                  <span class="caption">ReactJs</span>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      //   style="width: 80%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                </div>
                <div class="progress-wrapper wow fadeInUp">
                  <span class="caption">HTML + CSS</span>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "85%" }}
                      //   style="width: 100%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div class="progress-wrapper wow fadeInUp">
                  <span class="caption">Boostrap</span>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      //   style="width: 90%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="px-lg-3">
                <h4 class="wow fadeInUp">Design Skills</h4>
                <div class="progress-wrapper wow fadeInUp">
                  <span class="caption">UI / UX Design</span>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
                <div class="progress-wrapper wow fadeInUp">
                  <span class="caption">Web Design</span>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container pt-5">
          <div class="row">
            <div class="col-md-6 wow fadeInRight">
              <h2 class="fw-normal">Education</h2>
              <ul class="timeline mt-4 pr-md-5">
                <li>
                  <div class="title">2023</div>
                  <div class="details">
                    <h5>Bachelor of Engineering (Information Technology)</h5>
                    <small class="fg-theme">
                      Savitribai Phule Pune University
                    </small>
                    <p>
                      CGPA: 9.25 <br />
                      College: APCOER, Parvati, Pune-411042
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">2019</div>
                  <div class="details">
                    <h5>Diploma in Information Technology</h5>
                    <small class="fg-theme">MSBTE</small>
                    <p>
                      Percentage: 67.14 <br />
                      College: SVPM's ITE Malegaon(BK), Baramari, Pune - 413102
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6 wow fadeInRight" data-wow-delay="200ms">
              <h2 class="fw-normal">Experience</h2>
              <ul class="timeline mt-4 pr-md-5">
                <li>
                  <div class="title">2023 - Current</div>
                  <div class="details">
                    <h5>Ajspire Technology Pvt. Ltd</h5>
                    <small class="fg-theme">Front End Web Develeoper</small>
                    <p>
                      Currently working as Fronend Web Developer on{" "}
                      <b>ReactJs</b> and <b>JavaScript</b> from a last 6 months.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">2023</div>
                  <div class="details">
                    <h5>APCOER, Pune</h5>
                    <small class="fg-theme">Pune University</small>
                    <p>
                      Worked on Design and implementation of real time
                      monitoring of bridge by using sensor technology <br />
                      Software resources : <b>Java, C, Android, Arduino ide,
                      windows.</b>  <br />
                      Hardware resources: <b>Arduino Uno, Load sensor,
                      Bluetooth sensor, Water level depth detection</b>  <br />
                      Deigned a
                      system which monitors water level, heavy cracks as well as
                      overload on bridge, The aim of these project is to
                      minimize structural damage and protect life and property.
                      In these bridge safety and water level detection system we
                      are monitoring bridge conditions
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">2022</div>
                  <div class="details">
                    <h5>Angelsoft Technology Pvt. Ltd</h5>
                    <small class="fg-theme">Web Develeopment Intern</small>
                    <p>
                    Profiency worked on <b>Java, HTML, Css, JavaScript, ReactJs</b> 
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* My Work */}
      <div>
      <div class="vg-page page-portfolio" id="portfolio">
        <div class="container">
          <div class="text-center wow fadeInUp">
            <div class="badge badge-subhead">Portfolio</div>
          </div>
          <h1 class="text-center fw-normal wow fadeInUp">See my work</h1>
          <div
            class="filterable-button py-3 wow fadeInUp"
            data-toggle="selected"
          >
            <button class="btn btn-theme-outline selected" data-filter="*">
              All
            </button>
            <button class="btn btn-theme-outline" data-filter=".apps">
              Apps
            </button>
            <button class="btn btn-theme-outline" data-filter=".template">
              Template
            </button>
            <button class="btn btn-theme-outline" data-filter=".ios">
              IOS
            </button>
            <button class="btn btn-theme-outline" data-filter=".ui-ux">
              UI/UX
            </button>
            <button class="btn btn-theme-outline" data-filter=".graphic">
              Graphic
            </button>
            <button class="btn btn-theme-outline" data-filter=".wireframes">
              Wireframes
            </button>
          </div>

          <div class="gridder my-3">
            <div class="grid-item apps wow zoomIn">
              <div
                class="img-place"
                data-src="../assets/img/work/work-1.jpg"
                data-fancybox
                data-caption="<h5 class='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>"
              >
                <img src="../assets/img/work/work-1.jpg" alt="" />
                <div class="img-caption">
                  <h5 class="fg-theme">Mobile Travel App</h5>
                  <p>Travel, Discovery</p>
                </div>
              </div>
            </div>
            <div class="grid-item template wireframes wow zoomIn">
              <div
                class="img-place"
                data-src="../assets/img/work/work-2.jpg"
                data-fancybox
                data-caption="<h5 class='fg-theme'>Music App</h5> <p>Musics</p>"
              >
                <img src="../assets/img/work/work-2.jpg" alt="" />
                <div class="img-caption">
                  <h5 class="fg-theme">Music App</h5>
                  <p>Musics</p>
                </div>
              </div>
            </div>
            <div class="grid-item apps ios wow zoomIn">
              <div
                class="img-place"
                data-src="../assets/img/work/work-3.jpg"
                data-fancybox
                data-caption="<h5 class='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p>"
              >
                <img src="../assets/img/work/work-3.jpg" alt="" />
                <div class="img-caption">
                  <h5 class="fg-theme">Gaming Dashboard</h5>
                  <p>Games, Streaming</p>
                </div>
              </div>
            </div>
            <div class="grid-item graphic ui-ux wow zoomIn">
              <div
                class="img-place"
                data-src="../assets/img/work/work-4.jpg"
                data-fancybox
                data-caption="<h5 class='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p>"
              >
                <img src="../assets/img/work/work-4.jpg" alt="" />
                <div class="img-caption">
                  <h5 class="fg-theme">Drugs Delivery App</h5>
                  <p>Health, Drugs</p>
                </div>
              </div>
            </div>
            <div class="grid-item apps ios wow zoomIn">
              <div
                class="img-place"
                data-src="../assets/img/work/work-5.jpg"
                data-fancybox
                data-caption="<h5 class='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p>"
              >
                <img src="../assets/img/work/work-5.jpg" alt="" />
                <div class="img-caption">
                  <h5 class="fg-theme">Musics Discover</h5>
                  <p>Musics, Dashboard</p>
                </div>
              </div>
            </div>
            <div class="grid-item graphic ui-ux wireframes wow zoomIn">
              <div
                class="img-place"
                data-src="../assets/img/work/work-6.jpg"
                data-fancybox
                data-caption="<h5 class='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p>"
              >
                <img src="../assets/img/work/work-6.jpg" alt="" />
                <div class="img-caption">
                  <h5 class="fg-theme">Game Streaming</h5>
                  <p>Games, Streaming</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center wow fadeInUp">
            <a href="javascript:void(0)" class="btn btn-theme">
              Load More
            </a>
          </div>
        </div>
      </div>
    </div>


    {/* Contact */}
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
                <div
                  id="google-maps"
                  style={{ width: "100%", height: "100%" }}
                ></div>
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
    </>
  );
};

export default Home;
