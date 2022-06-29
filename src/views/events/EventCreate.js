import React from 'react';
import {
  Create,
  TextInput,
  NumberInput,
  BooleanInput,
  DateInput,
  required
} from 'react-admin';
import { RaBox,CompactForm } from 'ra-compact-ui';
import Typography from '@material-ui/core/Typography';
import RichTextInput from 'ra-input-rich-text';

export const EventCreate= (props) => (
  <Create {...props}>
   <CompactForm layoutComponents={[RaBox]}> 
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Nuovo Evento </Typography>
    <RaBox display="flex" justifyContent="space-around">
      <TextInput source="nomeevento"  label= 'Nome posizione lavorativa'  validate={[required()]}/>
      <DateInput source="datainizio"  label= 'Data Inizio' />
      <DateInput source="datafine"  label= 'Data Fine' />

    </RaBox>
    <RaBox display="flex" justifyContent="space-around">

  {/*    <TextInput source="descrizione" options={{ label: 'Descrizione' }} inputProps={{ maxLength: 2000 }}/>*/}
      <NumberInput source="numerominimocandidati" label= 'Numero Minimo Candidati'/>
      <NumberInput source="numeromassimocandidati" label= 'Numero Massimo Candidati'/>
     <TextInput source="urlcandidature" label= 'URL per candidature' />
    </RaBox>
    <RaBox display="flex" justifyContent="space-around">
    <BooleanInput source="attivo" label= 'Attivo' />
    <></><></>
    </RaBox>
    <RaBox display="flex" justifyContent="space-around" flexDirection="column">
    <RichTextInput source="descrizione" label= 'Descrizione' fullWidth={true}/>
    </RaBox>
    </CompactForm>
  </Create>
);
