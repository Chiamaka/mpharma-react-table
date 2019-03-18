import React, { Component, useState } from 'react';

import Table from 'mpharma-react-table';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from './assets/MoreVertIcon';
import { withStyles } from '@material-ui/core/styles';

const headers = [
  { title: 'Facility', align: 'left', dataIndex: 'facility', width: 200 },
  { title: 'Country', align: 'left', dataIndex: 'country' },
  { title: 'Status', align: 'left', dataIndex: 'status' },
  { title: 'Products in Use', align: 'left', dataIndex: 'products_in_use' },
  { title: 'Last recorded sale', align: 'left', dataIndex: 'last_recorded_sale' },
  { title: 'Actions', align: 'right' }
];

const data = [
  {
    facility: 'Alpha Facility',
    country: 'Zimbabwe',
    status: 'Pending review',
    products_in_use: 'VMI',
    last_recorded_sale: '10 days ago'
  },
  {
    facility: 'Beta Facility',
    country: 'Ghana',
    status: 'Pending review',
    products_in_use: 'VMI',
    last_recorded_sale: '10 days ago'
  },
  {
    facility: 'Delta Facility',
    country: 'Nigeria',
    status: 'Active',
    products_in_use: 'VMI',
    last_recorded_sale: '10 days ago'
  }
];

function Icon({ classes }) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
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
        <MenuItem classes={{ root: classes.menuItem }} onClick={handleClose}>
          Add a user to this facility
        </MenuItem>
        <MenuItem classes={{ root: classes.menuItem }} onClick={() => {}}>
          View users
        </MenuItem>
        <MenuItem classes={{ root: classes.menuItem }} onClick={handleClose}>
          Activate facility
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
    fill: '#666666'
  },
  menuItem: {
    fontSize: 14,
    letterSpacing: 0.71
  }
};

const StyledIcon = withStyles(styles)(Icon);

export default class App extends Component {
  render() {
    return <Table headers={headers} data={data} renderIcon={() => <StyledIcon />} tableStyle={{ width: '100%' }} />;
  }
}
