import React from "react";

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
