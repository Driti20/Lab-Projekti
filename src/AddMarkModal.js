import React,{Component} from "react";
import {Modal,Button,Row,Col,Form} from "react-bootstrap";
export class AddMarkModal extends Component{
    constructor(pops){
        super(pops);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'marka',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
    
                EmriMarkes:event.target.EmriMarkes.value
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
aria-labelledby="contained-model-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Shto Marken
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="EmriMarkes">
                    <Form.Label>Emri Markes</Form.Label>
                    <Form.Control type="text" name="EmriMarkes" required
                    placeholder="Emri Markes"/>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit">
                        Shto Marken
                    </Button>
                </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    <Modal.Footer>
        <Button  variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>
</Modal>
            </div>
        )
    }
}