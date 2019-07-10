import React,{Component} from 'react';
import { styles } from 'ansi-colors';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "home",
      
    }
  }

  switchTab (newTab)   {
    this.setState({ 
      tab : newTab
      
    })
    
  }
  render() {
    var self = this;
    console.log(self.state);
    return (

        <ul className="navigation fixed">
            <li><a onClick={() =>{
              self.switchTab("home")
            } } href="javascript:;"  className={"anim noul bl fas fa-home rel" + (self.state.tab === "home" ? " on" : "")} ><div className="tip abs fontn">Home</div> </a> </li>
            <li><a onClick={() =>{
              self.switchTab("profile")
            } } href="javascript:;"  className={"anim noul bl fas fa-user rel" + (self.state.tab === "profile" ? " on" : "")}><div className="tip abs fontn">Profile</div></a> </li>
            <li><a onClick={() =>{
              self.switchTab("gallery")
            } } href="javascript:;"  className={"anim noul bl fas fa-images rel"+ (self.state.tab === "gallery" ? " on" : "")}><div className="tip abs fontn">Gallery</div></a> </li>
            <li><a onClick={() =>{
              self.switchTab("contact")
            } } href="javascript:;"  className={"anim noul bl fas fa-envelope rel" + (self.state.tab === "contact" ? " on" : "")}><div className="tip abs fontn">Contact</div></a> </li> 
        </ul>
    )
    console.log(self.state);
  }
}

export default Navigation;
