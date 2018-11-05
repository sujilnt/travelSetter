import React,{Component} from "react";
const ButtonWrapper = WrappedComponent =>{
    return class extends Component{
        state={
            loading : true
        };
        render(){
            return(
                <WrappedComponent/>
            )
        }

    }
};
export default ButtonWrapper;
