import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '../assets/MoreVertIcon';
import { withStyles } from '@material-ui/core/styles';

function Icon({ classes, data }) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleName() {
    handleClose();
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  return (
    <td style={styles.root}>
      <IconButton
        aria-owns={open ? 'menu' : undefined}
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        style={styles.wrapper}
        disableRipple={true}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem classes={{ root: classes.menuItem }} onClick={handleName}>
          Edit details
        </MenuItem>
        <MenuItem classes={{ root: classes.menuItem }} onClick={handleName}>
          View profile
        </MenuItem>
      </Menu>
    </td>
  );
}

const styles = {
  root: {
    float: 'right'
  },
  wrapper: {
    fill: '#999999'
  },
  menuItem: {
    fontSize: 14,
    letterSpacing: 0.71
  }
};

const MoreActions = withStyles(styles)(Icon);
export default MoreActions;
