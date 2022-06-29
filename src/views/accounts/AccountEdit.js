import React from 'react';
import {
    Edit,
    TextInput,
    TextField,
    SelectInput
  } from 'react-admin';
  import { roles } from '../../utils/constants';

  import {  RaBox,CompactForm } from 'ra-compact-ui';
  import Typography from '@material-ui/core/Typography';

export const AccountEdit= (props) => (
  <Edit {...props}>
   <CompactForm layoutComponents={[RaBox]}> 
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Informazioni </Typography>
    <RaBox display="flex" justifyContent="space-around">
      <TextField source="id" disabled />
      <TextInput source="username" label= 'Username' disabled/>
      <TextInput source="email" label='Email' />
      <SelectInput source="permissions" label= 'Ruolo' choices={roles} />
    </RaBox>
    </CompactForm>  
  </Edit>
);