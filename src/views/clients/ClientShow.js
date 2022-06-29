import React from 'react';
import {
  Show,
  DateField,
  TextField,
  EmailField,
  FileField,
  SimpleShowLayout
} from 'react-admin';
import { BoxedShowLayout, RaBox } from 'ra-compact-ui';
import Typography from '@material-ui/core/Typography';

export const ClientShow= (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <BoxedShowLayout>
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Informazioni </Typography>

    <RaBox flex="0 0 100%" display="flex" flexDirection="row" justifyContent="space-between">
      <TextField source="nome" label= 'Nome' />
      <TextField source="cognome" label= 'Cognome' />
      <EmailField source="email" label='Email'/>
      <TextField source="azienda" label= 'Azienda' />
      <TextField source="provincia" label= 'Provincia' />
      <TextField source="citta" label= 'Città' />
      <TextField source="cap" label= 'C.A.P.' />
      <TextField source="noteaggiuntive"  label= 'Note aggiuntive' />
      <FileField source="filepresentazione" title="Presentazione" target="_blank"/>
      <DateField source="inserttimestamp" label="Data registrazione" showTime={false}  />	
      </RaBox>
      </BoxedShowLayout>
    </SimpleShowLayout>
  </Show>
);