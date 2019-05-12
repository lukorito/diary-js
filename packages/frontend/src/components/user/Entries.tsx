import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eee;
`;

const Title = styled.p`
  margin: 2em;
`;

const EntriesContainer = styled.div`
  margin: 3em;
`;

const TableContainer = styled.div`
  display: block;
  overflow-x: auto;
  border: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 6px;
  color: #333;
  background: #fff;
  width: 100%;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
`;

const Table = styled.table`
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    
    thead {
      color: #000;
      margin: 50px;
    }
    
    tbody>tr>td {
      padding: 12px 8px;
      vertical-align: middle;
    }
    
    td {
      padding: .75rem;
      vertical-align: top;
      border-top: 1px solid rgba(0,0,0,.06);
    }
`;

const Entries = (props) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(props.entries);
  }, [props.entries]);

  const Entry = (props) => <tbody><tr><td>{props.entry.title}</td></tr></tbody>;

  return (
    <Container>
      <Title>Dashboard</Title>
      <EntriesContainer>
          <h2>Entries</h2>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            {entries.map(entry => {
              return (
                 <Entry entry={entry} key={entry.id}/>
              )
            })}
          </Table>
        </TableContainer>
      </EntriesContainer>
    </Container>
  )
};

export default Entries;
