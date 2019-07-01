import React, { useState } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import Menu from './Menu';
import withStyle from './withStyleVerticalMenu';
import { compose } from 'redux';
import { openModal } from '../../actions/uiActions';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/authActions';


const VerticalMenuWrapper = ({ className, isDirector, isBanker , history, logout }) => {
  const [menu, setMenu] = useState(false);
  return(
    <div className={`${className}`}>
      <button className={menu ? 'menu__logo' : 'menu__logo inactive'} type="button" onClick={() => setMenu(!menu)} />
      <Menu right classNames={menu ? ['menu--active'] : ['menu--inactive']}>
        {isDirector && <MenuItem title="Dashboard" className='menu-item'  onClick={() => history.push('/team-will-bank/admin')}/>}
        {isDirector && <MenuItem title="Employees" className='menu-item' onClick={() => history.push('/team-will-bank/admin/bankers-list')}/>}
        {isBanker && <MenuItem title="Credits" className='menu-item'  onClick={() => history.push('/team-will-bank/admin/credits-list')}/>}
        <MenuItem title="Demandes Credits" className='menu-item'  onClick={() => history.push('/team-will-bank/admin/credit-proposal-list')}/>
        <MenuItem title="Logout"  className='menu-item'  onClick={logout} />
      </Menu>
    </div>
  );
};

const mapStateToProps = ({ auth: { as: role, isAuthenticated } }) => ({
  isDirector: isAuthenticated && role === 'director',
  isBanker: isAuthenticated && role === 'banker'
});

export default compose(connect(mapStateToProps, { openModal, logout  }), withRouter,withStyle)(VerticalMenuWrapper);
