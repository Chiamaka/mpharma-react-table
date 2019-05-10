import React, { Component, useState } from 'react';

import Table from 'mpharma-react-table';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from './assets/MoreVertIcon';
import { withStyles } from '@material-ui/core/styles';

// const headers = [
//   { title: 'Name', align: 'left', dataIndex: 'name', width: 200 },
//   { title: 'Country', align: 'left', dataIndex: 'country' },
//   { title: 'Age', align: 'left', dataIndex: 'age' },
//   { title: 'Actions', align: 'right' }
// ];

// const data = [
//   {
//     name: 'Chiamaka',
//     country: 'Nigeria',
//     age: 25
//   },
//   {
//     name: 'Nick',
//     country: 'Ghana',
//     age: 30
//   },
//   {
//     name: 'Alfred',
//     country: 'USA',
//     age: 30
//   }
// ];

const headers = [
  { title: 'Name', align: 'left', dataIndex: 'name', width: 200 },
  { title: 'Status', align: 'left', dataIndex: 'is_active' },
  { title: 'Country', align: 'left', dataIndex: 'country' },
  { title: 'Email', align: 'left', dataIndex: 'email' },
  { title: 'Created At', align: 'left', dataIndex: 'created_at' },
  { title: 'Actions', align: 'right' }
];

