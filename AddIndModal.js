import React,{Component} from 'react';
import {Modal, Button,Row,Col,Form} from 'react-bootstrap';

export class AddIndModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'ngjyrat',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                NgjyraLloji:event.target.NgjyraLloji.value
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
            Shto Ngjyren
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>


        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group cotrolId="NgjyraLloji">
                        <Form.Label>NgjyraLloji</Form.Label>
                        <Form.Control type="text" name="NgjyraLloji" required
                        placeholder="NgjyraLloji"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto Ngjyren
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