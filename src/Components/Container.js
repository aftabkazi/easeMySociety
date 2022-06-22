import './Container.css';

const Container = () => {
  return (
    <div>
      <h1 id="quotes">We provide you real service which cannot be bought or measured with money,<br/> 
      and that is sincerity and integrity.” </h1>
      <div class="row mb-2">
    <div class="col-md-6 ">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Home Serices</strong>
          <p class="card-text mb-auto">
            Expert professionals<br/>
            -Plumber<br/>
            -Wireman<br/>
            -Carpenter<br/>
            -Maids<br/>
            -Electricians<br/>
          </p>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img width="200" height="250" src='./Images/home.jpg'className="d-block w-100" />
          {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="Banner.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Groceries</strong>
          <p class="mb-auto">
            You book we deliver
          </p>
        </div>
        <div class="col-auto d-none d-lg-block">
          {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
          <img width="200" height="250" src='./Images/food.jpg'className="d-block w-100" />
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Socity Updates </strong>
          <p class="card-text mb-auto">
            Know everything going on in the socity
          </p>
        </div>
        <div class="col-auto d-none d-lg-block">
        {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
        <img width="200" height="250" src='./Images/noti.jpg'className="d-block w-100" />
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">BOOK NOW</strong>
          <p class="mb-auto">
            So what are you waiting for ? Book a flat now !!!
          </p>
        </div>
        <div class="col-auto d-none d-lg-block">
        {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
        <img width="200" height="250" src='./Images/appartment.jpg'className="d-block w-100" />
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};
export default Container;
