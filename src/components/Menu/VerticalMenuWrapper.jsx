import React, { useState } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import Menu from './Menu';
import withStyle from './withStyleVerticalMenu';
import { compose } from 'redux';
import { openModal } from '../../actions/uiActions';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/authActions';


const VerticalMenuWrapper = ({ className, openModal, history, logout }) => {
  const [menu, setMenu] = useState(false);
  return(
    <div className={`${className}`}>
      <button className={menu ? 'menu__logo' : 'menu__logo inactive'} type="button" onClick={() => setMenu(!menu)} />
      <Menu right classNames={menu ? ['menu--active'] : ['menu--inactive']}>
        <MenuItem title="Employees" className='menu-item' onClick={() => history.push('/team-will-bank/admin/bankers-list')}/>
        <MenuItem title="Credits" className='menu-item'  onClick={() => history.push('/team-will-bank/admin/credits-list')}/>
        <MenuItem title="Demandes Credits" className='menu-item'  onClick={() => history.push('/team-will-bank/admin/credit-proposal-list')}/>
        <MenuItem title="Logout"  className='menu-item'  onClick={logout} />
      </Menu>
    </div>
  );
};

export default compose(connect(null, { openModal, logout  }), withRouter,withStyle)(VerticalMenuWrapper);
