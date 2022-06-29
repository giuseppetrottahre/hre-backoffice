import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  TextInput,
  useListContext, 
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  sanitizeListRestProps,
  SelectInput
} from 'react-admin';
import { roles } from '../../utils/constants';

const AccountFilter = [
  
      <TextInput label="Search" source="querysearch" alwaysOn />,
      <SelectInput source="permissions" label= 'Ruolo' choices={roles} />
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

export const AccountList= (props) => (
  <List {...props} actions={<ListActions />} filters={AccountFilter}>
    <Datagrid rowClick="edit">
      <TextField source="id" label= 'Id' disabled/>
      <TextField source="username" label= 'Username' />
      <EmailField source="email" label='Email'/>
      <TextField source="permissions" label= 'Ruolo' />
      <DateField source="inserttimestamp"  label= 'Data creazione'  showTime={true}/>
      <DateField source="lastupdatetimestamp"  label= 'Data ultima modifica' showTime={true}/>
    </Datagrid>
  </List>
);