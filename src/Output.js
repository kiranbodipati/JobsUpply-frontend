import React from 'react'
import {Row,Col, Table} from "reactstrap";

export const Output = (props) => {
    const {profileChecker} = props;
    return (
        <div className="mt-4">
            {/* <Row>
                <Col sm="12" md = {{size: 6, offset: 3}}>
                    <Table hover> 
                     <thead>
                         <tr>
                             <th>#</th>
                             <th>Name</th>
                             <th>Score</th>
                         </tr>
                     </thead>
                     <tbody>
                         <RenderTableData profileChecker={profileChecker} />
                     </tbody>
                    </Table>
                </Col>
            </Row> */}
            Output
        </div>
    )
};

const RenderTableData = props => {
    const {profileChecker} = props;
    var count =0;
    const finalArray= profileChecker.sort((a,b)=> b.score - a.score);
    return Object.keys(finalArray).map((i,o)=> {
        const {url} = finalArray[i];
    count = count+1;
    return (
        <tr key={count.toString(10)}>
            <th url="row">{count.toString(10)}</th>
            <td>{url}</td>
        </tr>
    )
})
}
