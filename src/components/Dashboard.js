import React, { useState } from "react";
import { Link } from "react-router-dom";
import heart from "../assets/img/heart.svg";
import medical from "../assets/img/medical.svg";
import StatesList from "./StatesList";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import TopStatesList from "./TopStatesList";
import RatioChart from "./RatioChart";
import Map from "./Map";
import numeral from "numeral";

function Dashboard({ countryInfo, statesInfo }) {
  const StatePerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalStates = statesInfo.length;
  const indexOfLastState = currentPage * StatePerPage;
  const indexOfFirstState = indexOfLastState - StatePerPage;
  const currentPageStates = statesInfo.slice(
    indexOfFirstState,
    indexOfLastState
  );
  const topThreeStates = statesInfo.slice(0, 5);
  const totalPages = Math.ceil(totalStates / StatePerPage);

  // Handle Pagination next and prev btn
  const handlePaginationNextBtn = (currentPageNumber) => {
    const nextPage = currentPageNumber + 1;
    setCurrentPage(nextPage);
  };
  const handlePaginationPreviousBtn = (currentPageNumber) => {
    const prevPage = currentPageNumber - 1;
    setCurrentPage(prevPage);
  };

  const prevBtnClass = () => {
    if (currentPage === 1) {
      return true;
    } else {
      return false;
    }
  };

  const nextBtnClass = () => {
    if (currentPage === totalPages || totalPages === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="row m-0">
        <div className="statistical_analysis col-md-9 col-xs-12 pr-0">
          {/* Info Boxes */}
          <div className="info_boxes_container">
            <div className="row">
              {/* Total Case info Box */}
              <div className="total-cases info-box col-md-3 col-xs-12 col-lg-3">
                <div className="card card-stats mb-4 mb-x1-0">
                  <div className="card-body">
                    <p className="card-title text-capitalise font-size-medium text-muted mb-0">
                      Total Cases
                    </p>
                    <span className="font-weight-bold mb-0 info-box-figure">
                      <strong>
                        {numeral(countryInfo.cases).format("0,0")}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
              {/* Recovered info Box */}
              <div className="recovered info-box col-md-3 col-xs-12 col-lg-3">
                <div className="card card-stats mb-4 mb-x1-0">
                  <div className="card-body">
                    <p className="card-title text-capitalise font-size-medium text-muted mb-0">
                      Recovered
                    </p>
                    <span className="font-weight-bold mb-0 info-box-figure">
                      <strong>
                        {numeral(countryInfo.recovered).format("0,0")}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
              {/* Active info Box */}
              <div className="active-cases info-box col-md-3 col-xs-12 col-lg-3">
                <div className="card card-stats mb-4 mb-x1-0">
                  <div className="card-body">
                    <p className="card-title text-capitalise font-size-medium text-muted mb-0">
                      Active Cases
                    </p>
                    <span className="font-weight-bold mb-0 info-box-figure">
                      <strong>
                        {numeral(countryInfo.active).format("0,0")}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
              {/* Death info Box */}
              <div className="death-cases info-box col-md-3 col-xs-12 col-lg-3">
                <div className="card card-stats mb-4 mb-x1-0">
                  <div className="card-body">
                    <p className="card-title text-capitalise font-size-medium text-muted mb-0">
                      Deaths
                    </p>
                    <span className="font-weight-bold mb-0 info-box-figure">
                      <strong>
                        {numeral(countryInfo.deaths).format("0,0")}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-analysis-container">
            <div className="row m-0">
              <div className="map-detail col-md-8 col-xs-12 p-0">
                <div className="card">
                  <div className="card-header pr-2 pl-2 pt-3 pb-3">
                    <h5 className="font-weight-bold m-0">
                      <strong>COVID-19 Affected Areas</strong>
                    </h5>
                  </div>
                  <div className="card-body p-0">
                    <Map states={statesInfo} />
                  </div>
                </div>
              </div>
              <div className="states-analysis col-md-4 col-xs-12 p-0">
                <div className="card">
                  <div className="card-header pr-2 pl-2 pt-3 pb-3">
                    <h5 className="font-weight-bold m-0">
                      <strong>Top States</strong>
                    </h5>
                  </div>
                  <div className="card-body p-0">
                    <TopStatesList topStates={topThreeStates} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="information-container pt-3">
            <div className="row m-0">
              <div className="symptoms-info-container col-md-6 col-xs-12 pl-0">
                <div className="card">
                  <div className="media">
                    <div className="avatar-img">
                      <img src={medical} className="img-fluid" alt="medical" />
                    </div>
                    <div className="media-body">
                      <Link to="#">News & Updates</Link>
                      <h5 className="font-weight-bold">
                        <strong>
                          5 Symptoms of Corona Virus that you should know
                        </strong>
                      </h5>
                      <Link to="#">
                        Read More <ArrowForward fontSize={"small"} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="donate-info-container col-md-6 col-xs-12 pr-0">
                <div className="card">
                  <div className="media">
                    <div className="avatar-img">
                      <img src={heart} className="img-fluid" alt="heart" />
                    </div>
                    <div className="media-body">
                      <Link to="#">Donate</Link>
                      <h5 className="font-weight-bold">
                        <strong>5 ways to donate to support goverment </strong>
                      </h5>
                      <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <Link to="#">
                        Donate Now <ArrowForward fontSize={"small"} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="live_analysis col-md-3 col-xs-12">
          <div className="recovery-ratio-chart">
            <div className="card">
              <div className="card-header pr-2 pl-2 pt-3 pb-3 text-center">
                <h5 className="font-weight-bold m-0 text-center">
                  <strong>Ratio of Recovery</strong>
                </h5>
              </div>
              <div className="card-body">
                <RatioChart
                  cases={countryInfo.cases}
                  recovered={countryInfo.recovered}
                  height={250}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <small className="font-weight-bold text-muted">
                    {numeral(countryInfo.cases).format("0,0")} Affected
                  </small>
                  <small className="font-weight-bold text-muted">
                    {numeral(countryInfo.recovered).format("0,0")} Recovered
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="live-report-table pt-3">
            <div className="card">
              <div
                className="card-header pr-2 pl-2 pt-3 pb-3"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5 className="font-weight-bold m-0">
                  <strong>Live Report</strong>
                </h5>
                <div className="pagination-buttons">
                  <ul className="pagination">
                    <li className="page-item p-0 m-0">
                      <button
                        disabled={prevBtnClass()}
                        className="page-link font-weight-bold"
                        style={{ color: "black !important" }}
                        onClick={() => handlePaginationPreviousBtn(currentPage)}
                      >
                        <ArrowBack />
                      </button>
                    </li>
                    <li className="page-item p-0 m-0">
                      <button
                        disabled={nextBtnClass()}
                        className="page-link font-weight-bold"
                        style={{ color: "black !important" }}
                        onClick={() => handlePaginationNextBtn(currentPage)}
                      >
                        <ArrowForward />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-0">
                <StatesList states={currentPageStates} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
