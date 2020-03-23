import React from 'react';


class SearchBar extends React.Component{
    state={term: ''};

// onInputChange = (event) =>{
// console.log(event.target.value);
// };
onFormSubmit = (event) =>{
event.preventDefault();
// console.log(this.state.term)
//onSubmit from App component
this.props.onSubmit(this.state.term);
};

render(){
    return(
<div className="ui segment">
    <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
            <label>Image Search</label>
        {/* <input type="text" onChange={this.onInputChange}/> */}
        <input type="text" value={this.state.term} onChange={(event) => this.setState({term: event.target.value})}/>
        </div>
        
    </form>
</div>
    );
}

};
export default SearchBar;