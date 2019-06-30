import styled from 'styled-components';

export default (component) => styled(component)`
  margin: 20px auto;
  color: rgb(72, 72, 72);
  font-family: Roboto, sans-serif;
  h2 {
    margin-bottom: 20px;
  }
  .explorer__item {
    display: inline-block;
    width: 20%;
    margin-right: 15px;
    height: 72px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px 0;
    cursor: pointer;
  }
  .item__photo {
    width: 30%;
    height: 100%;
    object-fit: cover;
  }
  .item__title {
    display: inline-block;
    height: 100%;
    margin-left: 12%;
    vertical-align: middle;
    font-weight: 800;
    color: rgb(72, 72, 72)
  }
`;
