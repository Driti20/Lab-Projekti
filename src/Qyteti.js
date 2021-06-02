import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddQytetiModal} from './AddQytetiModal';
import {EditQytetiModal} from './EditQytetiModal';


export class Qyteti extends Component{
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Qyteti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    deleteQytetin(QytetiId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Qyteti/'+QytetiId,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {deps,QytetiId,EmriQytetit}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
              <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                         <tr>
                            <th>QytetiId</th>
                        <th>EmriQytetit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.QytetiId}>
                                <td>{dep.QytetiId}</td>
                                <td>{dep.EmriQytetit}</td>
                                <td>
         <ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        QytetiId:dep.QytetiId,EmriQytetit:dep.EmriQytetit})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteQytetin(dep.QytetiId)}>
            Delete
        </Button>

        <EditQytetiModal show={this.state.editModalShow}
        onHide={editModalClose}
        QytetiId={QytetiId} 
        EmriQytetit={EmriQytetit}/>
</ButtonToolbar>

                                </td>
                           </tr>)}
                    </tbody>

                </Table>    
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Shto Qytetin</Button>

                    <AddQytetiModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}