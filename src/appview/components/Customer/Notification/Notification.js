import React,{Component,Fragment} from 'react';
import './Notification.scss';
import Noty from 'noty';

class Notification extends Component{
    constructor(props){
        super(props);
        this.state={
            type:'success',
            text:'Thêm sản phẩm thành công'
        }
    }
    showNotification=()=>{
        var {type,text}=this.state;
        new Noty({
            type:type,
            layout:"topRight",
            text:text,
            timeout:3000
        }).show();
    }
    render(){
        return(
            <Fragment>
                    <button onClick={(e)=>this.showNotification(e)}>
                        show notyfivation
                    </button>
            </Fragment>
        );
    }
}


export default Notification;