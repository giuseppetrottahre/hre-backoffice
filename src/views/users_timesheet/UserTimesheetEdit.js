import React from 'react';
import {
  Edit,
  TextInput,
  SelectInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
  FileField,
  FileInput,regex,
  TextField,DateField,
	SimpleForm
} from 'react-admin';
import {  RaBox,CompactForm } from 'ra-compact-ui';

export const UserTimesheetEdit= (props) => (
  <Edit {...props}>
     <CompactForm layoutComponents={[RaBox]}>
	<TextField source="id_user" disabled label="Id Utente"/>
    	<RaBox display="flex" justifyContent="space-around">
            <TextInput source="nome" label="Nome"/>
            <TextInput source="secondonome" label="Secondo Nome"/>
            <TextInput source="cognome" label="Cognome"/>
	    <DateTimeInput source="starttimestamp" label="Entrata"/>
            <DateTimeInput source="stoptimestamp" label="Uscita"/>
	</RaBox>
    </CompactForm>
</Edit>
);
