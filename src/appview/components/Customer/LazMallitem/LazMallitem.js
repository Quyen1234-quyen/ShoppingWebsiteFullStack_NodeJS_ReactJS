import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './LazMallitem.scss';


class LazMallitem extends Component{
    render(){
        var {store,index}=this.props;
        return(
            <Fragment>
                <div className="col-md-2">
                   <div className="lazmall_item">
                        <Link to={`/shop/${store._id}`} className="linkLazada">
                        <img src="../../../img/lazada/lazmall1.png" width="100%"/>
                            <div className="description">
                                <p className="text-center">{store.nameStore}</p>
                            </div>
                            <div className="icon">
                                <img src="../../../img/lazada/lazmall1.png" width="100%"/>
                            </div>
                        </Link>
                   </div>
                </div>
            </Fragment>
        );
    }

}

export default LazMallitem;