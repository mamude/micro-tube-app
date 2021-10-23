import React, { useState } from "react"
import axios from "axios"
import { HeaderTop, HeaderLeft, HeaderSearchForm, HeaderSearchInput, HeaderSearchButton, HeaderIcon, HeaderRight, HeaderLogo } from "./header.style";

import logo from "../../images/logo.png"

export function MainHeader(props) {
  const [query, setQuery] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_API;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLoading(true);
    axios.post(backendUrl + "/search", {
      query: query
    }).then(function (response) {
      props.setLoading(false);
      props.setResults(response.data.results);
    })
  }

  if (!query) {
    setQuery("Brasil")
    // axios.post(backendUrl + "/search", {
    //   query: query
    // }).then(function (response) {
    //   props.setLoading(false);
    //   props.setResults(response.data.results);
    // })
  }

  return (
    <HeaderTop>
      <HeaderLeft>
        <HeaderIcon className="material-icons">menu</HeaderIcon>
        <HeaderLogo src={logo} alt="Micro Tube" />
      </HeaderLeft>
      <HeaderSearchForm onSubmit={handleSubmit}>
        <HeaderSearchInput name="query" value={query} placeholder="Search" onChange={e => setQuery(e.target.value)} />
        <HeaderSearchButton>
          <HeaderIcon className="material-icons">search</HeaderIcon>
        </HeaderSearchButton>
      </HeaderSearchForm>
      <HeaderRight>
        <HeaderIcon className="material-icons display-this">search</HeaderIcon>
        <HeaderIcon className="material-icons">videocam</HeaderIcon>
        <HeaderIcon className="material-icons">apps</HeaderIcon>
        <HeaderIcon className="material-icons">notifications</HeaderIcon>
        <HeaderIcon className="material-icons display-this">account_circle</HeaderIcon>
      </HeaderRight>
    </HeaderTop >
  )
};

