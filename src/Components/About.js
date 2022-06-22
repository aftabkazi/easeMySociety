const About = () => {
  return (
    <div>
      <h1 style={{textAlign:'center',color:'MediumSeaGreen'}}>Facilites that are proided in our socity</h1>
      <div class="container my-4 ">
        <div class="row featurette d-flex justify-content-center align-items-center ">
          <div class="col-md-7">
            <h2 class="featurette-heading">
            <span class="text-muted">
                Swimming pool
                <br/><hr/>
                <h5>Rules and regulations</h5>
                <hr/>
            </span>
            </h2>
            <p class="lead">
            -Take shower before and after swimming in the pool<br/>
            -No soaps or any type of loations are allowed<br/>
            -Different batch time for Males and femals<br/> 
            -Put on a swimming cap if you have long hair.<br/>
            -Childrens under agr 14 are not allowed without their parents.<br/>
            -Montly maintenance charges.
            </p>
          </div>
          <div class="col-md-5">
            <img class="img-fluid" src="./Images/swimming.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="container my-4 ">
        <div class="row featurette d-flex justify-content-center align-items-center ">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
                <span class="text-muted">
                    GYM
                    <br/><hr/>
                    <h5>Follow the Rules..</h5>
                    <hr/>
                </span>
            </h2>
            <p class="lead">
              -Music Should Be on Low Volume.<br/>
              -Use the equipments carefully.<br/>
              -Montly maintenance charges.<br/>
              -Different batch time for Males and femals<br/> 
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="img-fluid" src="./Images/gym.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="container my-4 ">
        <div class="row featurette d-flex justify-content-center align-items-center ">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              <span class="text-muted">
                Garden
                <br/><hr/>
                  <h5>Follow the Rules..</h5>
                  <hr/>
              </span>
            </h2>
            <p class="lead">
              -Cricket,badminton,football should be played only on the respective grounds<br/>
              -Plicking of flowers is prohibited.<br/>
              -Childrens under age 14 are only allowed to use the instruments in garden.<br/>
              -Smoking is strictly prohibited in garden  and socity area.
            </p>
          </div>
          <div class="col-md-5">
            <img class="img-fluid" src="./Images/garden.jpg" alt="" />.
          </div>
        </div>
      </div>

      {/* <h1 style={{textAlign:'center',backgroundColor:'red',borderRadius:20,height:70}}>FREQUENTLY ASKED QUESTIONS</h1>
      #1 HOW MUCH IS THE MONTLY MAINTANCE?<br/>
      ANS:Every owner should pay 1500 rupees montly maintances. */}
    </div>
  );
};
export default About;
