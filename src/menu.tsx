import React,{Component} from "react";

class Menu extends React.Component<any, any>{
    togglePopup:any;
    constructor(props:any) {
        super(props);
        this.state={
            togglePopup :'hide-menu'
        }
        //console.log('hi');
    }
    render(){
       // let togglePopup = this.props.isMenuOpen =='show-menu'?'show-menu' :'hide-menu';
       // this.setState({togglePopup});
        console.log('--render--'+this.state.togglePopup);
        return(
            <div className={`menu-popup-bg ${this.state.togglePopup}`}>
                <div className="flex-bg"> 
                    <div className="lft">
                        <ul className="nav-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="rgt">
                        <h4>Logicfield</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>  
                </div>
                <div className="close-btn" onClick={this.onPopupClose}>x</div>
                

            </div>
        )
     }
       
        componentDidMount(){
            console.log('--didMount--'+ this.props.isMenuOpen);
            this.onPopupOpen();
        }
        componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {             
            if(prevProps.isMenuOpen !== this.props.isMenuOpen)   {
                this.onPopupOpen(); 
            }          
        }
        onPopupOpen=()=>{
            let togglePopup = this.props.isMenuOpen =='show-menu' ? 'show-menu' : 'hide-menu';
            this.setState({togglePopup:togglePopup});
        }
        onPopupClose=()=>{
            this.setState({togglePopup:'hide-menu'});
        }

}
export default Menu;
//obj:{isMenuOpen:Boolean}
/*
<div className="close-btn" onClick={()=>{
                console.log('hi');
                
                Menu({isMenuOpen:true})
            }}>x</div> 
function Menu(obj:{isMenuOpen: Boolean}){
    console.log(obj.isMenuOpen);
    let isMenuPopupOpen:String= (obj.isMenuOpen) ? 'show-menu': 'hide-menu';  
    console.log(isMenuPopupOpen);
    return(
            <div className={`menu-popup-bg ${isMenuPopupOpen}`}>
                <div>
                    <div className="lft">
                        <ul className="nav-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="rgt">
                        <h4>Logicfield</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>  
                </div>
                <div className="close-btn" onClick={()=>{
                    console.log('hi');
                    //this.setState({menuNavigation:true});
                    Menu({isMenuOpen:true})
                }}>x</div> 


            </div>
        )
}
export default Menu;


*/
/*
                <!--
                <div className="close-btn" onClick={()=>{
                    console.log('hi');
                    this.setState({isMenuPopupOpen:'hide-menu'});                                        
                        console.log(this.state.isMenuPopupOpen);
                    }                    
                }> 
                1x1 </div>              -->
interface IProps {
    isMenuOpen: Boolean
}

interface IState {
    isMenuPopupOpen: String
}
class Menu extends React.Component <IProps,IState>{   

    constructor(props:IProps){
        super(props)
        this.state ={
            isMenuPopupOpen:'hide-menu'
        }
        
    } 
    componentMenuGrid(){
        const isMenuPopupOpen:String= (this.props.isMenuOpen) ? 'show-menu': 'hide-menu';  
        this.setState({isMenuPopupOpen});
    }
    render(){      

        console.log(this.props.isMenuOpen,'ismenyopen');
        console.log(this.state.isMenuPopupOpen);
        return(
            <div className={`menu-popup-bg ${this.state.isMenuPopupOpen}`}>
                <div>
                    <div className="lft">
                        <ul className="nav-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="rgt">
                        <h4>Logicfield</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>  
                </div>
                <div className="close-btn" onClick={()=>{
                    console.log('hi');
                    this.setState({isMenuPopupOpen:'hide-menu'});
                    //this.state.isMenuPopupOpen= 'hide-menu';                        
                        console.log(this.state.isMenuPopupOpen);
                    }                    
                }> 
                1x1 </div>              
            </div>
        )
    }
}
export default Menu;
*/