import styled from 'styled-components';

export default (component) => styled(component)`
  font-family: Roboto, sans-serif;
  margin: 25px auto;
  border-collapse: collapse;
  border: 1px solid #eee;
  border-bottom: 2px solid #00cccc;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
     0px 5px 10px rgba(0,0,0,0.05),
     0px 10px 10px rgba(0,0,0,0.05),
     0px 15px 10px rgba(0,0,0,0.05);
`;
