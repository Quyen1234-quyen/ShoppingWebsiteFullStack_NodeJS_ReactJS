import React, { Component ,Fragment} from 'react'
import './FormAction.scss';
import {connect} from 'react-redux';
import Noty from 'noty';
import * as action from '../../../../actions/seller';
import * as actionMain from '../../../../actions/actionMain';
import * as message from './../../../../constants/Message';

const acceptFileTypes='image/x-png,image/png,image/jpg,image/jpeg,image/gif';
const Number=RegExp(/^[0-9]{1,}$/);

const checkName=(name)=>{
    var string="";
    var name1=name+"";
    if(name1.length>0 && name1.length<10){
        string="Độ dài của email phải từ 11-60 kí tự."
    }
    if(name1.length==0){
        string="Thông tin bắt buộc."
    }
    return string;
}
const checkGroupCate=(groupCate)=>{
   
    var string="";
    var groupCate1=groupCate+"";
    if(groupCate1.length==0){
        string="Vui lòng chọn danh mục chính."
    }
    return string;
}
const checkCategory=(cate)=>{
    var string="";
    var cate1=cate+"";
    if(cate1.length==0){
        string="Vui lòng chọn danh mục phụ."
    }
    return string;
}
const checkPrice=(price)=>{
    var string="";
    var price1=price+"";
    if(price1.length==0){
        string="Thông tin bắt buộc.";
    }
    if(price1.length>0 && !Number.test(price1)){
        string="Giá không hợp lệ."
    }
    return string;
}
const checkcostPrice=(costPrice)=>{
    var string="";
    var price1=costPrice+"";
    if(price1.length==0){
        string="Thông tin bắt buộc.";
    }
    if(price1.length>0 && !Number.test(price1)){
        string="Giá không hợp lệ."
    }
    return string;
}
const checkInventory=(inventory)=>{
    var string="";
    var inventory1=inventory+"";
    if(inventory1.length==0){
        string="Thông tin bắt buộc.";
    }
    if(inventory1.length>0 && !Number.test(inventory1)){
        string="Giá không hợp lệ."
    }
    return string;
}
const checkImage=(img)=>{
    var string="";
    
    if(!img || img==null){
        string="Thông tin bắt buộc.";
    }
    return string;
}

const checkAll=(name,cateID,groupID,img,price,costPrice,inventory)=>{
    var result=false;
    if(name.length==0 && cateID.length==0 && groupID.length==0 && img.length==0 && price.length==0 && costPrice.length==0 && inventory.length==0){
        result=true;
    }
    return result;
}

const findIdGroupCategoryByIdCategory=(category,idCate)=>{
    var result='';
    category.map((item,index)=>{
        if(item._id===idCate){
            result=item.groupCateID;
        }
    });
    return result;
}



