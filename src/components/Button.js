import React from 'react';

class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {column: 'todo'};

        this.handleClick = this.handleClick.bing(this);

    }

    handleClick(){
        this.setState(state =>({
            

        }));
    }

}