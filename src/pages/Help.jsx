import React from 'react';
import Layout from './Layout';
import styled from 'styled-components'

const withStyle = (component) => styled(component)`
  max-width: 1120px;
  height: 500px;
  padding-top: 80px;
  margin: 0 auto;
  background: url("/img/help.svg") right bottom / 60% 60% no-repeat;
  color: rgb(72, 72, 72);
  font-family: Roboto, sans-serif;
  .help__text {
    margin-top: 100px;
    width: 40%;
    float: left;
  }
  h2 {
    margin-bottom: 20px;
  }
`;

const Help =  ({ className }) => (
  <Layout>
    <div className={`${className}`}>
      <div className="help__text">
        <h2>Aide</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet animi consectetur dolore dolores dolorum exercitationem fugit
          harum natus nulla obcaecati quibusdam quidem quo sed, tenetur voluptatem?
          Doloremque eum quam quo!</p>
      </div>
    </div>
  </Layout>
);

export default withStyle(Help);
