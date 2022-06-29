import React from 'react';
import {
  Filter,
  List,
  Datagrid,
  TextField,
  BooleanField,
  NumberField,
  ShowButton,
  DateField,
  TextInput,
  NumberInput,
  BooleanInput,
  DateInput,useRecordContext,
  useListContext,
  TopToolbar,
  sanitizeListRestProps,
  FilterButton,
  CreateButton,
  ExportButton
} from 'react-admin';
import { IconWithTooltip } from '../../utils/constants';

const helperText="Rierca libera nei campi Nome posizione lavorativa e Descrizione";


const EventFilter =[
  <TextInput  source="querysearch"         
  InputLabelProps={{ style: { pointerEvents: "auto" } }}
  label={
    <div>
       Ricerca libera
      <IconWithTooltip infoText={helperText}/>
    </div>
  } alwaysOn />,
      <BooleanInput source="attivo"  label='Attivo' defaultValue="true"/>,
      <DateInput source="datainizio" label= 'Data Inizio' />,
      <DateInput source="datafine"   label='Data Fine' />,
      <NumberInput source="numerominimocandidati" label= 'Numero Minimo Candidati' />,
      <NumberInput source="numeromassimocandidati" label='Numero Massimo Candidati' />,
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
          <ExportButton  maxResults={total}/>
      </TopToolbar>
  );
};


const EllipsisTextField = (props) => {
  const { source } = props;
  const record = useRecordContext(props);

  function getText(tagString,strlenght){
    var text = null;
    if(tagString){
      var html = tagString;
      var div = document.createElement("div");
      div.innerHTML = html;
      text = div.textContent || div.innerText || "";
      text=text.length>strlenght ? text.substring(0,strlenght)+'...':text;
    }
    return text
  }

  return <span>{getText(record[source],97)}</span>;
}

export const EventList= (props) => (
  <List {...props}  {...props} actions={<ListActions />}  filters={EventFilter}>
    <Datagrid rowClick="show">
      <TextField source="nomeevento" label= 'Nome posizione lavorativa' />
      <DateField source="datainizio" label= 'Data Inizio' />
      <DateField source="datafine" label= 'Data Fine' />
      <BooleanField source="attivo" label= 'Attivo' />
      <EllipsisTextField source="descrizione"  label= 'Descrizione' />
      <NumberField source="numerominimocandidati" label= 'Numero Minimo Candidati' />
      <NumberField source="numeromassimocandidati" label= 'Numero Massimo Candidati' />
      <TextField source="urlcandidature" label= 'URL per candidature' />
      <ShowButton />
    </Datagrid>
  </List>
);
