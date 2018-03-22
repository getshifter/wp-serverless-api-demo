import React, { Component } from "react";
import $ from "jquery";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    $.ajax({
      url:
        "https://big-golick6527.on.getshifter.io/wp-content/uploads/wp-sls-api/posts.json",
      dataType: "json",
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("#GET Error", status, err.toString());
      }
    });
  }

  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WP Serverless API – Demo</h1>
        </header>
        <div className="container mt-5">
          <div className="row mb-5">
            <div className="col">
              <h3>New app, who dis?</h3>
              This is a React.js demo using JSON data generated using the <a href="https://developer.wordpress.org/rest-api/">
                WP REST API
              </a>, <a href="https://github.com/getshifter/wp-serverless-api">
                WP Serverless API Plugin
              </a>, and a static WordPress site hosted on <a href="https://getshifter.io">
                Shifter
              </a>.
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h3>WP SLS API Endpoints</h3>
              <code>
                https://big-golick6527.on.getshifter.io/wp-content/uploads/wp-sls-api/posts.json
              </code>
              <div>
                <a className="btn btn-primary mt-3" href="https://big-golick6527.on.getshifter.io" role="button">
                  Original Site
                </a> <a className="btn btn-secondary mt-3" href="https://big-golick6527.on.getshifter.io/wp-content/uploads/wp-sls-api/posts.json" role="button">
                  posts.json
                </a> <a className="btn btn-secondary mt-3" href="https://big-golick6527.on.getshifter.io/wp-content/uploads/wp-sls-api/pages.json" role="button">
                  pages.json
                </a> <a className="btn btn-secondary mt-3" href="https://big-golick6527.on.getshifter.io/wp-content/uploads/wp-sls-api/media.json" role="button">
                  media.json
                </a>{" "}
              </div>
            </div>
          </div>
          <h2>Blog Posts</h2>
          <div className="card-deck mt-5">
            {this.state.data.map(function(post) {
              console.log(post);
              return <div className="card" key={post.id}>
                  <div className="card-body">
                    <h5 className="card-title">{post.title.rendered}</h5>
                    <p className="card-text">
                      {$(post.excerpt.rendered).text()}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Blog Post</small>
                  </div>
                </div>;
            })}
          </div>
        </div>
      </div>;
  }
}

export default App;
