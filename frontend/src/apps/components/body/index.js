import React, { Component } from "react"
import axios from "axios"
import { MainHeader } from "../header";
import MainSidebar from "../sidebar";
import MainVideos from "../videos";
import MainBody from "./body.style";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.setLoading.bind(this);
    this.setResults.bind(this);
    this.state = { results: { items: [] }, loading: false };
  }

  setLoading = (newLoading) => {
    this.setState({ loading: newLoading });
  }

  setResults = (newResults) => {
    this.setState({ results: newResults });
  }

  firstLoad = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_API;
    axios.post(backendUrl + "/search", {
      query: "Brazil"
    }).then((response) => {
      const items = response.data.results;
      this.setResults(items);
      this.setLoading(false);
    })
  }

  componentDidMount() {
    this.setLoading(true);
    this.firstLoad();
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