import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class EditSigModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'sigurimiprones',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                SigurimiPronesID:event.target.SigurimiPronesID.value,
                LlojiSigurimit:event.target.LlojiSigurimit.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }    

    render(){
        return(
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
            <Modal.Header clooseButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Sigurimin E Prones
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="SigurimiPronesID">
                            <Form.Label>SigurimiPronesID</Form.Label>
                            <Form.Control type="text" name="SigurimiPronesID" required
                            disabled
                            defaultValue={this.props.depid}
                            placeholder="LlojiSigurimit"/>
                        </Form.Group>
                        
                        <Form.Group controlId="DepartmentName">
                            <Form.Label>DepartmentName</Form.Label>
                            <Form.Control type="text" name="DepartmentName" required
                            defaultValue={this.props.depname}
                            placeholder="DepartmentName"/>
                        </Form.Group>

                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Perditeso Sigurimin E Prones
                            </Button>
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
</Modal>
            </div>
        )
    }
}