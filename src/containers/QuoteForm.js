import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote,} from '../actions/quotes';
import uuid from 'uuid';

class QuoteForm extends Component {

  state = {
    id: uuid(),
    content: '',
    author: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addQuote(this.state)
    this.setState({id: uuid(), content: '', author: ''})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                          onChange={(e)=>this.setState({content: e.target.value})}
                          name="content"
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                          onChange={(e)=>this.setState({author: e.target.value})}
                          name='author'
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(()=>{}, {addQuote})(QuoteForm);
