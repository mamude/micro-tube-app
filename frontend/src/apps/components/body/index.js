import React, { Component } from "react"
import { MainHeader } from "../header";
import MainSidebar from "../sidebar";
import MainVideos from "../videos";
import MainBody from "./body.style";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.setResults.bind(this);
    this.state = { results: { items: [] }, loading: false };
  }

  setLoading = (newLoading) => {
    this.setState({ loading: newLoading });
  }

  setResults = (newResults) => {
    this.setState({ results: newResults });
  }

  render() {
    return (
      <>
        <MainHeader setResults={this.setResults} setLoading={this.setLoading} />
        <MainBody>
          <MainSidebar />
          <MainVideos videos={this.state.results} loading={this.state.loading} />
        </MainBody>
      </>
    )
  }

}