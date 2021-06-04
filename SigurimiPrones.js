import React,{Component} from 'react';
import {Table} from 'react-bootstrap';


import{Button,ButtonToolbar} from 'react-bootstrap';
import {AddSigModal} from './AddSigModal';
import {EditSigModal} from './EditSigModal';

export class SigurimiPrones extends Component{
    
    constructor(props){
        super(props);
        this.state={deps:[],addModalShow:false , editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'sigurimiprones')
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

    deleteDep(sigid){
        if(window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'sigurimiprones/'+sigid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const{deps , sigid, sigll}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
        <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>SigurimiPronesID</th>
                        <th>LlojiSigurimit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(sig=>
                            <tr key={sig.SigurimiPronesID}>
                                <td>{sig.SigurimiPronesID}</td>
                                <td>{sig.LlojiSigurimit}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info" 
    onClick={()=>this.setState({editModalShow:true,
    sigid:sig.SigurimiPronesID,sigll:sig.LlojiSigurimit})}>
        Edit
    </Button>

    <Button className="mr-2" variant="danger" 
    onClick={()=>this.deleteDep(sig.SigurimiPronesID)}>
        Delete
    </Button>

        <EditSigModal show={this.state.editModalShow}
        onHide={editModalClose}
        sig={sigid}
        sigll={sigll}/>
</ButtonToolbar>

                                </td>
                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant="primary"
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Sigurimi Prones</Button>
                
                <AddSigModal show={this.state.addModalShow}
                onHide={addModalClose}>
                    </AddSigModal>         
                                        
                </ButtonToolbar>

            </div>
        )
    }
}