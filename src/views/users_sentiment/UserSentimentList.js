import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CakeIcon from '@material-ui/icons/Cake';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  FunctionField,
  DeleteButton,
  DateField,
  TextInput,
  NumberInput,
  BooleanInput,
  DateInput,
  useListContext, 
  Pagination,
  EditButton,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  SelectInput,
  sanitizeListRestProps,
  AutocompleteArrayInput 
} from 'react-admin';
import IconButton from '@material-ui/core/IconButton';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import InsertInvitationSharpIcon from '@material-ui/icons/InsertInvitationSharp';
import ThumbsUpDownSharpIcon from '@material-ui/icons/ThumbsUpDownSharp';
import HowToRegSharpIcon from '@material-ui/icons/HowToRegSharp';
import { IconWithTooltip,citta,genderItems,levels,eye_colors,hair_colors,regioni,provincie,numero_scarpe,taglia_vestito,stato,valutazione,toChoices } from '../../utils/constants';

const helperText="Ricerca la srtinga nei campi Nome,Secondo nome,Cognomr,Codice Fiscale,Note,email";

const UserFilter = [
    <TextInput source="nome" label='Nome' />,
    <TextInput source="secondonome" label="Secondo Nome" />,
    <TextInput source="cognome" label="Cognome" />
];



const PostPagination = props => <Pagination rowsPerPageOptions={[9, 18, 27]} {...props} />;



 

export const UserSentimentList  = (props) => (
    <List title="Utenti"  {...props}   filters={UserFilter} pagination={<PostPagination />} perPage={9} sort={{ field: 'inspectiontimestamp', order: 'DESC' }}>
    <Datagrid rowClick="edit">
      <TextField source="nome" label= 'Nome' sortable={false}/>
      <TextField source="secondonome" label= 'Secondo Nome' sortable={false}/>
      <TextField source="cognome" label= 'Cognome' sortable={false}/>
      <DateField source="inspectiontimestamp" label='Check time' sortable={false} showTime/>
      <TextField source="sentiment_detected" label='Sentiment' sortable={false} />
      <EditButton/>
     </Datagrid>

    </List>
);
