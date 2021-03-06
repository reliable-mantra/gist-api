
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import GistList from "./components/GistList";
import GlobalStyles from "./GlobalStyle";
import { getPublicGists } from "./services/gistService";

const App = () => {
  const [gistList, updateGistList] = useState(null);

  useEffect(() => {
    fetchGistList();
  }, []);

  useEffect(() => {
    if (gistList === null) {
      fetchGistList();
    }
  }, [gistList]);

  const fetchGistList = async () => {
    try {
      const { data: gistList } = await getPublicGists();
      console.log(gistList);
      updateGistList(gistList);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <Wrapper className="App" data-testid="app">
      <Header updateGistList={updateGistList} />
      <GistList gistList={gistList} />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
