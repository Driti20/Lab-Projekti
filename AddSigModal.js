import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class AddSigModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'sigurimiprones',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
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
                     Shto Sigurimin E Prones
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="LlojiSigurimit">
                            <Form.Label>LlojiSigurimit</Form.Label>
                            <Form.Control type="text" name="LlojiSigurimit" required
                            placeholder="LlojiSigurimit"/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Shto Sigurimin E Prones
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