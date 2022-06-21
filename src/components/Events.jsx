import axios from "axios";
import React, { useState, useEffect } from "react";
import "./signin.css";

function Events() {
  const [event, setEvent] = useState([]);
  const [selectDate, setSelectDate] = useState([]);
  const [cityDatalist, setCityDatalist] = useState([
    {
      id: 1,
      city: "Ahmedabad"
    },
    { id: 2, city: "Dahod" },
    {
      id: 3,
      city: "Surat"
    },
    { id: 4, city: "Rajkot" },
    {
      id: 5,
      city: "Godhra"
    },
    { id: 6, city: "Gandhinagar" }
  ]);

  const [categoryDatalist, setCategoryDatalist] = useState([
    {
      id: 1,
      category: "Music events"
    },
    { id: 2, category: "Exhibition" },
    {
      id: 3,
      category: "Party"
    },
    { id: 4, category: "Educational events" },
    {
      id: 5,
      category: "Conference"
    },
    { id: 6, category: "Webinar" }
  ]);

  useEffect(() => {
    getAllEvents().then((event) => {
      setEvent(event.data);
    });
    console.log(event);
  }, []);

  const getAllEvents = async () => {
    const events = await axios.get(
      "http://localhost/alleventapi/api/event/events.php"
    );
    return events;
  };

  const onFilterChange = async (e) => {
    let x;
    let filteredData;
    await getAllEvents().then((event) => {
      x = event.data;
    });

    if (e.target.id == "date") {
      filteredData = await x.filter((data) => {
        if (data.eventDate == e.target.value) {
          setSelectDate(e.target.value);
          return data;
        }
      });
    }
    if (e.target.id == "all") {
      console.log((e.target.nextElementSibling.value = ""));
      filteredData = x;
    }
    setEvent(filteredData);
  };

  const onChangeCity = async (e) => {
    let x;
    let filteredData;
    await getAllEvents().then((event) => {
      x = event.data;
    });
    console.log(x);

    console.log(selectDate);
    if (e.target.id == "city" && selectDate.length !== 0) {
      console.log("selectDate and city");
      filteredData = await x.filter(
        (data) =>
          data.location.includes(e.target.value) && data.eventDate == selectDate
      );
    } else if (e.target.id == "city") {
      console.log("only city");
      filteredData = await x.filter((data) =>
        data.location.includes(e.target.value)
      );
    }
    console.log(filteredData);
    setEvent(filteredData);
  };

  const onChangeCategory = async (e) => {
    let x;
    let filteredData;
    await getAllEvents().then((event) => {
      x = event.data;
    });
    console.log(x);

    // console.log(selectDate);
    // if (e.target.id == "city" && selectDate.length !== 0) {
    //   console.log("selectDate and city");
    //   filteredData = await x.filter(
    //     (data) =>
    //       data.location.includes(e.target.value) && data.eventDate == selectDate
    //   );
    // } else
    if (e.target.id == "category") {
      console.log("only category");
      filteredData = await x.filter((data) =>
        data.category.includes(e.target.value)
      );
    }
    console.log(filteredData);
    setEvent(filteredData);
  };

  return (
    <>
      <div className="filterContainer">
        <div className="date w-50 m-auto text-center">
          <div className="d-flex justify-content-around">
            <div className="filter mt-2">Filters</div>
            <div
              className="btn btn-outline-primary mt-2"
              id="all"
              onClick={onFilterChange}
            >
              All
            </div>
            <input
              type="date"
              className="btn btn-outline-primary mt-2"
              onChange={onFilterChange}
              name="date"
              id="date"
            />
          </div>
          <br />
          <div>
            <input
              className="form-control mt-2 mb-2"
              id="city"
              onChange={onChangeCity}
              list="cityDatalist"
              value={cityDatalist.city}
              placeholder="City"
            />
            <datalist id="cityDatalist">
              {cityDatalist && cityDatalist.length > 0 ? (
                cityDatalist.map((cityData) => {
                  return (
                    <option key={cityData.id} value={cityData.city}>
                      {cityData.city}
                    </option>
                  );
                })
              ) : (
                <div>Data loading in progress...</div>
              )}
            </datalist>
          </div>

          {/* category filter */}
          <div>
            <input
              className="form-control"
              id="category"
              onChange={onChangeCategory}
              list="categoryDatalist"
              value={categoryDatalist.category}
              placeholder="category"
            />
            <datalist id="categoryDatalist">
              {categoryDatalist && categoryDatalist.length > 0 ? (
                categoryDatalist.map((categoryData) => {
                  return (
                    <option key={categoryData.id} value={categoryData.category}>
                      {categoryData.category}
                    </option>
                  );
                })
              ) : (
                <div>Data loading in progress...</div>
              )}
            </datalist>
          </div>
        </div>
      </div>
      <div className="row cardRow">
        {event.length == 0 && (
          <>
            <h3 className="text-danger text-center m-4">No event found !!!</h3>
          </>
        )}

        {event.length !== 0 &&
          event.map((data, key) => (
            <div key={key} className="col-sm-4 mt-4">
              <div className="card">
                <div className="cardImg">
                  <img className="card-img-top" src={data.bannerPicture} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.eventName}</h5>
                  <span>
                    <b>Date : </b>
                    {data.eventDate}
                  </span>
                  <br />
                  <span>
                    <b>Location : </b>
                    {data.location}
                  </span>
                  <br />
                  <span>
                    <b>Category : </b>
                    {data.category}
                  </span>
                  <p className="card-text">{data.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Events;
