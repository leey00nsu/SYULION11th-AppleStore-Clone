import appletv from "../../Images/icons/apple-tv-logo.png";
import banker from "../../Images/home/banker.png";
import series5 from "../../Images/icons/watch-series5-logo.png";
import arcade from "../../Images/icons/arcade.png";
import { Link } from "react-router-dom";

export const items = [
  {
    _id: 1,
    name: "애플워치",
    summary: "애플워치 입니다.",
    price: 3000000,
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLOzqyM3--XBBj5SHP-8aDztgd3TbrNsUYH_wA_8TH7EyDdWlMN6eShc0skRiOr5MZtCOFgKWbFQ&usqp=CAc",
  },
  {
    _id: 2,
    name: "맥북",
    ummary: "맥북 입니다.",
    price: 1000000,
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMa8enf-qtEg-aGi9PvSytzQJEQJYVdITD4PmBsbzsZld1wOzHY7aFAJmtoBetd36FtPPSnp63c-o&usqp=CAc",
  },
  {
    _id: 3,
    name: "에어팟",
    ummary: "에어팟 입니다.",
    price: 200000,
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMocFalyXMslh8RzvkLNupf0CkXavg-rNP_CtWwXmkeJhEblFkeQ&usqp=CAc",
  },
];

const LandingPage = () => {
  const renderCards = items.map((item) => {
    if (item) {
      return (
        <div key={item._id} className="grid-product">
          <Link to={`/product/${item._id}`}>
            <img src={item.thumbnail} alt={item.name} />
            <div className="grid-detail">
              <p>{item.name}</p>
              <p> From {item.price}₩</p>
            </div>
          </Link>
        </div>
      );
    }
  });
  return (
    <div>
      <section className="welcome">
        <h1>좋아하는 Apple 제품을 구입하는 가장 좋은 방법</h1>
      </section>

      <section className="product-grid">
        <div className="grid-container">
          <h2>Product</h2>
          <div className="grid">{renderCards}</div>
        </div>
      </section>

      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="/">Learn more</a>
              </li>
              <li>
                <a href="/">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="second-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">iPhone 11</div>
                <div className="description-wraper">
                  Just the right amount of everything.
                </div>
                <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href="/">Watch the PSA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={appletv} alt="apple" />
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  <img src={banker} alt="apple" />
                </div>

                <div className="watch-more-wrapper">
                  <a href="/">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={series5} alt="apple" />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={arcade} alt="apple" />
                  </div>
                </div>
                <div className="description-wraper white">
                  Agent 8 is a small hero on a big mission.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a href="/">Learn about Apple Arcade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">
                  Apple Card Monthly Installments
                </div>
                <div className="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
