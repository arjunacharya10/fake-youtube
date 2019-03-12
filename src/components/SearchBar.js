import React from 'react';

class SearchBar extends React.Component{

    state={
        term: ''
    };

    onInputChange=(event)=>{
        this.setState({term: event.target.value});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmitForm(this.state.term);
    }

    render(){
    return(
        <div className="search-bar ui segment" style={{background: 'black'}}>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label style={{color:'white'}}>Video Search</label><br></br>
                    <input
                        style={{border: '1px solid white',background: 'black',color:'white'}} 
                        type="text" 
                        value={this.state.term} 
                         onChange={this.onInputChange}></input>
                </div>
            </form>
        </div>
    );
    }
}

export default SearchBar;