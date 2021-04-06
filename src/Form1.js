import React, {useState} from 'react'
import {Row,Col, Form, FormGroup,Label, Input} from "reactstrap";
// import { Link } from 'react-router-dom';
import './Form1.css';

export const Form1 = (props) => {
    const {updateProfileCheckerArray} = props;
    const inititalInputState = {url : ""};
     const [eachEntry, setEachEntry] = useState(inititalInputState );
    const { url } = eachEntry;

    const handleInputChange = e => {
        setEachEntry({...eachEntry, [e.target.name]: e.target.value});  
    };

    const handleFinalSubmit = e=> { 
        updateProfileCheckerArray(eachEntry);
    }

    return (
    <div className="conatiner">
        <Row>
            <Col sm="12" md={{size: 6, offset : 3}} className = "text-center">
            <h2>Profile Checker</h2>   
                </Col>{" "}
                 </Row>
                 <Row className="mt-4">
                     <Col sm="12" md={{size: 6, offset : 3}}>
                         <Form>
                             <FormGroup>
                                 <Label for="url">Please enter your LinkedIn URL</Label>
                                 <br/><br/>
                                 <Input name="url" placeholder="Ex : https://www.linkedin.com/in/ananya-singh-7b55a51ab/" value={url} onChange={handleInputChange}></Input>
                                 <br/>
                                 <Label for="url">
                                     *Kindly enter a valid LinkedIn profile address
                                     </Label>
                             </FormGroup>
                             <br/><br/><br/>
                             <button onClick={handleFinalSubmit}>Submit</button>
                            
                             <button>Cancel</button>
                         </Form>
                     </Col>
                 </Row>
                 </div>
    );
    
};
