import React from "react";
import MainLayout from "../layout/MainLayout";
import DoneIcon from "@mui/icons-material/Done";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import abtImage from "../../src/assets/images/bg_2.jpg";

export default function About() {
  return (
    <MainLayout>
      <div className="about-page">
        <div
          class="about-page-header"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.5)),url(${abtImage})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
        {/* ---first */}
        <div class="welcome-wrap">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6 order-2 order-lg-1">
                <div class="welcome-content">
                  <header class="entry-header">
                    <h2 class="entry-title">Welcome to our Charity</h2>
                  </header>
                  <div class="entry-content mt-5">
                    <p>
                      The organization was formed in 2005 with brilliant ideas
                      of getting The Youth and The young people together as to
                      really be the engine room of the society whilist they are
                      useful to themselves and contributing the social changes
                      and development to the society at large. At Kejibaus Youth
                      Development Initiative (KYDI), our work include but are not
                      limited to environmental, social, advocacy and human
                      rights work.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 order-1 order-lg-2">
                <img
                  src="images/xwelcome.jpg.pagespeed.ic.LXrOlcwqMA.jpg"
                  alt="welcome"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="welcome-wrap" style={{ background: "#f2f2f2" }}>
          <div class="container">
            <div class="row" style={{ alignItems: "center" }}>
              <div class="col-12 col-lg-6 order-2 order-lg-2">
                <div class="welcome-content">
                  <header class="entry-header">
                    <h2 class="entry-title-new">We work with our partner to</h2>
                  </header>
                  <div class="entry-content mt-5">
                    <ul>
                      <li>
                        <DoneIcon className="done" />
                        Help eradicate Africa of preventable diseases and zero
                        hunger
                      </li>
                      <li>
                        <DoneIcon className="done" />
                        Promote gender equality, addressing socio-economic and
                        health concerns of the people in rural areas and other
                        poor communities
                      </li>
                      <li>
                        <DoneIcon className="done" />
                        Look after the ageing population, improving the welfare
                        of the disadvantaged and nurturing the youth.
                      </li>
                      <li>
                        <DoneIcon className="done" />
                        Build sustainable practices to help the environment and
                        awareness on climate change
                      </li>
                      <li>
                        <DoneIcon className="done" />
                        Educate people about the effects of HIV/AIDS, emerging
                        and tropical diseases, and other global health issues.
                        And we operating across the states in Nigeria.
                      </li>
                    </ul>
                    <p>
                      Since 2012, we have gained the support of people all
                      across the world and in particular, the United Nations.
                      Kejibaus Youth Development Initiative (KYDI) was granted Special
                      Consultative Status with the Economic and Social Council
                      (ECOSOC) of the United Nations in 2012. After being
                      nominated as an observer organization to the United
                      Nations Framework Convention on Climate Change (UNFCCC)
                      2013 , our vision continues to be fulfilled.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 order-1 order-lg-1">
                <img
                  src="images/xwelcome.jpg.pagespeed.ic.LXrOlcwqMA.jpg"
                  alt="welcome"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="welcome-wrap">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6 order-2 order-lg-2 pmxh">
                <h1>INTERNATIONAL AFFILIATED ORGANIZATIONS</h1>
                <ul>
                  <li>
                    <DoneIcon className="done" />
                    United Nations Framework Convention on Climate Change,
                    UNFCCC – 2013
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> World Bank Civil Society –
                    2012
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> IFY Climate Change Foundation
                    Canada – 2019
                  </li>
                  <li>
                    <DoneIcon className="done" /> United Nations Convection to
                    Combat Desertification, UNCCD – 2017
                  </li>
                  <li>
                    <DoneIcon className="done" /> The Global Energy
                    Interconnection Development and Cooperation Organization,
                    GEIDCO – 2018
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Canadian International Global
                    Partner – 2017
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Africa Development Bank CSO –
                    2015
                  </li>
                  <li>
                    <DoneIcon className="done" /> The Global Network of Civil
                    Society Organisations for Disaster Reduction 2015
                  </li>
                </ul>
              </div>
              <div class="col-12 col-lg-6 order-1 order-lg-1 pmxh">
                <h1>LOCAL AFFILIATED ORGANIZATION​S</h1>
                <ul>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Federal Ministry of
                    Environment, Nigeria – 2017
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Diamond Youth Team 2017
                  </li>
                  <li>
                    <DoneIcon className="done" /> Tinws Medical Diagnostics and
                    Research Laboratories, EbeLab – 2020
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Heorg International – 2019
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-stats">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="circular-progress-bar">
                <CircularProgressbar value={83} text={`${83}%`} />
                <h3 class="entry-title">Hard Work</h3>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="circular-progress-bar">
                <CircularProgressbar value={100} text={`${100}%`} />
                <h3 class="entry-title">Pure Love</h3>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="circular-progress-bar">
                <CircularProgressbar value={75} text={`${75}%`} />
                <h3 class="entry-title">Smart Ideas</h3>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="circular-progress-bar">
                <CircularProgressbar value={65} text={`${65}%`} />
                <h3 class="entry-title">Good Decisions</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-testimonial">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-5">
              <div class="testimonial-cont">
                <div class="entry-content">
                  <p>
                    We love to help all the children that have problems in the
                    world. After 15 years we have many goals achieved.
                  </p>
                </div>
                <div class="entry-footer d-flex flex-wrap align-items-center mt-5">
                  <img src="images/img_2.jpg" alt="" />
                  <h4>
                    Maria Williams, <span>Volunteer</span>
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 offset-lg-2 col-lg-5">
              <div class="testimonial-cont">
                <div class="entry-content">
                  <p>
                    We love to help all the children that have problems in the
                    world. After 15 years we have many goals achieved.
                  </p>
                </div>
                <div class="entry-footer d-flex flex-wrap align-items-center mt-5">
                  <img src="images/img_1.jpg" alt="" />
                  <h4>
                    Cristian James, <span>Volunteer</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="help-us">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <h2>Help us so we can help others</h2>
              <a class="btn orange-border" href="#">
                Donate now
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
