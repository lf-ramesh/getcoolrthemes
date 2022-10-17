import React from "react";
import { Interface } from "readline";
import appLogo from "./images/getcoolthemes-img.png";
import hamburger from "./images/hamburger.svg";
import Menu from "./menu";
interface IProps{

}
interface IState{
    menuNavigation : String
}
class Header extends React.Component <IProps,IState>{

    
    constructor(props:any) {
        super(props)
        this.state={
            menuNavigation : 'hide-menu'
        }
    }

    menuNavigationPopup=()=>{
        //console.log('checking');
        //this.setState(menuNavigation) = !this.menuNavigation;
        const menuNavigation =  this.state.menuNavigation =='hide-menu' ? 'show-menu':'hide-menu';
        this.setState({menuNavigation});
        console.log(this.state.menuNavigation,menuNavigation);
    }

    onChangeComp=()=>{
        console.log('hi');
        this.setState({menuNavigation:'hide-menu'});
    }

    render(){
        //let popUpClass:Boolean = (this.menuNavigation) ? true : false ;
        return(
            <>
            <header className="header-section">
                <div className="lft">
                    <img src={appLogo} className="logo-img"/>
                </div>              
               
            </header>  
            {/* <Menu isMenuOpen={this.state.menuNavigation} onChange={this.onChangeComp}  /> */}
            </>
        )
    }
}

export default Header ;