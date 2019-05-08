import React, { Component } from 'react';

import '../css/styles.css';

class Header  extends Component {
    
    state = {
        // active:'active',
        keywords: ''
    }
   

    inputChangeHandler = (event) =>
    {
        // const value = event.target.value === '' ? 'active' : 'not-active';
        this.setState({
            // active:value,
            keywords: event.target.value
        });
    }

    render()
    {
        // const style = {
        //     background: 'red'
        // }

        // if(this.state.keywords !== '')
        // {
        //     style.background = 'blue'
        // }
        // else 
        // {
        //     style.background = 'red'
        // }

        return (
            <header>
              {/*</header> className={this.state.active}>*/}
                <div 
                    className="logo"
                    onClick={ ()=> console.log('I was click')}
                    >Logo</div>
                <input 
                    type="text" 
                    onChange= {this.inputChangeHandler}/>
            </header>
        )
    }

 }

export default Header;