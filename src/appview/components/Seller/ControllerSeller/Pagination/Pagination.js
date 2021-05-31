import React, { Component ,Fragment} from 'react';
import './Pagination.scss';



class Pagination extends Component{
    render(){
        return(
            <Fragment>
                
               <div className="pagination">
                    <div className="container-fluid">
                        <div className="pagination_content">
                            <div>
                                <ul className="pagination_left">
                                    <li><i className="fa fa-chevron-left"></i>&nbsp;Privious</li>
                                    <li>1</li>
                                    <li>Next &nbsp;<i className="fa fa-chevron-right"></i></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="pagination_right">
                                    <li>mặt hàng trên mỗi trang</li>
                                    <li className="slsp">
                                        <select
                                            className="pagination_count"
                                        >
                                            <option value={10}>10 </option>
                                            <option value={20}>20 </option>
                                            <option value={100}>100</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
               </div>
            </Fragment>
        )
    }
}


export default Pagination;