class FormAction extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            cateID:'',
            storeID:'',
            groupID:'',
            img:null,
            price:'',
            costPrice:'',
            inventory:'',
            formError:{
                name:'',
                cateID:'',
                storeID:'',
                groupID:'',
                img:'',
                price:'',
                costPrice:'',
                inventory:''
            }
        }
    }
    onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.value;
        if(e.target.files){
            this.setState({
                img:e.target.files[0]
            });
            const render=new FileReader();
            render.onload=(e)=>{
                document.getElementById('image_preview').setAttribute('src',e.target.result);
            }
            render.readAsDataURL(e.target.files[0]);
        }
        this.setState({
            [name]:value
        });
        this.setState({
            storeID:this.props.products.idStore
        })
        var {cateID,price,costPrice,groupID,inventory,formError}=this.state;
        var name1=this.state.name

        formError.name=checkName(name1);
        formError.cateID=checkCategory(cateID);
        formError.price=checkPrice(price);
        formError.costPrice=checkcostPrice(costPrice);
        formError.groupID=checkGroupCate(groupID);
        formError.inventory=checkInventory(inventory);
        
        this.setState({
            formError
        })
        
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.editProduct._id!=null ){
            var {editProduct}=nextProps;
            var groupID=findIdGroupCategoryByIdCategory(nextProps.categoryReducer,editProduct.cateID);
                if(groupID){
                    this.setState({
                        id:editProduct._id,
                        name:editProduct.name,
                        cateID:editProduct.cateID,
                        img:editProduct.img,
                        groupID:groupID,
                        price:editProduct.price,
                        costPrice:editProduct.costPrice,
                        inventory:editProduct.inventory
                    });
                }
        }else{
            this.onClearForm();
        }
        
    }
    componentDidMount(){
        this.props.onFetchGroupCategory();
        this.props.onFetchCategory();
    }
    
    Notification=(type,text)=>{
        new Noty({
            type:type,
            layout:"topRight",
            text:text,
            timeout:1000
        }).show();
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {name,cateID,price,costPrice,groupID,inventory,formError,id,img,storeID}=this.state;
        formError.name=checkName(name);
        formError.cateID=checkCategory(cateID);
        formError.price=checkPrice(price);
        formError.costPrice=checkcostPrice(costPrice);
        formError.groupID=checkGroupCate(groupID);
        formError.inventory=checkInventory(inventory);
        this.setState({
            formError
        });
        const fd=new FormData();
        fd.append('image',img); 
        fd.append('name',name);
        fd.append('price',price);
        fd.append('costPrice',costPrice);
        fd.append('cateID',cateID);
        fd.append('inventory',inventory);
        fd.append('storeID',this.props.products.idStore);
        if(checkAll(formError.name,formError.cateID,formError.groupID,formError.img,formError.price,formError.costPrice,formError.inventory)){
            if(!id){
                this.props.onAddProductSeller(fd);
                this.Notification('success',message.MSG_ADD_PRODUCT_SELLER_SUCCESS);
            }else{
                this.props.onUpdateProductSeller(fd,id);
                this.Notification('success',message.MSG_UPDATE_PRODUCT_SELLER_SUCCESS);
            }
            setTimeout(()=>{
                this.onCloseForm();
            },1100);
        }
        
    }
    onClearForm=()=>{
        this.setState({
            name:"",
            cateID:"",
            storeID:"",
            groupID:'',
            img:null,
            price:"",
            costPrice:"",
            inventory:""
        });
    }
    onCloseForm=()=>{
        this.onClearForm();
        this.props.onCloseForm();
    }
    onShowGroupCategory=(groupCategory)=>{
        var result=[];
        if(groupCategory.length>0){
            result=groupCategory.map((item,index)=>{
                return <option value={item._id} key={index}>{item.name}</option>
            })
        }
        return result;

    }
    onShowCategoryByIdGroupCate=(id)=>{
        var{categoryReducer}=this.props;
        var result=[];
        if(id && categoryReducer.length>0){
            result=categoryReducer.map((item,index)=>{
                if(item.groupCateID==id){
                    return <option value={item._id} key={index}>{item.name}</option>
                } 
            });
        }
        return result;
    }
    // onShowCategoryByIdGroupCate=(id)=>{
    //     if(id){
    //         console.log(id,"id");
    //         this.props.onShowCategory(id);
    //     }
    // }
    // onShowCategoryByGroupCate=(category)=>{
    //     var result=[];
    //     if(category.length>0){
    //         result=category.map((item,index)=>{
    //             return <option value={item._id} key={index}>{item.name}</option>
    //         })
    //     }
    //     return result;
    // }

    render(){
        var {name,price,costPrice,cateID,inventory,formError,groupID,img,id}=this.state;
        var imgDisplay=img?img:"";
        return(
            <Fragment>
                {/* check category when group category have value then it dispatch action and get data from server */}
                {/* {groupID? this.onShowCategoryByIdGroupCate(groupID):''} */}
                <div className="formAction">
                    <div className="formAction_content">
                        <h6>{id? 'Sửa Sản Phẩm' :'Thêm Sản Phẩm'}</h6>
                        <span
                                className="fa fa-close close"
                                onClick={this.onCloseForm}
                        ></span>
                        <div className="form">
                            <form onSubmit={this.onSubmit}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">    
                                                <label >Tên sản phẩm *</label>
                                                <input 
                                                        type="text" 
                                                        className="form-control"
                                                        placeholder="Vui lòng nhập tên sản phẩm" 
                                                        autoComplete="off"
                                                        formNoValidate
                                                        name="name"
                                                        value={name}
                                                        onChange={this.onChange}
                                                    
                                                />
                                                
                                                <p>{formError.name}</p>
                                            </div>
                                            <div className="form-group">    
                                                <label >Danh mục sản phẩm chính*</label>
                                                <select
                                                    className="form-control"
                                                    name="groupID"
                                                    value={groupID}
                                                    onChange={this.onChange}
                                                >
                                                    <option value=''>Danh mục sản phẩm chính</option>
                                                    {this.onShowGroupCategory(this.props.groupCategory)}
                                                </select>
                                                
                                                <p>{formError.groupID}</p>
                                            </div>
                                            <div className="form-group">    
                                                <label >Danh mục sản phẩm phụ *</label>
                                                <select
                                                    className="form-control"
                                                    name="cateID"
                                                    value={cateID}
                                                    onChange={this.onChange}
                                                >
                                                    <option value=''>Danh mục sản phẩm phụ</option>
                                                    {this.onShowCategoryByIdGroupCate(groupID)}
                                                    
                                                </select>
                                                
                                                <p>{formError.cateID}</p>
                                            </div>
                                            <div className="form-group">    
                                                <label >Số lượng sản phẩm tồn kho *</label>
                                                <input 
                                                        type="number" 
                                                        className="form-control"
                                                        placeholder="Vui lòng nhập giá gốc sản phẩm" 
                                                        autoComplete="off"
                                                        formNoValidate
                                                        name="inventory"
                                                        value={inventory}
                                                        onChange={this.onChange}
                                                    
                                                />
                                                <p>{formError.inventory}</p>
                                            </div>
                                            <div className=" text-center">
                                                <div className="button_action">
                                                    <button className="them" type="submit">{id ? 'Sửa':'Thêm'}</button> 
                                                    <button 
                                                        className="huybo"
                                                        onClick={this.onCloseForm}
                                                    >
                                                        Hủy bỏ
                                                    </button>
                                                </div>
                                            </div>
                                
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">    
                                                <label >Gía gốc *</label>
                                                <input 
                                                        type="number" 
                                                        className="form-control"
                                                        placeholder="Vui lòng nhập giá gốc sản phẩm" 
                                                        autoComplete="off"
                                                        formNoValidate
                                                        name="price"
                                                        value={price}
                                                        onChange={this.onChange}
                                                    
                                                />
                                                <p>{formError.price}</p>
                                            </div>
                                            <div className="form-group">    
                                                <label >Gía bán *</label>
                                                <input 
                                                        type="number" 
                                                        className="form-control"
                                                        placeholder="Vui lòng nhập giá gốc sản phẩm" 
                                                        autoComplete="off"
                                                        formNoValidate
                                                        name="costPrice"
                                                        value={costPrice}
                                                        onChange={this.onChange}
                                                    
                                                />
                                                <p>{formError.costPrice}</p>
                                            </div>
                                            <div className="form-group customFile">    
                                                <label 
                                                    for="imagefile">
                                                    {imgDisplay? <img src={imgDisplay} width="100%" id="image_preview"/>:<i className="fa fa-file-image-o"></i>}
                                                </label>
                                                <input 
                                                        id="imagefile"
                                                        accept={acceptFileTypes}
                                                        type="file" 
                                                        className="form-control file"
                                                        autoComplete="off"
                                                        formNoValidate
                                                        onChange={this.onChange}
                                                    
                                                />

                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps=state=>{
    return{
        products:state.products,
        editProduct:state.editProduct,
        groupCategory:state.groupCategory,
        categoryReducer:state.categoryReducer
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        onCloseForm:()=>{
            dispatch(action.closeForm());
        },
        onAddProductSeller:(product)=>{
            dispatch(action.actAddProductSellerRequest(product));
        },
        onUpdateProductSeller:(product,id)=>{
            dispatch(action.actUpdateProductSellerRequest(product,id));
        },
        onFetchGroupCategory:()=>{
            dispatch(actionMain.actFetchAllGroupCategoryRequest());
        },
        onFetchCategory:()=>{
            dispatch(actionMain.actFetchAllCategoryRequest());
        },
        onShowCategory:(id)=>{
            dispatch(actionMain.actFetchAllCategoryByIdGroupRequest(id));
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormAction);