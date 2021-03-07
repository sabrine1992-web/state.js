import React from "react";
import Img from "./image1.jpg";
class Profile extends React.Component {
  
   state = {
      timer: 0
   };

   componentDidMount(){
      setInterval(() => this.setState({timer : this.state.timer+1}),1000);
   }

   componentWillUnmount() {
   }
   handleNewDate() {
     this.setState({
       date: new Date()
     });
   }

  render() {
    const {timer} = this.state
 console.log(timer)
    return (
          <div className="App">
         <img src={this.props.personImg}/> 
         <h1> Full Name:{this.props.person.fullName}</h1>
         <h1> Bio: {this.props.person.bio}</h1> 
         <h1> profession: {this.props.person.profession}</h1> 
              <p>timer : {this.state.timer}</p>

         </div> 
    
    );
  }
}
export default Profile;
