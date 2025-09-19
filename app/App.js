'use client'

import Image from "next/image";
import VideoPlayer from "./components/VideoPlayer";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import PaymentForm from "./components/PaymentForm";
import Axios from "@/Helpers/Axios";

export default function App() {

  const searchParams = useSearchParams()

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: true,
    muted: true,
    preload: "auto",
    sources: [
      {
        src: "https://shop-xcelerate.s3.us-west-1.amazonaws.com/49landing.mp4",
        type: "video/mp4", // This is key for HLS
      },
    ],
  };

  function passElite() {

    const token = searchParams.get("token") // example: ?id=123

    if (!token) {
      return alert('Invalid token')
    }

    window.location.href = `https://lastoption.join7now.com?token=${token}`
  }

  const [secret, setSecret] = useState(null)

  const [loading, setLoading] = useState()

  async function createOrder() {

    const token = searchParams.get("token") // example: ?id=123

    if (!token) {
      return alert('Invalid token')
    }


    setLoading(true)

    const res = await Axios.post('/uxlm/create-order-intent', {
      amount: 49
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (res?.data?.ok) {

      // Cookies.set(res?.data?.intent?.client_secret)

      setSecret(res?.data?.intent?.client_secret)

    } else {

      console.log('Join form Error: ', res?.data?.msg)
      alert(res?.data?.msg)
    }

    setLoading(false)


  }


  // useEffect(() => {
  //   setSecret('sdfcsdfsdf')
  // }, [])

  return (
    <div>
      <div className="bgCover bg-fixed" />

      <div>
        <div>
          <div>
            <div
              id="nav-menu-popup"
              style={{ display: "none" }}
              className="hide"
            >
              <div className="nav-menu-body">
                <i className="close-menu fas fa-times" />
                <ul className="nav-menu"></ul>
              </div>
            </div>
          </div>

          <div
            id="preview-container"
            className="preview-container hl_page-preview--content"
          >
            <div>
              <div
                className="fullSection noBorder radius0 none c-section c-wrapper section-oVET9NFBB"
                style={{}}
                id="section-oVET9NFBB"
              >
                <div className="inner">
                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-jftL81Dpbk"
                    id="row-jftL81Dpbk"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-bPV-U0lnaMm"
                        id="col-bPV-U0lnaMm"
                      >
                        <div className="vertical inner">
                          <div
                            id="paragraph-4rKyR75LvUr"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-4rKyR75LvUr text-output cparagraph-4rKyR75LvUr noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  <strong>
                                    {" "}
                                    IMPORTANT: DO NOT CLOSE THIS WINDOW
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-o5UgRjlmZu"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-o5UgRjlmZu text-output cparagraph-o5UgRjlmZu noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  <strong>
                                    Your $7 Community access is confirmed — but
                                    before you go, here’s how to launch your
                                    first income stream today.
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="radius0 noBorder c-section c-wrapper section-5-NNN01hc-"
                style={{}}
                id="section-5-NNN01hc-"
              >
                <div className="inner">
                  <div
                    className="row-align-center noBorder radius0 c-row c-wrapper row-vSV_xqQrWQw"
                    id="row-vSV_xqQrWQw"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-We4OqCUbo1K"
                        id="col-We4OqCUbo1K"
                      >
                        <div className="vertical inner">
                          <div
                            id="heading-RUPWP83AMX"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-RUPWP83AMX text-output cheading-RUPWP83AMX noBorder radius0 animate__fadeInUp"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>
                                  <strong>CONGRATULATIONS </strong> on joining
                                  the $7 Community!{" "}
                                </h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-uPapw_yhPE"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-uPapw_yhPE text-output cparagraph-uPapw_yhPE noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  You’ve just taken a bold step toward financial
                                  freedom. Now, you face a choice: keep learning
                                  at your own pace… or stay a student AND become
                                  an Elite Affiliate — launching your own
                                  business today and earning 50% upfront, 50%
                                  monthly residuals, and 10% on your 2nd level.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="video-v4zG8tN44bW"
                            className="c-video c-wrapper video-v4zG8tN44bW"
                          >
                            <figure
                              className="video-container w-100 youtube figure cvideo-v4zG8tN44bW noBorder radius0"
                              data-v-9069ad15=""
                            >
                              <div data-v-9069ad15="" className="w-100">
                                {/* <div
                                  data-v-9069ad15=""
                                  className="iframe-container"
                                  style={{ paddingBottom: "56.25%" }}
                                >
                                  <p
                                    data-v-9069ad15=""
                                    className="video-icon"
                                  />
                                </div> */}
                                <VideoPlayer options={videoJsOptions} />
                              </div>
                            </figure>
                          </div>

                          <div
                            id="button-OcKUTnhFdub"
                            className="c-button c-wrapper button-OcKUTnhFdub desktop-only"
                          >
                            <button
                              onClick={createOrder}
                              data-animation-class=""
                              id="button-OcKUTnhFdub_btn"
                              style={{}}
                              className="cbutton-OcKUTnhFdub main-btn button-vp-10 btn-hp-25 noBorder radius0 w-full"
                              aria-label="YES, ADD THIS TO MY ORDER And get instant access"
                            >
                              <div
                                style={{}}
                                className="main-heading-group flex items-center justify-center"
                              >
                                {/* <div className="button-icon-start" /> */}
                                <div className="main-heading-button whitespace-nowrap">
                                  YES — Grandfather Me Into Elite at $49/month
                                  (Reg. $99)
                                </div>
                                <div className="button-icon-end" />
                              </div>
                              <div style={{}} className="text-xs font-sans">
                                <div className="sub-heading-button">
                                  Lock in lifetime pricing. Cancel anytime.
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "none",
                                  left: "50%",
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                                className="btn-loader-position"
                              >
                                <div
                                  style={{ display: "none" }}
                                  className="v-spinner"
                                >
                                  <div
                                    className="v-moon v-moon1"
                                    style={{
                                      height: 30,
                                      width: 30,
                                      borderRadius: "100%",
                                    }}
                                  >
                                    <div
                                      className="v-moon v-moon2"
                                      style={{
                                        height: "4.285714285714286px",
                                        width: "4.285714285714286px",
                                        borderRadius: "100%",
                                        top: "12.857142857142858px",
                                        backgroundColor: "rgb(255, 255, 255)",
                                      }}
                                    />
                                    <div
                                      className="v-moon v-moon3"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                        border:
                                          "4.285714285714286px solid rgb(255, 255, 255)",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div></div>
                          </div>

                          <div
                            id="button-MWIOmqbAiso"
                            className="c-button c-wrapper button-MWIOmqbAiso mobile-only"
                          >
                            <button
                              onClick={createOrder}
                              data-animation-class=""
                              id="button-MWIOmqbAiso_btn"
                              style={{}}
                              className="cbutton-MWIOmqbAiso main-btn button-vp-10 btn-hp-25 noBorder radius0"
                              aria-label="YES, ADD THIS TO MY ORDER And get instant access"
                            >
                              <div style={{}} className="main-heading-group">
                                <div className="button-icon-start" />
                                <div className="main-heading-button">
                                  YES, ADD THIS TO MY ORDER
                                </div>
                                <div className="button-icon-end" />
                              </div>
                              <div style={{}} className="text-xs font-sans">
                                <div className="sub-heading-button">
                                  And get instant access
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "none",
                                  left: "50%",
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                                className="btn-loader-position"
                              >
                                <div
                                  style={{ display: "none" }}
                                  className="v-spinner"
                                >
                                  <div
                                    className="v-moon v-moon1"
                                    style={{
                                      height: 30,
                                      width: 30,
                                      borderRadius: "100%",
                                    }}
                                  >
                                    <div
                                      className="v-moon v-moon2"
                                      style={{
                                        height: "4.285714285714286px",
                                        width: "4.285714285714286px",
                                        borderRadius: "100%",
                                        top: "12.857142857142858px",
                                        backgroundColor: "rgb(255, 255, 255)",
                                      }}
                                    />
                                    <div
                                      className="v-moon v-moon3"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                        border:
                                          "4.285714285714286px solid rgb(255, 255, 255)",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="hidden-section radius0 noBorder c-section c-wrapper section-OqhDFKDlTg"
                style={{}}
                id="section-OqhDFKDlTg"
              >
                <div
                  className="bg full-center bg-section-OqhDFKDlTg"
                  style={{
                    borderRadius: "-3px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                />

                <div className="inner">
                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-GqfuKfRAWhd"
                    id="row-GqfuKfRAWhd"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-UYVgJqiHhF2"
                        id="col-UYVgJqiHhF2"
                      >
                        <div className="vertical inner">
                          <div
                            id="heading-h2RNwP-yu86"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-h2RNwP-yu86 text-output cheading-h2RNwP-yu86 noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>
                                  Welcome to the Elite Builders Circle{" "}
                                  <strong>
                                    You’ve joined as a student in the $7
                                    Community. Smart move.
                                  </strong>
                                </h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-9Zfd0boRekj"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-9Zfd0boRekj text-output cheading-9Zfd0boRekj has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>Now, you can take the next step:</h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-EOGovkwqZP"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-EOGovkwqZP text-output cheading-EOGovkwqZP has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>
                                  Remain a student AND become an Affiliate —
                                  launching your own business while you learn.
                                </h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="bulletList-Y9CDcyAp2rY"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-Y9CDcyAp2rY text-output cbulletList-Y9CDcyAp2rY noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      <strong>Action-Taker Mindset: </strong>You
                                      don’t wait years, you launch today.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Growth Focused: </strong>You learn
                                      and earn — building skills and income
                                      together.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Results Driven: </strong>You’re
                                      paid every Friday — not “someday.”
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-CC3SnRPs3N"
                            className="c-image c-wrapper image-CC3SnRPs3N"
                          >
                            <div
                              style={{ cursor: "default" }}
                              className="image-container cimage-CC3SnRPs3N"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/commissions.jpeg"
                                    alt=""
                                    className="img-none img-border-none img-effects-none"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="sub-heading-biFIBgeiTyA"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-biFIBgeiTyA text-output csub-heading-biFIBgeiTyA noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <h2>
                                  <strong>
                                    Why Elite Membership Is Your Shortcut to
                                    Success
                                  </strong>
                                </h2>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-56K3Wd93JjI"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-56K3Wd93JjI text-output cheading-56K3Wd93JjI has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <p>
                                  Knowledge alone doesn’t create freedom. Elite
                                  bridges the gap — so you don’t just study
                                  business, you own one.<em> </em>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-hY61HjxIm1"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-hY61HjxIm1 text-output cheading-hY61HjxIm1 has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <p>
                                  Paid every Friday, direct deposit – Weekly
                                  Affiliate Mastermind calls
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="bulletList-FEfjKZAiYL"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-FEfjKZAiYL text-output cbulletList-FEfjKZAiYL noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    Done-for-you landing page and sales funnel
                                  </li>
                                  <li>Back office and commission tracker</li>
                                  <li>
                                    50% upfront commissions on every new
                                    Affiliate you refer
                                  </li>
                                  <li>
                                    50% monthly residual commissions every time
                                    they renew
                                  </li>
                                  <li>
                                    10% 2nd-level commissions — earn on your
                                    team’s referrals too
                                  </li>
                                  <li>
                                    <strong style={{ color: "black" }}>
                                      Automatic Ad Co-op:
                                    </strong>{" "}
                                    we run ads and send leads directly to your
                                    funnel
                                  </li>
                                  <li>
                                    <strong style={{ color: "black" }}>
                                      Juno: AI Marketing Mentor
                                    </strong>{" "}
                                    your AI mentor and coach (Elite only)
                                  </li>
                                  <li>
                                    <strong style={{ color: "black" }}>
                                      Travel engine:
                                    </strong>{" "}
                                    savings at 1M+ locations worldwide
                                  </li>
                                  <li>
                                    <strong style={{ color: "black" }}>
                                      5% Global Bonus Pool:
                                    </strong>{" "}
                                    profit-share style, earn a small piece of
                                    every member
                                  </li>
                                  <li>
                                    <strong style={{ color: "black" }}>
                                      Affiliate Marketplace:
                                    </strong>{" "}
                                    create your own products, earn 30% when
                                    others sell yours, and 50% when you sell
                                    theirs
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-56K3Wd93JjI"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-56K3Wd93JjI text-output cheading-56K3Wd93JjI has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <p>
                                  If you stay only in the $7 Community, you’ll
                                  keep learning — but you won’t earn. Every week
                                  you wait is a week you could have gotten paid.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-56K3Wd93JjI"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-56K3Wd93JjI text-output cheading-56K3Wd93JjI has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <p>
                                  Don’t let “someday” push your freedom further
                                  away.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-56K3Wd93JjI"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-56K3Wd93JjI text-output cheading-56K3Wd93JjI has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <p>
                                  Most online marketers get stuck trying to get
                                  more eyes on their offer or product. Our
                                  Affiliate program not only teaches you how to
                                  run small, inexpensive ads to supplement your
                                  organic marketing — we actually run our own
                                  ads and send those leads and traffic directly
                                  to you.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-56K3Wd93JjI"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-56K3Wd93JjI text-output cheading-56K3Wd93JjI has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <p>
                                  This is what makes Elite different: you don’t
                                  just learn theory, you build with real
                                  prospects and real commissions from day one.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="hidden-section radius0 noBorder c-section c-wrapper section-ctbEV7xADL"
                style={{}}
                id="section-ctbEV7xADL"
              >
                <div className="inner">
                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-67PiQpz0f07"
                    id="row-67PiQpz0f07"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-SPD_y0M3-eT"
                        id="col-SPD_y0M3-eT"
                      >
                        <div className="vertical inner">
                          <div
                            id="heading-SmmSIMUIc5I"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-SmmSIMUIc5I text-output cheading-SmmSIMUIc5I noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>4 Core Components</h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-E9GNuLtD6At"
                            className="c-image c-wrapper image-E9GNuLtD6At"
                          >
                            <div
                              style={{ cursor: "default" }}
                              className="image-container cimage-E9GNuLtD6At"
                            >
                              {/* <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/ad6717b3-3df4-422c-9cb2-9a34013b7030.png"
                                    alt=""
                                    className="img-none img-border-none img-effects-none"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="grid md:grid-cols-2 gap-y-[120px] xs:gap-y-[185px] pt-[125px] pb-[20px] px-2.5">
                    <div
                      className="c-column c-wrapper col-rvTl1aCZlso"
                      id="col-rvTl1aCZlso"
                      style={{ width: "100%" }}
                    >
                      <div className="borderFull radius10 bg bgCover vertical inner">
                        <div
                          id="image-jU-TBbCpmbf"
                          className="c-image c-wrapper image-jU-TBbCpmbf"
                        >
                          <div
                            style={{ cursor: "pointer" }}
                            className="image-container cimage-jU-TBbCpmbf"
                          >
                            <div>
                              <div>
                                <Image
                                  width={200}
                                  height={200}
                                  style={{}}
                                  src="/system.jpeg"
                                  alt=""
                                  className="radius0"
                                  data-animation-class=""
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="heading-5PoMfS3yrky"
                          className="c-heading c-wrapper"
                        >
                          <div
                            className="heading-5PoMfS3yrky text-output cheading-5PoMfS3yrky noBorder radius0"
                            data-animation-class=""
                          >
                            <div>
                              <p>Your Done-for-You Business System </p>
                            </div>
                          </div>
                        </div>

                        <div
                          id="sub-heading-oAouIfaAr64"
                          className="c-sub-heading c-wrapper"
                        >
                          <div
                            className="sub-heading-oAouIfaAr64 text-output csub-heading-oAouIfaAr64 noBorder radius0 none"
                            data-animation-class="animate__animated animate__fadeInUp"
                          >
                            {/* <div>
                                <h2>($997 Value)</h2>
                              </div> */}
                          </div>
                        </div>

                        <div
                          id="bulletList-f1RlxBj9f70"
                          className="c-bullet-list c-wrapper"
                        >
                          <div
                            className="bulletList-f1RlxBj9f70 text-output cbulletList-f1RlxBj9f70 noBorder radius0"
                            data-animation-class=""
                          >
                            <div>
                              <ul>
                                <li>
                                  <p>
                                    Launch instantly with your own landing
                                    page
                                  </p>
                                </li>
                                <li>
                                  <p> Funnel and back office</p>
                                </li>
                                <li>
                                  <p>No tech required</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="c-column c-wrapper col-MEpPIjs0JDq"
                      id="col-MEpPIjs0JDq"
                      style={{ width: "100%" }}
                    >
                      <div className="borderFull radius10 bg bgCover vertical inner">
                        <div
                          id="image-h5bmMC9SXhq"
                          className="c-image c-wrapper image-h5bmMC9SXhq"
                        >
                          <div
                            style={{ cursor: "pointer" }}
                            className="image-container cimage-h5bmMC9SXhq"
                          >
                            <div>
                              <div>
                                <Image
                                  width={200}
                                  height={200}
                                  style={{}}
                                  src="/mastermind.jpeg"
                                  alt=""
                                  className="radius0"
                                  data-animation-class=""
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="heading-1oonI8toa0G"
                          className="c-heading c-wrapper"
                        >
                          <div
                            className="heading-1oonI8toa0G text-output cheading-1oonI8toa0G noBorder radius0"
                            data-animation-class=""
                          >
                            <div>
                              <h1>Weekly Affiliate Mastermind </h1>
                            </div>
                          </div>
                        </div>

                        <div
                          id="sub-heading-gl60i7e9DGL"
                          className="c-sub-heading c-wrapper"
                        >
                          <div
                            className="sub-heading-gl60i7e9DGL text-output csub-heading-gl60i7e9DGL noBorder radius0 none"
                            data-animation-class="animate__animated animate__fadeInUp"
                          >
                            {/* <div>
                                <h2>($497 Value)</h2>
                              </div> */}
                          </div>
                        </div>

                        <div
                          id="bulletList-RDTXSOqQSxh"
                          className="c-bullet-list c-wrapper"
                        >
                          <div
                            className="bulletList-RDTXSOqQSxh text-output cbulletList-RDTXSOqQSxh noBorder radius0"
                            data-animation-class=""
                          >
                            <div>
                              <ul>
                                <li>
                                  <p>Live group coaching</p>
                                </li>
                                <li>
                                  <p>Accountability </p>
                                </li>
                                <li>
                                  <p>You never get stuck</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="c-column c-wrapper col-F3Ea_ff0Im4"
                      id="col-F3Ea_ff0Im4"
                      style={{ width: "100%" }}
                    >
                      <div className="borderFull radius10 bg bgCover vertical inner">
                        <div
                          id="image-S8JW0YgH5dS"
                          className="c-image c-wrapper image-S8JW0YgH5dS"
                        >
                          <div
                            style={{ cursor: "pointer" }}
                            className="image-container cimage-S8JW0YgH5dS"
                          >
                            <div>
                              <div>
                                <Image
                                  width={200}
                                  height={200}
                                  style={{}}
                                  src="/coop.jpeg"
                                  alt=""
                                  className="radius0"
                                  data-animation-class=""
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="heading-kgePGKj4rf-"
                          className="c-heading c-wrapper"
                        >
                          <div
                            className="heading-kgePGKj4rf- text-output cheading-kgePGKj4rf- noBorder radius0"
                            data-animation-class=""
                          >
                            <div>
                              <h1>Ad Co-Op Traffic </h1>
                            </div>
                          </div>
                        </div>

                        <div
                          id="sub-heading-eoy4WKeTUct"
                          className="c-sub-heading c-wrapper"
                        >
                          <div
                            className="sub-heading-eoy4WKeTUct text-output csub-heading-eoy4WKeTUct noBorder radius0 none"
                            data-animation-class="animate__animated animate__fadeInUp"
                          >
                            {/* <div>
                                <h2>($997 Value)</h2>
                              </div> */}
                          </div>
                        </div>

                        <div
                          id="bulletList-X5fVZ6wii5Y"
                          className="c-bullet-list c-wrapper"
                        >
                          <div
                            className="bulletList-X5fVZ6wii5Y text-output cbulletList-X5fVZ6wii5Y noBorder radius0"
                            data-animation-class=""
                          >
                            <div>
                              <ul>
                                <li>
                                  <p>We run ads</p>
                                </li>
                                <li>
                                  <p>
                                    {" "}
                                    We send prospects straight to your funnel.
                                  </p>
                                </li>
                                <li>
                                  <p> Solves the #1 problem: Traffic.</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="c-column c-wrapper col-WRsJIxagMH"
                      id="col-WRsJIxagMH"
                      style={{ width: "100%" }}
                    >
                      <div className="borderFull radius10 bg bgCover vertical inner">
                        <div
                          id="image-RKZzdI6W6Q"
                          className="c-image c-wrapper image-RKZzdI6W6Q"
                        >
                          <div
                            style={{ cursor: "pointer" }}
                            className="image-container cimage-RKZzdI6W6Q"
                          >
                            <div>
                              <div>
                                <Image
                                  width={200}
                                  height={200}
                                  style={{}}
                                  src="/zuno.png"
                                  alt=""
                                  className="radius0"
                                  data-animation-class=""
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="heading-kzd_73fQv7"
                          className="c-heading c-wrapper"
                        >
                          <div
                            className="text-left heading-kzd_73fQv7 text-output cheading-kzd_73fQv7 noBorder radius0"
                            data-animation-class=""
                          >
                            <div>
                              <h1>Juno: AI Marketing Mentor</h1>
                            </div>
                          </div>
                        </div>

                        <div
                          id="sub-heading-vWgfxAQQZA"
                          className="c-sub-heading c-wrapper"
                        >
                          <div
                            className="sub-heading-vWgfxAQQZA text-output csub-heading-vWgfxAQQZA noBorder radius0 none"
                            data-animation-class="animate__animated animate__fadeInUp"
                          >
                            {/* <div>
                                <h2>($1,497 Value)</h2>
                              </div> */}
                          </div>
                        </div>

                        <div
                          id="bulletList-kSNrHZQlIu"
                          className="c-bullet-list c-wrapper"
                        >
                          <div
                            className="bulletList-kSNrHZQlIu text-output cbulletList-kSNrHZQlIu noBorder radius0"
                            data-animation-class=""
                          >
                            <div>
                              <ul>
                                <li>
                                  <p>Learn faster, pass quizzes</p>
                                </li>
                                <li>
                                  <p>Unlock cash codes</p>
                                </li>
                                <li>
                                  <p>Qualify for weekly prizes</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

              <div
                className="hidden-section radius0 noBorder c-section c-wrapper section-U_-eTnfjrO"
                style={{}}
                id="section-U_-eTnfjrO"
              >
                <div
                  className="bg bgCover bg-section-U_-eTnfjrO"
                  style={{
                    borderRadius: "-3px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                />

                <div className="inner">
                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-K8-nw8h-j_v"
                    id="row-K8-nw8h-j_v"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-Y8XJaUSF7B5"
                        id="col-Y8XJaUSF7B5"
                      >
                        <div className="vertical inner">
                          <div
                            id="heading-njsD7lvI9WO"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-njsD7lvI9WO text-output cheading-njsD7lvI9WO noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>
                                  Fast‑Action <strong>Bonuses</strong>
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-UxHxg7O4G3l"
                    id="row-UxHxg7O4G3l"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-E163JHs37rT"
                        id="col-E163JHs37rT"
                      >
                        <div className="vertical inner">
                          <div
                            id="image-xzs0Nm5QWJr"
                            className="c-image c-wrapper image-xzs0Nm5QWJr"
                          >
                            <div
                              style={{ cursor: "default" }}
                              className="image-container cimage-xzs0Nm5QWJr"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/5percent.png"
                                    alt=""
                                    className="img-none img-border-none img-effects-none"
                                    data-animation-class="animate__animated animate__fadeInUp"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="noBorder radius0 none c-column c-wrapper col-OcwM_t6-lF1"
                        id="col-OcwM_t6-lF1"
                      >
                        <div className="vertical inner">
                          <div
                            id="sub-heading-XA6V_O7l8Bz"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-XA6V_O7l8Bz text-output csub-heading-XA6V_O7l8Bz noBorder radius0 none"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h2>Bonus #1</h2>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-XWJCEvMyyIr"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-XWJCEvMyyIr text-output cheading-XWJCEvMyyIr noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>5% Global Bonus Pool</h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="sub-heading-Cyyv-Pc0BX-"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-Cyyv-Pc0BX- text-output csub-heading-Cyyv-Pc0BX- noBorder radius0 none"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              {/* <div>
                                <h2>(Value: Priceless)</h2>
                              </div> */}
                            </div>
                          </div>

                          <div
                            id="bulletList-VfHt8Is3xJH"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-VfHt8Is3xJH text-output cbulletList-VfHt8Is3xJH noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      Earn a share of the community’s growth
                                      worldwide.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-_ud5bWKBQZ1"
                    id="row-_ud5bWKBQZ1"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-ImvO1Hn6OBs"
                        id="col-ImvO1Hn6OBs"
                      >
                        <div className="vertical inner">
                          <div
                            id="image-KDok_TYp070"
                            className="c-image c-wrapper image-KDok_TYp070"
                          >
                            <div
                              style={{ cursor: "default" }}
                              className="image-container cimage-KDok_TYp070"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/social.png"
                                    alt=""
                                    className="img-none img-border-none img-effects-none"
                                    data-animation-class="animate__animated animate__fadeInUp"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="noBorder radius0 none c-column c-wrapper col-71xwMhtD4SA"
                        id="col-71xwMhtD4SA"
                      >
                        <div className="vertical inner">
                          <div
                            id="sub-heading-gYYyoI26PG8"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-gYYyoI26PG8 text-output csub-heading-gYYyoI26PG8 noBorder radius0 none"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h2>Bonus #2</h2>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-cYusQJTICsw"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-cYusQJTICsw text-output cheading-cYusQJTICsw noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>Affiliate Marketplace Access</h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="sub-heading-dvoGBNm_3yd"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-dvoGBNm_3yd text-output csub-heading-dvoGBNm_3yd noBorder radius0 none"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              {/* <div>
                                <h2>($997 Value)</h2>
                              </div> */}
                            </div>
                          </div>

                          <div
                            id="bulletList-VKo4gNwUvcl"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-VKo4gNwUvcl text-output cbulletList-VKo4gNwUvcl noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      Create your own digital products. Earn 30%
                                      when others sell yours, 50% when you sell
                                      theirs.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-PURMeYgHE6O"
                    id="row-PURMeYgHE6O"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-LDkA0w9p9o_"
                        id="col-LDkA0w9p9o_"
                      >
                        <div className="vertical inner">
                          <div
                            id="image-6bQjZrMtaJ6"
                            className="c-image c-wrapper image-6bQjZrMtaJ6"
                          >
                            <div
                              style={{ cursor: "default" }}
                              className="image-container cimage-6bQjZrMtaJ6"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/discount.png"
                                    alt=""
                                    className="img-none img-border-none img-effects-none"
                                    data-animation-class="animate__animated animate__fadeInUp"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="noBorder radius0 none c-column c-wrapper col-_jcqJLV1OqD"
                        id="col-_jcqJLV1OqD"
                      >
                        <div className="vertical inner">
                          <div
                            id="sub-heading--mziMDZHSAC"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading--mziMDZHSAC text-output csub-heading--mziMDZHSAC noBorder radius0 none"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h2>Bonus #3</h2>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-ynpFCsycIeM"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-ynpFCsycIeM text-output cheading-ynpFCsycIeM noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>Travel Engine Savings</h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="sub-heading-1M-zHxRa6ol"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-1M-zHxRa6ol text-output csub-heading-1M-zHxRa6ol noBorder radius0 none"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              {/* <div>
                                <h2> ($500+ Value)</h2>
                              </div> */}
                            </div>
                          </div>

                          <div
                            id="bulletList-nxqpgnTvbzP"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-nxqpgnTvbzP text-output cbulletList-nxqpgnTvbzP noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      {" "}
                                      Save on hotels, flights, and more at 1M+
                                      locations.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-idArpeN8MSS"
                    id="row-idArpeN8MSS"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-hEOBVvpCirf"
                        id="col-hEOBVvpCirf"
                      >
                        <div className="vertical inner">
                          <div
                            id="sub-heading-dUfpqF_9vMT"
                            className="c-sub-heading c-wrapper"
                          >
                    
                          </div>

                          <div
                            id="sub-heading-m2t0pmQXePu"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-m2t0pmQXePu text-output csub-heading-m2t0pmQXePu noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  <strong>Normal Price: $99/month</strong>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="sub-heading-eQvKkFWqcHu"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-eQvKkFWqcHu text-output csub-heading-eQvKkFWqcHu noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>TODAY'S GRANDFATHERED PRICE:</p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-3pLytwSqWR5"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-3pLytwSqWR5 text-output cheading-3pLytwSqWR5 noBorder radius0 none"
                              data-animation-class=""
                            >
                              {/* <div>
                                <h1>$49/month </h1>
                              </div> */}
                            </div>
                          </div>

                          <div
                            id="sub-heading-3Qq2Au5VLke"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-3Qq2Au5VLke text-output csub-heading-3Qq2Au5VLke noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  <strong>Lock this in for life.</strong>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="button-xmPuptC6U7"
                            className="c-button c-wrapper button-xmPuptC6U7"
                          >
                            <button
                              onClick={createOrder}
                              data-animation-class=""
                              id="button-xmPuptC6U7_btn"
                              style={{}}
                              className="cbutton-xmPuptC6U7 main-btn button-vp-10 btn-hp-25 noBorder radius0"
                              aria-label="YES, ADD THIS TO MY ORDER And get instant access"
                            >
                              <div style={{}} className="main-heading-group">
                                <div className="button-icon-start" />
                                <div className="main-heading-button">
                                  YES — Grandfather Me Into Elite at $49/month
                                  (Reg. $99)
                                </div>
                                <div className="button-icon-end" />
                              </div>
                              <div style={{}} className="text-xs font-sans">
                                <div className="sub-heading-button">
                                  Instant access. Cancel anytime.
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "none",
                                  left: "50%",
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                                className="btn-loader-position"
                              >
                                <div
                                  style={{ display: "none" }}
                                  className="v-spinner"
                                >
                                  <div
                                    className="v-moon v-moon1"
                                    style={{
                                      height: 30,
                                      width: 30,
                                      borderRadius: "100%",
                                    }}
                                  >
                                    <div
                                      className="v-moon v-moon2"
                                      style={{
                                        height: "4.285714285714286px",
                                        width: "4.285714285714286px",
                                        borderRadius: "100%",
                                        top: "12.857142857142858px",
                                        backgroundColor: "rgb(255, 255, 255)",
                                      }}
                                    />
                                    <div
                                      className="v-moon v-moon3"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                        border:
                                          "4.285714285714286px solid rgb(255, 255, 255)",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div></div>
                          </div>

                          <div
                            id="paragraph-a3emZR5awT"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-a3emZR5awT text-output cparagraph-a3emZR5awT np noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  <a
                                    target="_self"
                                    rel="noopener noreferrer"
                                    onClick={passElite}
                                  >
                                    No thanks — I’ll stay only in the $7
                                    Community and
                                    <em> </em>
                                    miss out on Elite.
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 md:px-4 mt-10">
                            <div className="bg-[#fff] flex flex-col justify-between gap-2 p-4 border-l-4 border-[#00C785]">
                              <div id="heading-56K3Wd93JjI" className="c-heading c-wrapper">
                                <div
                                  className="heading-56K3Wd93JjI text-output cheading-56K3Wd93JjI has-color noBorder radius0"
                                  data-animation-class="animate__animated animate__fadeInUp"
                                >
                                  <div>
                                    <p className="italic">
                                      To be able to step into my own online business
                                      from day 1 was incredible. I'm learning and
                                      earning and helping other stay-at-home moms do the
                                      same.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <p className="w-fit self-end" style={{ color: "#00C785" }}>
                                — Sarah F
                              </p>
                            </div>
                            <div className="bg-[#fff] flex flex-col justify-between gap-2 p-4 border-l-4 border-[#00C785]" >
                              <div id="heading-56K3Wd93JjI" className="c-heading c-wrapper">
                                <div
                                  className="heading-56K3Wd93JjI text-output cheading-56K3Wd93JjI has-color noBorder radius0"
                                  data-animation-class="animate__animated animate__fadeInUp"
                                >
                                  <div>
                                    <p className="italic">
                                      I have never seen a program like this where they
                                      actually help you build your business by sending
                                      leads and traffic to your landing page. That extra
                                      boost makes a world of difference
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <p className="w-fit self-end" style={{ color: "#00C785" }}>
                                — Timothy H
                              </p>
                            </div>
                            <div className="bg-[#fff] flex flex-col justify-between gap-2 p-4 border-l-4 border-[#00C785]">
                              <div id="heading-56K3Wd93JjI" className="c-heading c-wrapper">
                                <div
                                  className="heading-56K3Wd93JjI text-output cheading-56K3Wd93JjI has-color noBorder radius0"
                                  data-animation-class="animate__animated animate__fadeInUp"
                                >
                                  <div>
                                    <p className="italic">
                                      You get so excited about the trainings that it's
                                      impossible not to tell everyone about it. I made
                                      $294 in 3 days just sharing what I learned the day
                                      before. This is so simple
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <p className="w-fit self-end" style={{ color: "#00C785" }}>
                                — Wanda L
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="hidden-section radius0 noBorder c-section c-wrapper section-ctbEV7xADL">
                <div className="inner">
                  
                </div>
              </div> */}

              <div
                className="hidden-section fullSection noBorder radius0 none c-section c-wrapper section-n5ZxpvHdCh"
                style={{}}
                id="section-n5ZxpvHdCh"
              >
                <div className="inner">
                  <div
                    className="row-align-center noBorder radius0 c-row c-wrapper row-Wm-8-oIcn_Qd"
                    id="row-Wm-8-oIcn_Qd"
                  >
                    <div className="inner">
                      <div
                        className="parent-sticky noBorder radius0 none c-column c-wrapper col-W3Cyn2imdb59"
                        id="col-W3Cyn2imdb59"
                      >
                        <div className="vertical inner">
                          <div
                            id="heading-Ss1rpnp3v2Z-"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-Ss1rpnp3v2Z- text-output cheading-Ss1rpnp3v2Z- noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>
                                  <strong>WARNING!</strong>
                                </h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-qJIUobPYO93R"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-qJIUobPYO93R text-output cheading-qJIUobPYO93R has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>
                                  Grandfather Pricing Ends When You Leave This
                                  Page
                                </h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-Gx_Y8f7NgrNx"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-Gx_Y8f7NgrNx text-output cparagraph-Gx_Y8f7NgrNx noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>Here’s why this is urgent: </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="bulletList-tExaPWK3vo"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-tExaPWK3vo text-output cbulletList-tExaPWK3vo borderFull radius10 none"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>Normal price is $99/month.</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            id="bulletList-qzdomXkzyR"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-qzdomXkzyR text-output cbulletList-qzdomXkzyR borderFull radius10 none"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      {" "}
                                      Right now you lock in $49/month for life.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            id="bulletList-WyW7XPeJiU"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-WyW7XPeJiU text-output cbulletList-WyW7XPeJiU borderFull radius10 none"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      {" "}
                                      Once you leave, this offer may not be
                                      available again.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            id="bulletList-jrCUW_pEGC"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-jrCUW_pEGC text-output cbulletList-jrCUW_pEGC borderFull radius10 none"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      You’ll miss your chance to start earning
                                      50% commissions this week.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            id="bulletList-920pBIeorg"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-920pBIeorg text-output cbulletList-920pBIeorg borderFull radius10 none"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      {" "}
                                      You’ll delay building residual income that
                                      pays you every month.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            id="bulletList-48_vgGxhFm"
                            className="c-bullet-list c-wrapper"
                          >
                            <div
                              className="bulletList-48_vgGxhFm text-output cbulletList-48_vgGxhFm borderFull radius10 none"
                              data-animation-class=""
                            >
                              <div>
                                <ul>
                                  <li>
                                    <p>
                                      {" "}
                                      You’ll forfeit your share of the Global
                                      Bonus Pool starting today.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="parent-sticky noBorder radius0 none c-column c-wrapper col-gt8C-7SuUBoG"
                        id="col-gt8C-7SuUBoG"
                      >
                        <div className="vertical inner">
                          <div
                            id="heading-FjuGv3NXVCwD"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-FjuGv3NXVCwD text-output cheading-FjuGv3NXVCwD noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <p>Now for only $XX</p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-a5e8zT3HYpsJ"
                            className="c-image c-wrapper image-a5e8zT3HYpsJ"
                          >
                            <div
                              style={{ cursor: "pointer" }}
                              className="image-container cimage-a5e8zT3HYpsJ"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/ad6717b3-3df4-422c-9cb2-9a34013b7030.png"
                                    alt=""
                                    className="radius0"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="sub-heading-TqC_k0k-mG2t"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-TqC_k0k-mG2t text-output csub-heading-TqC_k0k-mG2t noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                {/* <h2>
                                  <strong>YOU’RE SAVING </strong>$X,XXX
                                  <strong>+ TODAY</strong>
                                </h2> */}
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-ogiPYt45mTyM"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-ogiPYt45mTyM text-output cparagraph-ogiPYt45mTyM noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                {/* <p>
                                  Join [Insert Product Name] for
                                  $[Product&nbsp;Price]
                                </p> */}
                              </div>
                            </div>
                          </div>

                          <div
                            id="button-uZvBSt_g0dq-"
                            className="c-button c-wrapper button-uZvBSt_g0dq-"
                          >
                            <button
                              onClick={createOrder}
                              data-animation-class=""
                              id="button-uZvBSt_g0dq-_btn"
                              style={{}}
                              className="cbutton-uZvBSt_g0dq- main-btn button-vp-10 btn-hp-25 noBorder radius0"
                              aria-label="Get Instant Access! "
                            >
                              <div style={{}} className="main-heading-group">
                                <div className="button-icon-start" />
                                <div className="main-heading-button">
                                  Get Instant Access!
                                </div>
                                <div className="button-icon-end" />
                              </div>

                              <div
                                style={{
                                  display: "none",
                                  left: "50%",
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                                className="btn-loader-position"
                              >
                                <div
                                  style={{ display: "none" }}
                                  className="v-spinner"
                                >
                                  <div
                                    className="v-moon v-moon1"
                                    style={{
                                      height: 30,
                                      width: 30,
                                      borderRadius: "100%",
                                    }}
                                  >
                                    <div
                                      className="v-moon v-moon2"
                                      style={{
                                        height: "4.285714285714286px",
                                        width: "4.285714285714286px",
                                        borderRadius: "100%",
                                        top: "12.857142857142858px",
                                        backgroundColor: "rgb(255, 255, 255)",
                                      }}
                                    />
                                    <div
                                      className="v-moon v-moon3"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                        border:
                                          "4.285714285714286px solid rgb(255, 255, 255)",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div></div>
                          </div>

                          <div
                            id="paragraph-mrBGtCW_yC"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-mrBGtCW_yC text-output cparagraph-mrBGtCW_yC np noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  <a
                                    target="_self"
                                    rel="noopener noreferrer"
                                    onClick={passElite}
                                  >
                                    No thanks—I’ll pass
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-ZPy53qZMy3T5"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-ZPy53qZMy3T5 text-output cparagraph-ZPy53qZMy3T5 noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  Bonuses Will Be Delivered Instantly. Get Full
                                  Access Right Away.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-wIxa_iNk3mXN"
                            className="c-image c-wrapper image-wIxa_iNk3mXN"
                          >
                            <div
                              style={{ cursor: "pointer" }}
                              className="image-container cimage-wIxa_iNk3mXN"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/6c6f1096-3de0-4c1b-9721-eb0e89aff3fc.png"
                                    alt=""
                                    className="radius0"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-LE5mVVR3TtIN"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-LE5mVVR3TtIN text-output cparagraph-LE5mVVR3TtIN noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <p>100% Secure 256-Bit Security Encryption</p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-AQnMvrtAIJvs"
                            className="c-image c-wrapper image-AQnMvrtAIJvs"
                          >
                            <div
                              style={{ cursor: "pointer" }}
                              className="image-container cimage-AQnMvrtAIJvs"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/772f71cd-3880-408b-b7e7-ffc1b361903d.png"
                                    alt=""
                                    className="radius0"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="hidden-section fullSection noBorder radius0 none c-section c-wrapper section-LzFiPsDt3w"
                style={{}}
                id="section-LzFiPsDt3w"
              >
                <div className="inner">
                  <div
                    className="row-align-center noBorder radius0 none c-row c-wrapper row-2B1y6QzCd9"
                    id="row-2B1y6QzCd9"
                  >
                    <div className="inner">
                      <div
                        className="noBorder radius0 none c-column c-wrapper col-XnDPfqYPWz"
                        id="col-XnDPfqYPWz"
                      >
                        <div className="vertical inner">
                          <div
                            id="image-8QWG_xWhNZ"
                            className="c-image c-wrapper image-8QWG_xWhNZ desktop-only"
                          >
                            <div
                              style={{ cursor: "default" }}
                              className="image-container cimage-8QWG_xWhNZ"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/94390697-e03f-41dd-ad93-92e8d214a834.png"
                                    alt=""
                                    className="img-none img-border-none img-effects-none"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-bbuJZRq61-"
                            className="c-image c-wrapper image-bbuJZRq61- mobile-only"
                          >
                            <div
                              style={{ cursor: "default" }}
                              className="image-container cimage-bbuJZRq61-"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/94390697-e03f-41dd-ad93-92e8d214a834.png"
                                    alt=""
                                    className="img-none img-border-none img-effects-none"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="heading-Pm6uBr5hj6"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-Pm6uBr5hj6 text-output cheading-Pm6uBr5hj6 noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>My “Learn + Earn” Guarantee</h1>
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-wlfR3c7yol"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-wlfR3c7yol text-output cparagraph-wlfR3c7yol noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  If Elite isn’t for you, cancel anytime within
                                  14 days.
                                </p>
                                <p>
                                  <strong>
                                    You’ll always keep your $7 Community access{" "}
                                  </strong>
                                </p>
                                <p>
                                  <strong>No questions asked.</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="hidden-section radius0 noBorder c-section c-wrapper section-Uk0mM8rX5j"
                style={{}}
                id="section-Uk0mM8rX5j"
              >
                <div className="inner">
                  <div
                    className="row-align-center noBorder radius0 c-row c-wrapper row-MLlyVrr8HS"
                    id="row-MLlyVrr8HS"
                  >
                    <div className="inner">
                      <div
                        className="parent-sticky noBorder radius0 none c-column c-wrapper col-mEbnkVBI9R"
                        id="col-mEbnkVBI9R"
                      >
                        <div className="vertical inner" style={{ display: "flex !important", flexDirection: "column", justifyContent: "start" }}>
                          <div
                            id="heading-KIWV6OVkUf"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-KIWV6OVkUf text-output cheading-KIWV6OVkUf has-color noBorder radius0"
                              data-animation-class="animate__animated animate__fadeInUp"
                            >
                              <div>
                                <h1>
                                  Stay a student. Or stay a student AND launch
                                  your business today.{" "}
                                </h1>
                              </div>
                            </div>
                          </div>



                          <div
                            id="button-n8sC4akjPY"
                            className="c-button c-wrapper button-n8sC4akjPY"
                          >
                            <button
                              onClick={createOrder}
                              data-animation-class=""
                              id="button-n8sC4akjPY_btn"
                              style={{}}
                              className="cbutton-n8sC4akjPY main-btn button-vp-10 btn-hp-25 noBorder radius0"
                              aria-label="[INSERT CALL TO ACTION BUTTON] "
                            >
                              <div style={{}} className="main-heading-group">
                                <div className="button-icon-start" />
                                <div className="main-heading-button">
                                  YES — Grandfather Me Into Elite at $49/month
                                  (Reg. $99)
                                </div>
                                <div className="button-icon-end" />
                              </div>

                              <div
                                style={{
                                  display: "none",
                                  left: "50%",
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                                className="btn-loader-position"
                              >
                                <div
                                  style={{ display: "none" }}
                                  className="v-spinner"
                                >
                                  <div
                                    className="v-moon v-moon1"
                                    style={{
                                      height: 30,
                                      width: 30,
                                      borderRadius: "100%",
                                    }}
                                  >
                                    <div
                                      className="v-moon v-moon2"
                                      style={{
                                        height: "4.285714285714286px",
                                        width: "4.285714285714286px",
                                        borderRadius: "100%",
                                        top: "12.857142857142858px",
                                        backgroundColor: "rgb(255, 255, 255)",
                                      }}
                                    />
                                    <div
                                      className="v-moon v-moon3"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                        border:
                                          "4.285714285714286px solid rgb(255, 255, 255)",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div></div>
                          </div>

                          <div
                            id="paragraph-4TyRVw-29c"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-4TyRVw-29c text-output cparagraph-4TyRVw-29c np noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  <a
                                    target="_self"
                                    rel="noopener noreferrer"
                                    onClick={passElite}
                                  >
                                    No thanks<em> </em>
                                    I’ll stay only in the $7 Community
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="parent-sticky noBorder radius0 none c-column c-wrapper col-61TPUs0vTU"
                        id="col-61TPUs0vTU"
                      >
                        <div className="vertical inner">
                          <div
                            id="heading-U1ZFpuXsok"
                            className="c-heading c-wrapper"
                          >
                            <div
                              className="heading-U1ZFpuXsok text-output cheading-U1ZFpuXsok noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <p>Now for only $XX</p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-se7UrczMU6"
                            className="c-image c-wrapper image-se7UrczMU6"
                          >
                            <div
                              style={{ cursor: "pointer" }}
                              className="image-container cimage-se7UrczMU6"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/ad6717b3-3df4-422c-9cb2-9a34013b7030.png"
                                    alt=""
                                    className="radius0"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="sub-heading-4x8XBfT_jg"
                            className="c-sub-heading c-wrapper"
                          >
                            <div
                              className="sub-heading-4x8XBfT_jg text-output csub-heading-4x8XBfT_jg noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                {/* <h2>
                                  <strong>YOU’RE SAVING </strong>$X,XXX
                                  <strong>+ TODAY</strong>
                                </h2> */}
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-rqiH1_K8GY"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-rqiH1_K8GY text-output cparagraph-rqiH1_K8GY noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                {/* <p>
                                  Join [Insert Product Name] for
                                  $[Product&nbsp;Price]
                                </p> */}
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-hR-oIBJmK_"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-hR-oIBJmK_ text-output cparagraph-hR-oIBJmK_ noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  Bonuses Will Be Delivered Instantly. Get Full
                                  Access Right Away.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="button-j48YiVxEoT"
                            className="c-button c-wrapper button-j48YiVxEoT"
                          >
                            <button
                              onClick={createOrder}
                              data-animation-class=""
                              id="button-j48YiVxEoT_btn"
                              style={{}}
                              className="cbutton-j48YiVxEoT main-btn button-vp-10 btn-hp-25 noBorder radius0"
                              aria-label="Get Instant Access! "
                            >
                              <div style={{}} className="main-heading-group">
                                <div className="button-icon-start" />
                                <div className="main-heading-button">
                                  Get Instant Access!
                                </div>
                                <div className="button-icon-end" />
                              </div>

                              <div
                                style={{
                                  display: "none",
                                  left: "50%",
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                                className="btn-loader-position"
                              >
                                <div
                                  style={{ display: "none" }}
                                  className="v-spinner"
                                >
                                  <div
                                    className="v-moon v-moon1"
                                    style={{
                                      height: 30,
                                      width: 30,
                                      borderRadius: "100%",
                                    }}
                                  >
                                    <div
                                      className="v-moon v-moon2"
                                      style={{
                                        height: "4.285714285714286px",
                                        width: "4.285714285714286px",
                                        borderRadius: "100%",
                                        top: "12.857142857142858px",
                                        backgroundColor: "rgb(255, 255, 255)",
                                      }}
                                    />
                                    <div
                                      className="v-moon v-moon3"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                        border:
                                          "4.285714285714286px solid rgb(255, 255, 255)",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div></div>
                          </div>

                          <div
                            id="paragraph-31Go8IkTqC"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-31Go8IkTqC text-output cparagraph-31Go8IkTqC np noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  <a
                                    target="_self"
                                    rel="noopener noreferrer"
                                    onClick={passElite}
                                  >
                                    No thanks—I’ll pass
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-2qx2Kv7JlM"
                            className="c-image c-wrapper image-2qx2Kv7JlM"
                          >
                            <div
                              style={{ cursor: "pointer" }}
                              className="image-container cimage-2qx2Kv7JlM"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/6c6f1096-3de0-4c1b-9721-eb0e89aff3fc.png"
                                    alt=""
                                    className="radius0"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="paragraph-fOwbpZklth"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-fOwbpZklth text-output cparagraph-fOwbpZklth noBorder radius0"
                              data-animation-class=""
                            >
                              <div>
                                <p>100% Secure 256-Bit Security Encryption</p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="image-5UIhwSCqIL"
                            className="c-image c-wrapper image-5UIhwSCqIL"
                          >
                            <div
                              style={{ cursor: "pointer" }}
                              className="image-container cimage-5UIhwSCqIL"
                            >
                              <div>
                                <div>
                                  <Image
                                    width={200}
                                    height={200}
                                    style={{}}
                                    src="/images/772f71cd-3880-408b-b7e7-ffc1b361903d.png"
                                    alt=""
                                    className="radius0"
                                    data-animation-class=""
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="fullSection none noBorder radius0 none c-section c-wrapper section-G-OTprX3m8"
                style={{}}
                id="section-G-OTprX3m8"
              >
                <div className="inner">
                  <div
                    className="row-align-center none noBorder radius0 none c-row c-wrapper row-aMTMG954qNJL"
                    id="row-aMTMG954qNJL"
                  >
                    <div className="inner">
                      <div
                        className="c-column c-wrapper col-6rrbtPtBdJXq"
                        id="col-6rrbtPtBdJXq"
                      >
                        <div className="none noBorder radius0 none bg bgCover vertical inner">

                          <div
                            id="paragraph-1wmwnhlrOT_L"
                            className="c-paragraph c-wrapper"
                          >
                            <div
                              className="paragraph-1wmwnhlrOT_L text-output cparagraph-1wmwnhlrOT_L none noBorder radius0 none"
                              data-animation-class=""
                            >
                              <div>
                                <p>
                                  NOT FACEBOOK™: This site is not a part of the
                                  Facebook™ website or Facebook Inc.
                                  Additionally, this site is NOT endorsed by
                                  Facebook™ in any way. FACEBOOK™ is a trademark
                                  of FACEBOOK™, Inc.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {(secret && searchParams.get('token')) && <div className="fixed h-screen w-screen bg-black/70 top-0 left-0 right-0 flex items-center justify-center p-5">
        <div className="w-full max-w-xl min-h-[200px] bg-white p-5 rounded-xl">
          <div className="mb-5">
            <h1 className="text-xl !font-bold">Join Elite at $49 / Month</h1>
          </div>

          <div className="w-full">
            <PaymentForm clientSecret={secret} token={searchParams.get("token")} />
          </div>
        </div>
      </div>}



    </div>

  );
}
