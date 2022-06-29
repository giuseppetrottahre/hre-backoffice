import React from 'react';
import {
  List,
  DateField,
  Datagrid,
  TextField,
  EmailField,
  FileField,
  ShowButton,
  TextInput,
  useListContext, 
  TopToolbar,
  ExportButton,
  FilterButton,
  sanitizeListRestProps,
  AutocompleteArrayInput,
  CreateButton
} from 'react-admin';

import { IconWithTooltip,toChoices,tipologialocation,categoriafornitore,provincie } from '../../utils/constants';


const helperText="Ricerca libera nei campi Nome,Congome,Email,Azienda";





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
      <AutocompleteArrayInput source="tipologialocation" label="Tipologia Location" choices={tipologialocation} allowEmpty={false}/>,
      <AutocompleteArrayInput source="categoriafornitore" label="Categoria Fornitore" choices={categoriafornitore} allowEmpty={false}/>,
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
          <CreateButton />
          <ExportButton  maxResults={total}  />
      </TopToolbar>
  );
};

export const SupplierList= (props) => (
  <List {...props} actions={<ListActions />} filters={SupplierFilter}>
    <Datagrid rowClick="show">
      <TextField source="nome" label= 'Nome' />
      <TextField source="cognome" label= 'Cognome' />
      <EmailField source="email" label='Email'/>
      <TextField source="azienda" label= 'Azienda' />
      <TextField source="provincia" label= 'Provincia' />
      <TextField source="citta" label= 'Città' />
      <TextField source="cap" label= 'CAP' />
      <TextField source="categoriafornitore"  label= 'Categoria fornitore' />
      <TextField source="tipologialocation"  label= 'Tipologia location' />      
      <FileField source="filepresentazione" label="Presentazione" target="_blank"/>
      <DateField source="inserttimestamp" label="Data registrazione" showTime={false} />	
      <ShowButton />
    </Datagrid>
  </List>
);
