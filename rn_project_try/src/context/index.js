import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        stage:1,
        players:[],
        result:''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState, props)=>({
            players:[
                ...prevState.players,
                name
            ]
        }))
    }

    removePlayerHandler = (idx) => {
        let newArray = this.state.players;
        newArray.splice(idx,1);
        this.setState({players:newArray})
    }


    render(){
        return(
            <>
                <MyContext.Provider
                    value={{
                        state: this.state,
                        addPlayer: this.addPlayerHandler,
                        removePLayer: this.removePlayerHandler
                        
                    }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}

export {
    MyContext,
    MyProvider
}