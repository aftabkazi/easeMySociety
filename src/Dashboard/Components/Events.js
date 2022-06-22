import React from "react";
import "./css/Events.css";

export default function Events() {
  return (
    <div>
      {/* <!-- This one will be in the middle area --> */}
      <div class="main-area">
        <div class="left-sidebar">
          <h1>Notice</h1>
          <div className="notice">
            <p>Hello my socity we happy to share we are now zero covid case</p>
            <p>Hello my socity we happy to share we are now zero covid case</p>
            <p>Hello my socity we happy to share we are now zero covid case</p>
            <p>Hello my socity we happy to share we are now zero covid case</p>
            <p>Hello my socity we happy to share we are now zero covid case</p>
          </div>
        </div>
        <div class="contents">
          <div class="horizontal-content">
            <h2>Celebrate Holi</h2>
            <img className="event-image" src="holi.jpg" alt="" />
            <br />
            <h4>on 13th March we are going to celebrate holi </h4>
            {/* <a  href="http://amazon.in">Explore more startups</a> */}
          </div>

          <div class="horizontal-content">
            <h2>Yoga classes</h2>
            <img  className="event-image" src="holi.jpg" alt="" />
            <br />
            <h4>on 13th March we are going to celebrate holi </h4>
            {/* <a href="http://amazon.in">Explore more startups</a> */}
          </div>

          {/* <div class="horizontal-content">
            <h2>Innovations from Emerging Indian Brands</h2>
            <img src="holi.jpg" alt="" />
            <br />
            <a href="http://amazon.in">Explore more startups</a>
          </div> */}
          {/* <div class="horizontal-content">
            <h2>Innovations from Emerging Indian Brands</h2>
            <img src="holi.jpg" alt="" />
            <br />
            <a href="http://amazon.in">Explore more startups</a>
          </div> */}

          {/* <div class="horizontal-content">
            <h2>Innovations from Emerging Indian Brands</h2>
            <img src="holi.jpg" alt="" />
            <br />
            <a href="http://amazon.in">Explore more startups</a>
          </div> */}
{/* 
          <div class="horizontal-content">
            <h2>Innovations from Emerging Indian Brands</h2>
            <img src="holi.jpg" alt="" />
            <br />
            <a href="http://amazon.in">Explore more startups</a>
          </div> */}
        </div>
        <div class="right-sidebar">
          <h2>Book Ower Hall for Family Event</h2>

          <form>
            <tr>
              <td>Enter Name:</td>
              <td>
                <input type="text" placeholder="Enter Name" />{" "}
              </td>
            </tr>
            <tr>
              <td>Flate Number:</td>
              <td>
                <input type="text" placeholder="flate Number" />{" "}
              </td>
            </tr>
            <tr>
              <td>Event Date:</td>
              <td>
                <input type="date" placeholder="Event date" />{" "}
              </td>
            </tr>
            <tr>
              <td>Event Details:</td>
              <td>
                <input type="Text" placeholder="Event Details and Time" />{" "}
              </td>
            </tr>
          </form>
        </div>
      </div>
    </div>
  );
}
// export default Events;