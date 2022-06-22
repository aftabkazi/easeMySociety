
import { Form } from 'reactstrap';
import { Col } from 'reactstrap';
import { div } from 'reactstrap';
import { Label } from 'reactstrap';
import { input } from 'reactstrap';
import { button } from 'reactstrap';

function ForgotPassword() {
    return (
        <>
            <div >
                <div className="smain">
                    <Form>
                        <Col md={4}>

                            <div>
                                <Label for="name">
                                    <h5> Enter Your Mobile Number/Emailid</h5>
                                </Label>
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="First name first"
                                />
                            </div>
                        </Col>
                        <button>
                            Submit
                        </button>
                    </Form>
                    
                    
                </div>

                {/* <a href="/" className="Flogin btn"> </a> */}
            </div>
        </>
    );

}

export default ForgotPassword;