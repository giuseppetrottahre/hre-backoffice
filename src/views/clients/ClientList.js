import React from 'react';
import {
  List,
  DateField,
  Datagrid,
  TextField,
  EmailField,
  ShowButton,
  TextInput,
  useListContext, 
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  sanitizeListRestProps,
  AutocompleteArrayInput
} from 'react-admin';

import { IconWithTooltip,toChoices,provincie } from '../../utils/constants';

const helperText="Ricerca libera nei campi Nome,Cognome,Email,Azienda,Testo email";




const SupplierFilter = [
  
  <TextInput  source="querysearch"         
  InputLabelProps={{ style: { pointerEvents: "auto" } }}
  label={
    <div>
       Ricerca libera
      <IconWithTooltip infoText={helperText}/>
    </div>
  } alwaysOn />,
      <AutocompleteArrayInput source="provincia" choices={toChoices(provincie)} allowEmpty={false}/>,
];


const ListActions = (props) => {
  const {
      className,
      maxResults,
      ...rest
  } = props;
  const {
      total
  } = useListContext();
  return (
      <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
          <FilterButton />
          <CreateButton/>
          <ExportButton  maxResults={total}  />
      </TopToolbar>
  );
};

export const ClientList= (props) => (
  <List {...props} actions={<ListActions />} filters={SupplierFilter}>
    <Datagrid rowClick="show">
      <TextField source="nome" label= 'Nome' />
      <TextField source="cognome" label= 'Cognome' />
      <EmailField source="email" label='Email'/>
      <TextField source="azienda" label= 'Azienda' />
      <TextField source="provincia" label= 'Provincia' />
      <TextField source="citta" label= 'Città' />
      <TextField source="cap" label= 'C.A.P.' />
      <DateField source="inserttimestamp" label="Data registrazione" showTime={false}  />	
      <ShowButton />
    </Datagrid>
  </List>
);