const data = [
  {
    id: 1,
    username: 'larry',
    name: '',
    telephone_number: '',
    email: 'larry@mpharma.com',
    is_staff: true,
    is_superuser: true,
    is_active: true,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/1/',
    facility_id: null,
    pin: '',
    last_login: '2019-05-06T14:24:30.238928Z',
    date_joined: '2019-04-30T11:13:11.378236Z',
    created_at: '2019-04-30T11:13:11.518033Z',
    updated_at: '2019-04-30T11:13:11.518053Z',
    deleted_at: null,
    country: '',
    roles: []
  },
  {
    id: 3,
    username: 'chiamaka',
    name: 'Chiamaka',
    telephone_number: '',
    email: '',
    is_staff: false,
    is_superuser: false,
    is_active: true,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/3/',
    facility_id: null,
    pin: '',
    last_login: null,
    date_joined: '2019-05-06T15:02:49.813354Z',
    created_at: '2019-05-06T15:02:50.056200Z',
    updated_at: '2019-05-06T15:05:57.211392Z',
    deleted_at: null,
    country: 'GH',
    roles: []
  },
  {
    id: 4,
    username: 'percy',
    name: 'Percy',
    telephone_number: '',
    email: '',
    is_staff: false,
    is_superuser: false,
    is_active: true,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/4/',
    facility_id: null,
    pin: '',
    last_login: null,
    date_joined: '2019-05-06T15:03:28.704946Z',
    created_at: '2019-05-06T15:03:28.893956Z',
    updated_at: '2019-05-06T15:06:08.075364Z',
    deleted_at: null,
    country: 'GH',
    roles: []
  },
  {
    id: 2,
    username: 'tk',
    name: 'Terrence',
    telephone_number: '',
    email: '',
    is_staff: false,
    is_superuser: false,
    is_active: true,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/2/',
    facility_id: null,
    pin: '',
    last_login: null,
    date_joined: '2019-05-06T14:30:56.259506Z',
    created_at: '2019-05-06T14:30:56.440644Z',
    updated_at: '2019-05-06T15:06:17.819346Z',
    deleted_at: null,
    country: 'GH',
    roles: []
  },
  {
    id: 6,
    username: 'NIn1_888',
    name: '',
    telephone_number: '+233243498949',
    email: 'percy@gmail.com',
    is_staff: true,
    is_superuser: true,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/6/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      '0DiQbjJqmLvWtG4uaFBjvmX/KpgLgYXCfzrNWTakDMMlO6o94Q1Tvhvq7wApTYjdmnBBau1pwc/WBeU37T6ecPSTKKy3GcETNUk6jGLhNESWxmNSVKEypdvjStJEI7P3',
    last_login: null,
    date_joined: '2019-05-06T16:58:42.725749Z',
    created_at: '2019-05-06T16:58:42.880622Z',
    updated_at: '2019-05-06T16:58:42.880640Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 7,
    username: 'nii',
    name: '',
    telephone_number: '+233243498949',
    email: 'percy@gmail.com',
    is_staff: true,
    is_superuser: true,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/7/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      'y48QcXwETsF092xeDBOwjCxRhajfXwl5RoreqoZ/Se/VMA1yDn9aO+Z5axCif6ZNJTr0CM95Lw/QHXVtHZ4NxQ6+JdxY1Uk+D/XTcEUq8iFYG/NU856Myb8rUjXAoulc',
    last_login: null,
    date_joined: '2019-05-06T16:59:00.307877Z',
    created_at: '2019-05-06T16:59:00.462821Z',
    updated_at: '2019-05-06T16:59:00.462839Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 8,
    username: 'nII',
    name: '',
    telephone_number: '+233243498949',
    email: 'percy@gmail.com',
    is_staff: true,
    is_superuser: true,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/8/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      'ePS+PVcPNmFY0dDqItgZhRjf3ae9PM0nV9ccCJrXg10Pv9Z8nc0OSyrUkVuZ4+fhwQ6uz5vzGzxE+opT70Hjapq4Q5CszOzDLy0GzV+6Bv4ukoBdI7URdOF9OFxfYtxS',
    last_login: null,
    date_joined: '2019-05-06T16:59:09.941832Z',
    created_at: '2019-05-06T16:59:10.096345Z',
    updated_at: '2019-05-06T16:59:10.096363Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 9,
    username: 'NII',
    name: '',
    telephone_number: '+233243498949',
    email: 'percy@gmail.com',
    is_staff: true,
    is_superuser: true,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/9/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      'sn0PEz89Ftaan3/3p2iJTuQ+mqgeidMRZFi4AEn1S5Duz/datzxQeV0vXtMLmBNzGa1SfpFMt9JX8FOmKXHzG4LTcnHeBwHSSAVr8bGBdO3PJaF4AXlOCqeqQtKr1GqM',
    last_login: null,
    date_joined: '2019-05-06T17:00:09.550249Z',
    created_at: '2019-05-06T17:00:09.718259Z',
    updated_at: '2019-05-06T17:00:09.718276Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 10,
    username: 'Nii',
    name: '',
    telephone_number: '+233243498949',
    email: 'percy@gmail.com',
    is_staff: true,
    is_superuser: true,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/10/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      'Wh9zVKTj0Wtdc5auT02kluRtOLsYDDV6B9R1ilxc0xG4R7Lhsi0f/Cs0oku3QgDoq48iHxCfyj17VIbLP2PS4QilVVaCioQOV0VVYLtgo2Fau2ICMVX/3CqHKyYWdf7v',
    last_login: null,
    date_joined: '2019-05-06T17:00:18.884392Z',
    created_at: '2019-05-06T17:00:19.079054Z',
    updated_at: '2019-05-06T17:00:19.079072Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 12,
    username: 'Ama',
    name: '',
    telephone_number: '+233243498949',
    email: 'percy@gmail.com',
    is_staff: true,
    is_superuser: false,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/12/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      'qmZdRV7sFQ7jzx1nrlcViJ5ePSwEtaxE6qGdQ4NuC4d2MeR4ZJ9yVBwyrAh5iZcGjckqcaDf2MumfL9oJb43Qcsp0GXNYAbG6M9wI4gfrKef4qV6C5bhijogi1lz/fGt',
    last_login: null,
    date_joined: '2019-05-06T18:35:27.505236Z',
    created_at: '2019-05-06T18:35:27.665875Z',
    updated_at: '2019-05-06T18:35:27.665893Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 13,
    username: 'apsu-kumasi',
    name: 'Ama Nii',
    telephone_number: '+233243498949',
    email: 'percy@gmail.com',
    is_staff: true,
    is_superuser: false,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/13/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      'LWkX9t1n7yn2eUyNp6Q0mHIyuCq5A9PqASncC+NhMRYLEUD35W+QhDiWTTIOjyYkUk45ekxEficPUYgYgZss07gc312b64zcw4VJTQ2of/MDiPLVC0tHIaSrZDG2oR8+',
    last_login: null,
    date_joined: '2019-05-06T19:26:59.523192Z',
    created_at: '2019-05-06T19:26:59.707094Z',
    updated_at: '2019-05-08T09:07:55.021919Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 11,
    username: 'fish',
    name: 'Pee Bos',
    telephone_number: '+233243498949',
    email: 'percy@gmail.com',
    is_staff: true,
    is_superuser: false,
    is_active: true,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/11/',
    facility_id: '',
    pin:
      'CyznDgwe4OsSbH0qgQSYMy2ye3gS6qtq+DE9wvLK+itAozt+5RzCeEE3hSclXSJgE9Y74iq4W4/viKkf2s/Z7Q2cf6bIYh1Lk+DlgO7rFM3pnco5i7MmH5MliqFSoS2u',
    last_login: null,
    date_joined: '2019-05-06T17:13:38.234725Z',
    created_at: '2019-05-06T17:13:38.380358Z',
    updated_at: '2019-05-08T09:45:31.608444Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 5,
    username: 'adjoa',
    name: '',
    telephone_number: '',
    email: '',
    is_staff: true,
    is_superuser: true,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/5/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      '0QFTMqXpDpxVa5VmiEfS95c+6WuttfX1xgZZ6oaGXd8i/Zas5lnGOBpBltti0vkFIKb/NXipRtxyko+GE9r/Ax8Jm6R+0qz5hD4BPchRoFRmjc1cbnyShatDGKOCrkU0',
    last_login: null,
    date_joined: '2019-05-06T16:58:19.429280Z',
    created_at: '2019-05-06T16:58:19.614555Z',
    updated_at: '2019-05-08T13:56:45.875069Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  },
  {
    id: 14,
    username: 'john',
    name: 'John Doe',
    telephone_number: '+233552333333',
    email: 'john.doe@gmail.com',
    is_staff: true,
    is_superuser: true,
    is_active: false,
    url: 'http://10.0.0.80:31220/users-ms/ums/users/14/',
    facility_id: '5bc5d7149e31280026863a40',
    pin:
      'tQLXAopmUPoaGgwpKwzF8s738w7KGDSow5z9E9QrMljz9eE6XYiq6yzGwrfet02uQnRVDlq4aauonkvQ7h5pVhmsP6NcC0yhlGjd8p1hbKQDig0SGUB0j0J+jkZxBxTc',
    last_login: null,
    date_joined: '2019-05-08T14:39:31.314734Z',
    created_at: '2019-05-08T14:39:31.499638Z',
    updated_at: '2019-05-08T14:39:31.499655Z',
    deleted_at: null,
    country: '',
    roles: [
      {
        id: 1,
        name: 'Facility Cashier'
      }
    ]
  }
];

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
    return (
      <Table
        headers={headers}
        data={data}
        renderIcon={data => <StyledIcon data={data} />}
        tableStyle={{ width: '100%' }}
      />
    );
  }
}
