import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
export class EditMarkModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'marka',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                MarkaId:event.target.MarkaId.value,
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
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Departament
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="MarkaId">
                    <Form.Label>ID Markes</Form.Label>
                    <Form.Control type="text" name="Markaid" required
                    disabled
                    defaultValue={this.props.MarkaId}
                    placeholder="MarkaId"/>
                </Form.Group>

                <Form.Group controlId="EmriMarkes">
                    <Form.Label>Emri Markes</Form.Label>
                    <Form.Control type="text" name="EmriMarkes" required
                    defaultValue={this.props.EmriMarkes}
                    placeholder="EmriMarkes"/>
                </Form.Group>

                <Form.Group>
                    <Button variant="primary" type="submit">
                        Perditeso Marken
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