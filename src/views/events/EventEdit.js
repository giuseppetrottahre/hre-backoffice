import React from 'react';
import {
    Edit,
    TextInput,
    NumberInput,
    BooleanInput,
    DateInput,
    required
  } from 'react-admin';
  import { RaBox,CompactForm } from 'ra-compact-ui';
  import Typography from '@material-ui/core/Typography';
  import RichTextInput from 'ra-input-rich-text';

export const EventEdit= (props) => (
  <Edit {...props}>
    <CompactForm layoutComponents={[RaBox]}> 
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Informazioni </Typography>
    <RaBox display="flex" justifyContent="space-around">
    {/*  <TextInput source="id" disabled />*/}
      <TextInput source="nomeevento" label= 'Nome posizione lavorativa'  validate={[required()]} />
      <DateInput source="datainizio"  label= 'Data Inizio' />
      <DateInput source="datafine" label= 'Data Fine' />
    </RaBox>
    <RaBox display="flex" justifyContent="space-around">
      <NumberInput source="numerominimocandidati" label= 'Numero Minimo Candidati' />
      <NumberInput source="numeromassimocandidati" label= 'Numero Massimo Candidati' />
      <TextInput source="urlcandidature"  label= 'URL per candidature' />
    </RaBox>
      <RaBox display="flex" justifyContent="space-around">
      <BooleanInput source="attivo" label= 'Attivo' />
      <></><></>
      {/*    <TextInput source="descrizione" label= 'Descrizione'  inputProps={{ maxLength: 2000 }}/>*/}
    </RaBox>
     <RichTextInput source="descrizione" label= 'Descrizione'/>
    </CompactForm>
  </Edit>
);
