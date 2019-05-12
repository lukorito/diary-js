import React, { useEffect } from "react";
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import Sidebar from './Sidebar';
import { getUserObject } from "../../utils/authHelper";
import Entries from "../user/Entries";


const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Dashboard = (props) => {
  const user = getUserObject();

  const { entries, fetchEntries } = props;

  useEffect(() => {
    fetchEntries(JSON.parse(user))
  }, []);

  if (user){
    return(

      <Container>
        <Sidebar/>
        <Entries entries={entries}/>


      </Container>
    )
  } else {
    return (
      <Redirect to='/'/>
    )
  }
};
