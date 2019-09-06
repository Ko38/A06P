import React from 'react';

class PostForm extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = this.props.post;
  }

  update(field) {
    return (e) => {
      return this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault(); 
    this.props.action(this.state);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.title} onChange={this.update("title")} />
          <textarea type="text" value={this.state.body} onChange={this.update("body")}>
            </textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
