import './css/Feedback.css';

const Feedback = () => {

  const ClickHandler=()=>{
    alert("Feedback submitted Sucessfully,Thank-you");
  }

  return (
    <div>
      <h1 className='h1'>We would like your feedback to imporve our website</h1>
      <form  className='radio1' onSubmit={ClickHandler}>
          <div >
        <label id='category'>Please Select your feedback category</label><hr/>
        <div className='radio2'>
          <input type="radio"  value="Sugesstion" name="Feedback"/> Sugesstion
          <br /><br/>
          <input type="radio" value="Complaint" name="Feedback"/> Complaint
        </div>
        </div>
        <hr />
        <label className='radio3'>Please leave your feedback below :</label>
        <br />
        <textarea required></textarea>
        <br/>
        {/* <button type="button" class="btn btn-primary">Submit</button> */}
        <input id="submitButton"  type="Submit" value="Submit"/>
      </form>
    </div>
  );
};
export default Feedback;
