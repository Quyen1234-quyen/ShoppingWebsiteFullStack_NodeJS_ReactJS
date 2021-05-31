import React,{Component,Fragment} from 'react';
import './HeaderSearch.scss';

class HeaderSearch extends Component{
    render(){
        return(
            <Fragment>
                <div className="header__search">
                    <div className="search">
                        <form>
                            <input
                                type="text"
                                name="keysearch"
                                placeholder="Tìm kiếm trên Lazada"
                                autoComplete="off"
                            />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HeaderSearch;