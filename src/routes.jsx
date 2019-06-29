import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route } from './components/Route';
import Header from './components/Header';
import CreditsList from './pages/CreditsList';
import Home from './pages/Home';
import Help from './pages/Help';
import Agencies from './pages/Agencies';
import BankerList from './pages/admin/BankerList';
import BankerDetails from './pages/admin/BankerDetails';
import ClientList from './pages/admin/ClientList';
import ClientDetails from './pages/admin/ClientDetails';
import AddBanker from './pages/admin/AddBanker';
import MySpace from './pages/MySpace';
import AddCredit from './pages/admin/AddCredit';
import CreditDetails from './pages/CreditDetails';
import CreditProposal from './pages/CreditProposal';
import CreditProposalsList from './pages/admin/CreditProposalsList';
import CreditProposalDetails from './pages/admin/CreditProposalDetails';

const AppRouter =  ({ isAdmin }) => (
  <BrowserRouter>
    <Switch>
      /* --------------------- ANONYMOUS ----------------------------*/
      <Route path="/team-will-bank" component={Home} exact />
      <Route path="/team-will-bank/help" component={Help} />
      <Route path="/team-will-bank/agencies-list" component={Agencies} />
      <Route path="/team-will-bank/credits-list" component={CreditsList} />
      <Route path="/team-will-bank/credit-details/:creditId" component={CreditDetails} />
      /* --------------------- CLIENT ----------------------------*/
      <Route path="/team-will-bank/my-space" component={MySpace} exact />
      <Route path="/team-will-bank/my-space/credit-details/:creditId" component={Header} />
      <Route path="/team-will-bank/my-space/credits-proposals" component={CreditsList} />
      <Route path="/team-will-bank/my-space/submit-credit-proposal/:creditId" component={CreditProposal} />
      <Route path="/team-will-bank/my-space/credit-proposal/:creditId" component={CreditProposal} />
      <Route path="/team-will-bank/my-space/update-credit/:creditId" component={CreditsList} />
      /* --------------------- ADMIN ----------------------------*/
      <Route path="/team-will-bank/admin" component={Home} isAuthenticated={isAdmin} redirectTo={"/team-will-bank/"}   exact />
      <Route path="/team-will-bank/admin/bankers-list" isAuthenticated={isAdmin} redirectTo={"/team-will-bank/"}  component={BankerList} />
      <Route path="/team-will-bank/admin/clients-list" isAuthenticated={isAdmin} redirectTo={"/team-will-bank/"}  component={ClientList} />
      <Route path="/team-will-bank/admin/client/:clientId" isAuthenticated={isAdmin} redirectTo={"/team-will-bank/"} component={ClientDetails} />
      <Route path="/team-will-bank/admin/banker/:bankerId" isAuthenticated={isAdmin} redirectTo={"/team-will-bank/"} component={BankerDetails} />
      <Route path="/team-will-bank/admin/credits-list" isAuthenticated={isAdmin} redirectTo={"/team-will-bank/"} component={CreditsList} />
      <Route path="/team-will-bank/admin/credit-proposal-list" isAuthenticated={true} redirectTo={"/team-will-bank/"} component={CreditProposalsList} />
      <Route path="/team-will-bank/admin/credit-proposal/:proposalId" isAuthenticated={true} redirectTo={"/team-will-bank/"} component={CreditProposalDetails} />
      <Route path="/team-will-bank/admin/add-credit" isAuthenticated={true} redirectTo={"/team-will-bank/"} component={AddCredit} />
      <Route path="/team-will-bank/admin/add-banker" isAuthenticated={isAdmin} redirectTo={"/team-will-bank/"} component={AddBanker} />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = ({ auth: { as: role, isAuthenticated } }) => ({
  isAdmin: isAuthenticated && role === 'banker',
});

export default connect(mapStateToProps)(AppRouter);
