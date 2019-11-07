import React, {Component} from 'react';

class Home extends Component{
    state = {
        data: null
    }

    callBackend = async() => {
        try{

        }catch(err){
            console.log(err);
        }
    }

    //write function for fetch
    render(){
        return(
            <h1>JavaScript and React suck</h1>
        );
    }
}

export default Home;