import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddMarkModal} from './AddMarkModal';
import {EditMarkModal} from './EditMarkModal';

export class Marka extends Component{

    constructor(props){
        super(props);
        this.state={mark:[],addModalShow:false,editModalShow:false}
    }
    refreshList(){
        fetch(process.env.REACT_APP_API+'Marka')
        .then(response=>response.json())
        .then(data=>{
            this.setState({mark:data});
       });
    }
    componentDidMount(){
        this.refreshList()
    }
    componentDidUpdate(){
        this.refreshList()
    }


    deleteMark(MarkaId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Marka/'+MarkaId,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {mark, MarkaId, EmriMarkes}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
               <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>MarkaId</th>
                            <th>Emri Markes</th>
                            <th>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {mark.map(mark=>
                        <tr key={mark.MarkaId}>
                            <td>{mark.MarkaId}</td>
                            <td>{mark.EmriMarkes}</td>
                            <td>
    <ButtonToolbar>
        <Button className="mr-2" variant="info"
        onClick={()=>this.setState({editModalShow:true,
            MarkaId:mark.MarkaId,EmriMarkes:mark.EmriMarkes})}>
                Edit
            </Button>

            <Button className="mr-2" variant="danger"
            onClick={()=>this.deleteMark(mark.MarkaId)}>
                Delete
            </Button>

            <EditMarkModal show={this.state.editModalShow}
            onHide={editModalClose}
            Markaid={MarkaId}
            MarkaId={MarkaId}/>
    </ButtonToolbar>
                            </td>
                        </tr>)}
                    </tbody>
                </Table> 
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Marken
                    </Button>
                    <AddMarkModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}