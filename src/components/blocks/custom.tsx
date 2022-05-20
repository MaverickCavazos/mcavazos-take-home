import React, { useEffect, useState } from "react";
import styled from "styled-components";


const Container = styled.header`
  align-items: center;
  border-bottom: 2px solid #102a43;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Name = styled.textarea`
  background: none;
  overflow: auto;
  outline: none;
  border: none;
  box-shadow: none;
  color: #d64545;
  font-size: 30px;
  font-weight: bold;
`;

interface HeaderProps {
  data?: { title: string};
}

const Custom: React.FunctionComponent<HeaderProps> = ({ data }): JSX.Element => {
  const [title, setTitle] = useState(data?.title || 'Custom Text');
  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    setTitle(data?.title);
  }, [data]);
  return (
    <Container data-testid="header">
      <Name
        placeholder="Custom Text" defaultValue={title}
        onChange={(e) => setTitle(e.currentTarget.value)}/>
      
    </Container>
  );
};

export { Custom };

