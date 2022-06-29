import React from 'react';
import {
  Create,
  TextInput,
  SelectInput
} from 'react-admin';

import { roles } from '../../utils/constants';
import { RaBox,CompactForm } from 'ra-compact-ui';
import Typography from '@material-ui/core/Typography';
export const AccountCreate= (props) => (
  <Create {...props}>
       <CompactForm layoutComponents={[RaBox]}> 
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Nuovo utente </Typography>
    <RaBox display="flex" justifyContent="space-around">
    <TextInput source="username" label= 'Username' />
    <TextInput source="email" label='Email' />
    <SelectInput source="permissions" label= 'Ruolo' choices={roles} />
    </RaBox>
    </CompactForm> 
  </Create>
);