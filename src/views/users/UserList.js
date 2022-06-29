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
  ShowButton,
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
    <TextInput source="titoodistudi" label='Titolo di studi' />,
    <BooleanInput source="antincendio" label="Antincendio" defaultValue="true"/>,
    <BooleanInput source="automunito" label="Automunito" defaultValue="true"/>,
    <BooleanInput source="brevetto" label="Brevetto" defaultValue="true"/>,
    <AutocompleteArrayInput source="citta" label="Citta" choices={toChoices(citta)} allowEmpty={false}/>,
    <NumberInput source="annodiconseguimento" label="Anno di conseguimento" />, 
    <TextInput source="notepersonali" label="Note" />,
    <TextInput source="istituto" label="Istituto" />,
    <NumberInput source="votazione" label="Votazione" />,
    <DateInput source="datadinascita" label= "Data di nascita" />,
    <BooleanInput source="haccp" label="H.A.C.C.P" defaultValue="true"/>,
    <NumberInput source="maxage" label="Età massima" />,
    <NumberInput source="minage" label="Età minima" />,
    <AutocompleteArrayInput source="francese" label="Francese" choices={levels} allowEmpty={false}/>,
    <SelectInput source="genere" label="Genere" choices={genderItems}/>,
    <AutocompleteArrayInput source="inglese" label="Inglese" choices={levels} allowEmpty={false}/>,
    <BooleanInput source="primosoccorso" label="Primo Soccorso" defaultValue="true"/>,
    <AutocompleteArrayInput source="provincia" label="Provincia" choices={toChoices(provincie)} allowEmpty={false}/>,
    <AutocompleteArrayInput source="regione" label="Regione" choices={toChoices(regioni)} allowEmpty={false}/>,
    <TextInput  source="querysearch"         
    InputLabelProps={{ style: { pointerEvents: "auto" } }}
    label={
      <div>
         Ricerca libera
        <IconWithTooltip infoText={helperText}/>
      </div>
    } alwaysOn />,
    <AutocompleteArrayInput source="spagnola" label="Spagnolo" choices={levels} allowEmpty={false}/>,
    <AutocompleteArrayInput source="stato" label="Stato" choices={toChoices(stato)} allowEmpty={false}/>,
    <AutocompleteArrayInput source="tedesca" label="Tedesco" choices={levels} allowEmpty={false}/>,
    <BooleanInput source="tesserinoaeroporto" label="Tesserino Aeroporto" defaultValue="true"/>,
    <BooleanInput source="tesserinosicurezza" label="Tesserino Sicurezza" defaultValue="true"/>,
    <AutocompleteArrayInput source="valutazione" label="Valutazione" choices={toChoices(valutazione)} allowEmpty={false}/>
];



/*
const cardStyle = {
    width: 370,
    minHeight: 200,
    margin: '0.2em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const propertyElement={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
}


const UserGrid = () => {
    const { ids, data, basePath } = useListContext();
    return (
        <div style={{ margin: '1em' }}>
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<FunctionField record={data[id]} render={record => `${record.nome} ${record.secondonome!==null?record.secondonome:''} ${record.cognome}`}/>}
                    subheader={<div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'}}>
                    <HowToRegSharpIcon/><TextField record={data[id]} source="stato" />
                    <ThumbsUpDownSharpIcon/><TextField record={data[id]} source="valutazione" /></div> } 
                    avatar={<Avatar icon={<PersonIcon />}style= {{ backgroundColor: data[id].genere.toLowerCase()==='f'?"#ec49a6":"#02a3fe"}} />}
                />
                <CardContent >
                   <div style={propertyElement}> <CreditCardIcon/><TextField record={data[id]} source="codicefiscale" label="Codice fiscale"/></div>
                   <div style={propertyElement}> <CakeIcon/> <DateField record={data[id]} source="datadinascita"/></div>
                   <div style={propertyElement}> <AlternateEmailIcon/>    <EmailField record={data[id]} source="mail" /></div>
                   <div style={propertyElement}> <SmartphoneIcon/> <TextField record={data[id]} source="cellulare" /></div>
                </CardContent> 
                <CardActions style={{ textAlign: 'right' }}>
                    <DeleteButton resource="users" basePath={basePath} record={data[id]} />
                    <ShowButton resource="users" basePath={basePath} record={data[id]} />
                    <div style={propertyElement}><InsertInvitationSharpIcon/> <DateField record={data[id]} source="inserttimestamp"  showTime /></div>
                </CardActions>
            </Card>
        )}
        </div>
    );
};*/


const PostPagination = props => <Pagination rowsPerPageOptions={[9, 18, 27]} {...props} />;


const ListActions = (props) => {
    var fileDownload = require('js-file-download');

    const downloadxlsRestPoint="/v1/backend/export";
    const  XlsxDownload=(data)=> {
        return fetch(downloadxlsRestPoint+"?filter="+encodeURIComponent(JSON.stringify(data)), {
            method: 'GET',
          /*  body: JSON.stringify(data),*/
            headers: {
              'Content-Type': 'application/json'
            },
          }).then(function(resp) {
            return resp.blob();
          }).then(function(blob) {
          return fileDownload(blob, 'anagrafica.xlsx');
          });
    }

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
            <ExportButton  maxResults={total}  label="CSV"/>
            <IconButton color="primary" aria-label="export to excel"  
                      style={{ padding:'4px 5px',fontSize: '0.8125rem'}}
                      onClick={() => XlsxDownload(props.filterValues)}> 
                    <GetAppSharpIcon style= {{fontSize: '20px'}}/>XLS
            </IconButton>
        </TopToolbar>
    );
};

 

export const UserList  = (props) => (
    <List title="Utenti"  {...props} actions={<ListActions />}  filters={UserFilter} pagination={<PostPagination />} perPage={9} sort={{ field: 'inserttimestamp', order: 'DESC' }}>
    {/*    <UserGrid />*/}
    <Datagrid rowClick="show">
      <TextField source="nome" label= 'Nome' sortable={false}/>
      <TextField source="cognome" label= 'Cognome' sortable={false}/>
      <EmailField source="mail" label='Email' sortable={false}/>
      <TextField source="cellulare" label= 'Cellulare' sortable={false}/>
      <TextField source="provincia" label= 'Provincia' sortable={false}/>
      <TextField source="citta" label= 'Città' sortable={false}/>
      <TextField source="stato" label= 'Stato' sortable={false}/>
      <TextField source="valutazione" label= 'Valutazione' sortable={false}/>	
      <ShowButton/>
     </Datagrid>

    </List>
);
